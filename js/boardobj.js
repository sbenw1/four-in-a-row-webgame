/*
*	BoardOBJ
*	========
*	This class represents a board object.
*
*	tileList			=	an array of tiles 
*
*	AddTile				=	this function adds tile object to tileList array.
*	GetTileByCoords		=	this function returns a specific tile according to x and y 
*							coordinates.
*	GetTilesByRow		=	this function returns an array of tiles by a row (posX).
*	GetTilesByColumn	=	this function returns an array of tiles by column (posY).
*	UpdateTileByCoords	=	this function replaces a tile by coordinates (posX, posY).
*/

class BoardOBJ {
	
	constructor(){
		
		this.tileList = [];
		
	}
	
	AddTile(tile){
		
		this.tileList.push(tile);
		
	}
	
	GetTileByCoords(posX, posY){
		
		var tileReturn = "";
		
		for(let a = 0; a < this.tileList.length; a++){
			
			if(this.tileList[a].posX == posX && this.tileList[a].posY == posY){
				
				tileReturn = this.tileList[a];
				break;
				
			} 
			
		}
		
		return tileReturn;
		
	}
	
	
	GetTilesByRow(posX){
		
		var tileRow = [];
		
		for(let a = 0; a < this.tileList.length; a++){
			
			if(this.tileList[a].posX == posX){
				
				tileRow.push(this.tileList[a]);
				
			}
			
		}
		
		return tileRow;
		
	}
	
	GetTilesByColumn(posY){
		
		var tileColumn = [];
		
		for(let a = 0; a < this.tileList.length; a++){
			
			if(this.tileList[a].posY == posY){
				
				tileColumn.push(this.tileList[a]);
				
			}
			
		}
		
		return tileColumn;
		
	}
	
	UpdateTileByCoords(tile){
		
		for(let a = 0; a < this.tileList.length; a++){
			
			if(tile.posX == this.tileList[a].posX && tile.posY == this.tileList[a].posY){
				
				this.tileList[a] = tile;
				break;
				
			}
			
		}
		
	}
	
	
}


//	end
