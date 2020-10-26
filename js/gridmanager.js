/*
*	GridManager
*	===========
*	This class displays the grid as HTML.
*	
*	FirstTimeSetup				=	this function sets the grid up for first time.
*									it expects the board obj
*	DisplayBoard				=	this displays the board as HTML.
*
*/

class GridManager {

	constructor(){
		//	Does something
	}
	
	DisplayBoard(boardob){
		
		//	Reset the board.
		document.getElementById("gameBoard").innerHTML = "";
		
		document.getElementById("gameBoard").dataset.height = 5;
		document.getElementById("gameBoard").dataset.width = 7;
		
		let height = 5, width = 7;
		let cHeight = 0, cWidth = 0;
		
		for(cWidth = 0; cWidth < 7; cWidth++){
			
			var columnHTML = document.createElement("div");
			
			//for(cHeight = 5; cHeight > -1; cHeight--){
			for(let a = height-1; a > -1; a--){
			
				let tile = boardob.GetTileByCoords(cWidth, a);
				let tileHTML = document.createElement("div");
				
				tileHTML.id = tile.tileID;
				
				tileHTML.dataset.posX = cWidth;
				tileHTML.dataset.posY = a;
				tileHTML.dataset.occupation = tile.occupation;
				
				//	Change the tile style according to 
				//	occupation status.
				switch(tile.occupation){
					default:
						tileHTML.className = "neutralTile";
					break;
					case 1:
						tileHTML.className = "p1Tile";
					break;
					case 2:
						tileHTML.className = "p2Tile";
					break;
				}
				
				columnHTML.appendChild(tileHTML);
				
			}
			
			document.getElementById("gameBoard").appendChild(columnHTML);
			
		}
		
	}
	
	FirstTimeSetup(boardob){
		
		let height = 5, width = 7;
		let cHeight = 0, cWidth = 0;
		let cntr = 0;
		
		for(cWidth = 0; cWidth < 7; cWidth++){
			
			for(cHeight = 0; cHeight < 5; cHeight++){
				
				let tile = new Tile(
					cntr, 0, cWidth, cHeight
				);
				
				boardob.AddTile(tile);
				
				cntr++;
				
			}
			
		}

		return boardob;
		
	}

}
