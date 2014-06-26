function Game(_currentMap, _currentUser)
{
	var map  	= new Map(_currentMap);							// Map
	var user 	= new Player(_currentUser);						// Player
	var camera 	= new Camera(new Position(db.x, db.y, db.z));	// Camera
};