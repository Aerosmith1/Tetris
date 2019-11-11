export default class Game{

	score=0;
    lines=0;
    level=0;
    playfield = this.createfield();

	activePiece =this.createpiece();
nextpiece = this.createpiece();

movePieceLeft(){

	this.activePiece.x-=1;
	if(this.isPieceOutofBounds()){

		this.activePiece.x+=1;
		

	}
}

movePieceright(){

	this.activePiece.x+=1;

	if(this.isPieceOutofBounds()){

		this.activePiece.x-=1;
		

	}
}

movePiecedown(){

	this.activePiece.y+=1;
	if(this.isPieceOutofBounds()){

		this.activePiece.y-=1;
		this.lockPiece();
		this.updatepiece();
	}

	

}
rotatePiece(){

	const blocks = this.activePiece.blocks;
	const length = blocks.length;
	const temp =[];
	for (let i = 0; i < length; i++) {
		temp[i]=new Array(length).fill(0);
		
	}

	for (let y = 0; y < length; y++) {
		for (let x = 0; x < length; x++) {
			temp[x][y]=blocks[length-1-y][x];
			
		}
		
	}

	this.activePiece.blocks=temp;


}

isPieceOutofBounds(){

	const {y:PieceY, x:PieceX, blocks} = this.activePiece;
	for(let y=0; y<blocks.length; y++){
		for (let x = 0; x < blocks[y].length; x++) {
			if(blocks[y][x] &&
				 ((this.playfield[PieceY+y]===undefined || this.playfield[PieceY+y][PieceX+x]===undefined)
				 || this.playfield[PieceY+y][PieceX+x])){

				return true;

			}
			
		}
	
	}

	return false;
}
lockPiece(){
	const {y:PieceY, x:PieceX, blocks} = this.activePiece;
	for(let y=0; y<blocks.length; y++){
		for (let x = 0; x < blocks[y].length; x++) {
			if(blocks[y][x]){
			this.playfield[PieceY+y][PieceX+x]=blocks[y][x];
			}
		}


	}	


	
}


getState(){

	const playfield = this.createfield();

	const {y:PieceY, x:PieceX, blocks} = this.activePiece;

	for(let y=0; y<this.playfield.length; y++){
		for (let x = 0; x < this.playfield[y].length; x++) {
			playfield[y][x]=this.playfield[y][x];
			
		}


	}

	for(let y=0; y<blocks.length; y++){
		for (let x = 0; x < blocks[y].length; x++) {
			if(blocks[y][x]){
			playfield[PieceY+y][PieceX+x]=blocks[y][x];}
			
		}


	}


	return{ playfield};


}

createfield(){

	const playfield = [];

	for (let y = 0; y < 20; y++) {
		playfield[y]=[];

		for (let x = 0; x < 15; x++) {
			playfield[y][x] = 0;
			
		}
		
}

return playfield;

}

createpiece(){

	const index = Math.floor(Math.random()*7);
	const type = 'IJLOSTZ'[index];
	const piece = {x:0,y:-1};

	switch(type){


		case 'I': piece.blocks = [

			[1,1,1,1],
			[0,0,0,0],
			[0,0,0,0],
			[0,0,0,0]
		];

			break;

		case 'J':piece.blocks = [

			[2,2,2],
			[0,0,2],
			[0,0,0],
			
		]; 
			
		break;
			
	     case 'L': piece.blocks = [

			[0,0,0],
			[3,3,3],
			[3,0,0],
			[0,0,0]
		]; 
			
		break;

		case 'O': piece.blocks = [

			[0,0,0],
			[0,4,4],
			[0,4,4],
			[0,0,0]
		]; 
			
		break;

		case 'S': piece.blocks = [

			[0,0,0,0],
			[0,0,0,0],
			[0,0,5,5],
			[0,5,5,0]
		]; 
			
		break;

		case 'T': piece.blocks = [

			[6,6,6],
			[0,6,0],
			[0,6,0],
			
		]; 
			
		break;

		case 'Z': piece.blocks = [

			[7,7,0],
			[0,7,7],
			[0,0,0],
		
		]; 
			
		break;
		
		default : throw new Error('undefined type');

	}

	return piece;

}


updatepiece(){

	this.activePiece=this.nextpiece;
	this.nextpiece=this.createpiece();

}


}

