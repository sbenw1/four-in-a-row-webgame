/*
*	Observer
*	========
*	This class is the connection between the front 
*	and the back end.
*	
*	SetupCommonControls					=	this function sets up the common controls.
*	SetupColumnControls					=	this function assigns functionality to column controls.
*	ChangeTurn							=	this changes the current turn.
*
*/

class Observer {
	
	constructor(){
		
		//	The current turn.
		this.currentTurn = 1;
		
		//	If player is vs themselves or AI
		//	0 is no game, 1 is vs themselves, 2 is vs computer
		this.typeOfGame = 0;
		
		//	If the game is active.
		this.gameIsOn = false;
		
		let gm = new GridManager();
		this.board = gm.FirstTimeSetup(new BoardOBJ());
		
		this.SetupCommonControls();
		
	}
	
	SetupCommonControls(){
		
		(function(obs){
			
			document.getElementById("btnYourself").addEventListener("click", function(){
				obs.gameIsOn = true;
				obs.typeOfGame = 1;
				obs.SetupColumnControls();
				
				if(obs.currentTurn == 1){
					document.getElementById("gameStatus").innerHTML = "Player 1 (blue) move";
				} 
						
				if(obs.currentTurn == 2){
					document.getElementById("gameStatus").innerHTML = "Player 2 (red) move";
				}
				
			});
			
			document.getElementById("btnComputer").addEventListener("click", function(){
				obs.gameIsOn = true;
				obs.typeOfGame = 2;
				obs.SetupColumnControls();
			});
			
		})(this);
		
	}
	
	SetupColumnControls(){
		
		/*
		
		<button id="btnCol0">COL 1</button>
		<button id="btnCol1">COL 2</button>
		<button id="btnCol2">COL 3</button>
		<button id="btnCol3">COL 4</button>
		<button id="btnCol4">COL 5</button>
		<button id="btnCol5">COL 6</button>
		<button id="btnCol6">COL 7</button>
		
		*/
		
		(function(obs){
			
			let buttons = [
				document.getElementById("btnCol0"),
				document.getElementById("btnCol1"),
				document.getElementById("btnCol2"),
				document.getElementById("btnCol3"),
				document.getElementById("btnCol4"),
				document.getElementById("btnCol5"),
				document.getElementById("btnCol6")
			];
			
			if(obs.gameIsOn == true){
				
				for(let a = 0; a < buttons.length; a++){
					
					buttons[a].addEventListener("click", function(){
						
						if(obs.gameIsOn == true){
							
							if(obs.currentTurn == 1){
								document.getElementById("gameStatus").innerHTML = "Player 1 (blue) move";
							} 
							
							if(obs.currentTurn == 2){
								document.getElementById("gameStatus").innerHTML = "Player 2 (red) move";
							}
							
							obs.FillNextUnoccupiedTile(a);
						
							let vc = new VictoryCheck();
							
							let allVerticalTiles = [
								obs.board.GetTilesByRow(0),
								obs.board.GetTilesByRow(1),
								obs.board.GetTilesByRow(2),
								obs.board.GetTilesByRow(3),
								obs.board.GetTilesByRow(4),
								obs.board.GetTilesByRow(5),
								obs.board.GetTilesByRow(6)
							];
							
							let allHorizontalTiles = [
								obs.board.GetTilesByColumn(0),
								obs.board.GetTilesByColumn(1),
								obs.board.GetTilesByColumn(2),
								obs.board.GetTilesByColumn(3),
								obs.board.GetTilesByColumn(4)
							];
							
							/*
							*	Get all diagonal tiles now.
							*	Entered manually.
							*/
							
							let firstLTRDiag = [
								[
									obs.board.GetTileByCoords(0, 1),
									obs.board.GetTileByCoords(1, 2),
									obs.board.GetTileByCoords(2, 3),
									obs.board.GetTileByCoords(3, 4)
								],
								[
									obs.board.GetTileByCoords(0, 0),
									obs.board.GetTileByCoords(1, 1),
									obs.board.GetTileByCoords(2, 2),
									obs.board.GetTileByCoords(3, 3),
									obs.board.GetTileByCoords(4, 4)
								],
								[
									obs.board.GetTileByCoords(2, 0),
									obs.board.GetTileByCoords(3, 1),
									obs.board.GetTileByCoords(4, 2),
									obs.board.GetTileByCoords(5, 3),
									obs.board.GetTileByCoords(6, 4)
								],
								[
									obs.board.GetTileByCoords(3, 0),
									obs.board.GetTileByCoords(4, 1),
									obs.board.GetTileByCoords(5, 2),
									obs.board.GetTileByCoords(6, 3)
								]
							];
							
							let firstRTLDiag = [
								[	
									obs.board.GetTileByCoords(6, 1),
									obs.board.GetTileByCoords(5, 2),
									obs.board.GetTileByCoords(4, 3),
									obs.board.GetTileByCoords(3, 4)
								],
								[	
									obs.board.GetTileByCoords(6, 0),
									obs.board.GetTileByCoords(5, 1),
									obs.board.GetTileByCoords(4, 2),
									obs.board.GetTileByCoords(3, 3),
									obs.board.GetTileByCoords(2, 4)
								],
								[
									obs.board.GetTileByCoords(5, 0),
									obs.board.GetTileByCoords(4, 1),
									obs.board.GetTileByCoords(3, 2),
									obs.board.GetTileByCoords(2, 3),
									obs.board.GetTileByCoords(1, 4)
								],
								[
									obs.board.GetTileByCoords(4, 0),
									obs.board.GetTileByCoords(3, 1),
									obs.board.GetTileByCoords(2, 2),
									obs.board.GetTileByCoords(1, 3)
								]
							];
								
							
							let drawWinRes = vc.CheckIsWin(obs.board.tileList, obs.currentTurn, false);
							
							let horizontalWin = vc.CheckIsWin(allHorizontalTiles, obs.currentTurn, true);
							let verticalWin = vc.CheckIsWin(allVerticalTiles, obs.currentTurn, true);
							
							let ltrdWin = vc.CheckIsWin(firstLTRDiag, obs.currentTurn, true);
							let rtldWin = vc.CheckIsWin(firstRTLDiag, obs.currentTurn, true);
							
							if(drawWinRes == true){
								obs.gameIsOn = false;
							}
							
							if(horizontalWin == true){
								obs.gameIsOn = false;
							}
							
							if(verticalWin == true){
								obs.gameIsOn = false;
							}
							
							if(ltrdWin == true){
								obs.gameIsOn = false;
							}
							
							if(rtldWin == true){
								obs.gameIsOn = false;
							}
							
							obs.ChangeTurn();
							
							if(obs.currentTurn == 1){
								document.getElementById("gameStatus").innerHTML = "Player 1 (blue) move";
							} 
							
							if(obs.currentTurn == 2){
								document.getElementById("gameStatus").innerHTML = "Player 2 (red) move";
							}
							
						}
						
					});
					
				}

				
			} else {
				window.alert("No game is on");				
			}
			
			
		})(this);
		
	}
	
	ChangeTurn(){
		
		if(this.currentTurn == 1){
			this.currentTurn = 2;
		} else {
			this.currentTurn = 1;
		}
		
	}
	
	//	Attempts to fill the next unoccupied tile in a column.
	FillNextUnoccupiedTile(columnNumber){
		
		let column = this.board.GetTilesByRow(columnNumber);
		
		//let unoccupiedTile = "";
		
		let height = 5, width = 7;
		
		for(let a = 0; a < height; a++){
			
			if(column[a].occupation == 0){
				
				let unoccupiedTile = column[a];
				unoccupiedTile.occupation = this.currentTurn;
				this.board.UpdateTileByCoords(unoccupiedTile);
				
				break;
				
			}
			
		}
		
		let gm = new GridManager();
		gm.DisplayBoard(this.board);
		
	}
		
}
