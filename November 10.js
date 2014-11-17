/* Given a standard clock face, write a funciton that will return the inner angle between the hour and minute hands.  For instance:

12:00  -  returns 0
03:00  -  returns 90
12:30  -  returns 165
*/


/*
hour: 30 degrees / hour
      .5 degrees / minute


minute: 6 degrees / minute
*/

var timeAngle = function(time){
	time = time.split(':');
	var hour = Number(time[0]),
		minute = Number(time[1]),
		hourAngle = (hour * 30) + (minute * .5),
		minuteAngle = (minute * 6);
	if(hourAngle >= 360) hourAngle -= 360;
	if(minuteAngle >= 360) minuteAngle -= 360;
	if(hourAngle - minuteAngle > 180 || minuteAngle - hourAngle > 180){
		if(hourAngle >= minuteAngle) return 180 - ((hourAngle - minuteAngle) - 180);
		if(minuteAngle > hourAngle) return 180 - ((minuteAngle - hourAngle) - 180);	
	}
	if(hourAngle >= minuteAngle) return hourAngle - minuteAngle;
	if(minuteAngle > hourAngle) return minuteAngle - hourAngle;
}