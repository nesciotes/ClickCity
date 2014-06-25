function Block(_pos, _type)
{
	var pos 	= _pos;  	// Position
	var type 	= _type; 	// Blocktype
	var light 	= 0;		// int
	var texture = {}		// texture;
}

Block.prototype.getVertices = function() {
	var dim = type.getDimension();
	var dimx = dim.length / 2;
	var dimy = dim.height / 2;
	var dimz = dim.width / 2;
	return [
		//Front face
		-dimx, -dimy,  dimz,
		 dimx, -dimy,  dimz,
		 dimx,  dimy,  dimz,
		-dimx,  dimy,  dimz,
		
		// Back face
		-dimx, -dimy, -dimz,
		-dimx,  dimy, -dimz,
		 dimx,  dimy, -dimz,
		 dimx, -dimy, -dimz,
		
		// Top face
		-dimx,  dimy, -dimz,
		-dimx,  dimy,  dimz,
		 dimx,  dimy,  dimz,
		 dimx,  dimy, -dimz,
		
		// Bottom face
		-dimx, -dimy, -dimz,
		 dimx, -dimy, -dimz,
		 dimx, -dimy,  dimz,
		-dimx, -dimy,  dimz,
		
		// Right face
		 dimx, -dimy, -dimz,
		 dimx,  dimy, -dimz,
		 dimx,  dimy,  dimz,
		 dimx, -dimy,  dimz,
		
		// Left face
		-dimx, -dimy, -dimz,
		-dimx, -dimy,  dimz,
		-dimx,  dimy,  dimz,
		-dimx,  dimy, -dimz,
	];
}