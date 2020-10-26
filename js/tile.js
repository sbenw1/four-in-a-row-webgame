
/*
*	TILE JS
*	=======
*	This class represents a tile or counter.
*
*	tileID 			= the unique id of tile 
*	occupation 		= the occupation code ( 0 = neutral, 1 = p1 and 2 = p2)
*	posX			= the x coordinate
*	posY			= the y coordinate 
*
*
*/

class Tile {
	
	constructor(tileID, occupation, posX, posY){
		this.tileID = tileID;
		this.occupation = occupation;
		this.posX = posX;
		this.posY = posY;
	}
	
}


//	ends
