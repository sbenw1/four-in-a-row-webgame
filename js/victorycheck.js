/*
*	VictoryCheck
*	============
*	This class checks for victory of any given side.
*
*	CheckIsWin					=	this checks to see if there are four in a row of 
*								=	either player in any given direction.	
*
*/

class VictoryCheck {
	
	/*
	*	boardTiles 	=	either an array of array of tiles, or an array of tiles 
	*	side		=	the code of players. 0 is neutral, 1 is p1 2 is p2
	*	multiArray	=	boolean, if true then is array of array if false is single array
	*/
	
	CheckIsWin(boardTiles, side, multiArray){
		
		let isWin = false;
		
		if(multiArray == true){
			
			/*
			*	Loops through the array of arrays. Checks for a side, 
			*	if the occupation code is equal to side provided then 
			*	increment col1FourP1. Also checks to see if col1FourP1 is 
			*	equal to four, if it is then side has won. Otherwise, if 
			*	occupation is not equal to side, col1FourP1 is set to 0.
			*/		
			for(let i = 0; i < boardTiles.length; i++) {
				
				var col1FourP1 = 0;
				
				for(let a = 0; a < boardTiles[i].length; a++){
					
					if(boardTiles[i][a].occupation == side){
						
						col1FourP1++;
						
					} else {
						
						col1FourP1 = 0;
						
					}
					
					if(col1FourP1 == 4){
						
						window.alert("Side " + side + " is winner!");
						isWin = true;
						break;
						
					}
					
				}

				
			}
			
		} else {
	
			var limit = 34;		//	The number of tiles is 35 but we programmers start at 0
			
			/*
			*	Checks all tiles. if all tiles hav an occupation code 
			*	that is not neutral and is at the last tile, then set 
			*	draw to true.
			*/
			
			for(let a = 0; a < boardTiles.length; a++){
				
				if(boardTiles[a].occupation != 0){
					
					if(a == limit){
						
						isWin = true;
						window.alert("is draw!");
						
					}
					
				}
				
			}
			
		}
		
		return isWin;
		
	}
	
	
}
