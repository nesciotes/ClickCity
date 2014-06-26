//		Dimensions of a balk
//
//    .+------+   
//  .' |    .'| 
// +---+--+'  | H
// |   |  |   | 
// |  ,+--+---+
// |.'    | .' L
// +------+'   
//	  W
//
// Width  defines the X
// Height defines the Y
// Length defines the Z

function Dimension(_width, _heigth, _length)
{
	var width 	= _width;	// int
	var height = _height;	// int
	var length = _length;	// int
};

Dimension.prototype.getVertices = function() {
	return [
		//Front face
		-width / 2, -height / 2,  length / 2,
		 width / 2, -height / 2,  length / 2,
		 width / 2,  height / 2,  length / 2,
		-width / 2,  height / 2,  length / 2,
		
		// Back face
		-width / 2, -height / 2, -length / 2,
		-width / 2,  height / 2, -length / 2,
		 width / 2,  height / 2, -length / 2,
		 width / 2, -height / 2, -length / 2,
		
		// Top face
		-width / 2,  height / 2, -length / 2,
		-width / 2,  height / 2,  length / 2,
		 width / 2,  height / 2,  length / 2,
		 width / 2,  height / 2, -length / 2,
		
		// Bottom face
		-width / 2, -height / 2, -length / 2,
		 width / 2, -height / 2, -length / 2,
		 width / 2, -height / 2,  length / 2,
		-width / 2, -height / 2,  length / 2,
		
		// Right face
		 width / 2, -height / 2, -length / 2,
		 width / 2,  height / 2, -length / 2,
		 width / 2,  height / 2,  length / 2,
		 width / 2, -height / 2,  length / 2,
		
		// Left face
		-width / 2, -height / 2, -length / 2,
		-width / 2, -height / 2,  length / 2,
		-width / 2,  height / 2,  length / 2,
		-width / 2,  height / 2, -length / 2,
	];
};