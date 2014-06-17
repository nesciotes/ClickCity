/**
 * Player
 */

function Player(_id)
{
	var id = _id;		//int
	//DB(get info player)
	var name;			//string
	var money;			//float
	var pos;			//Point
}

Player.prototype.getPosition = function()
{
	return pos;
};

Player.prototype.getId = function()
{
	return id;
};

Player.prototype.moveUp = function()
{
	pos.up(STATICS.movespeed);
};

Player.prototype.moveDown = function()
{
	pos.down(STATICS.movespeed);
};

Player.prototype.moveLeft = function()
{
	pos.left(STATICS.movespeed);
};

Player.prototype.moveRight = function()
{
	pos.right(STATICS.movespeed);
};

Player.prototype.moveJump = function()
{
	pos.jump();
};

Player.prototype.moveFall = function()
{
	pos.fall();
};

Player.prototype.getPayed = function(amount)
{
	money += amount;
	//DB(update amount);
};

Player.prototype.doPayment = function(to, amount)
{
	money -= amount;
	//DB(update amount);
	//DB(insert todopayment, to.getID());
};