/**
 * Point
 */

function Point(_x, _y, _z)
{
	this.x = _x;	// float
	this.y = _y;	// float
	this.z = _z;	// float
}

Point.prototype.distanceTo = function(pointTo)
{
	return Math.sqrt(Math.pow(pointTo.x - this.x, 2) + 
					 Math.pow(pointTo.y - this.y, 2) +
					 Math.pow(pointTo.z - this.z, 2));
};