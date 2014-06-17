/**
 * Clock
 */



function Clock()
{
	//.DB_get _time, _day?
	
	var time			= _time; //integer
	var day 			= _day;  //integer
	

	var addDay = function()
	{
		time = 0;
		day++;
	};
	doTick();
}

Clock.prototype.Time = function()
{
	return Math.floor(time / 60) + ":" + Math.floor((time / 60 - hours) * 60);
};

Clock.prototype.doTick = function()
{
	time += STATICS.clockspeed;
	if(time >= 1440) addDay();
}; 

function getTick()
{
	return time;
}