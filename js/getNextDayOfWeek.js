/*
	Returns Date object with the next dayOfWeek.

	@param dayOfWeek The day of the week (0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday
										  5 = Friday, 6 = Saturday)
	@return A date object with the next dayOfWeek
*/

function getNextDayOfWeek(dayOfWeek) 
{

	var date = new Date();
	var unformattedDate = new Date();

	unformattedDate.setDate(date.getDate() + (7 + dayOfWeek - date.getDay()) % 7);
	unformattedDate.setHours(10, 30); // Meeting is at 10:30 AM

	if (date.getDate() == unformattedDate.getDate()) // Today is the meeting
	{
		if (date.getTime() >= unformattedDate.getTime() && 
			date.getTime() <= unformattedDate.getTime() + 7200*1000) // 7200*1000 ms is equal to 2 hours (From 10:30 to 12:30)
			// If this is true, the meeting is RIGHT NOW
		{
			// MEETING HAPPENING RIGHT NOW
			return "RIGHTNOW";
		}
		else if (date.getTime() < unformattedDate.getTime()) // It's happening later
		{
			return "LATER";
		}
		else // It already passed
		{
			unformattedDate.setDate(unformattedDate.getDate() + 7); // Add a week
		}
	}

	//// Formatting the date

	// get day in letters
	//var dayInLetters = "Friday"; // can be coded, but for now it'll be typed

	// get month in letters
	var currentMonth = unformattedDate.getMonth(); // first as an integer (0-11)
	var monthInLetters = getMonthFromInt(currentMonth); // now in letters

	// get the date number
	var currentDate = unformattedDate.getDate();

	// get the year
	var currentYear = unformattedDate.getFullYear();

	var dateString = //dayInLetters + ", " + 
					 monthInLetters + " " + 
					 currentDate  + ", " +
					 currentYear; // Friday, February xx, 2015

    return dateString;
}

function getMonthFromInt(monthNumber) {

	var monthInLetters;

	switch(monthNumber) {
		case 0: 
			monthInLetters = "January";
			break;
		case 1: 
			monthInLetters = "February";
			break;
		case 2: 
			monthInLetters = "March";
			break;
		case 3: 
			monthInLetters = "April";
			break;
		case 4: 
			monthInLetters = "May";
			break;
		case 5: 
			monthInLetters = "June";
			break;
		case 6: 
			monthInLetters = "July";
			break;
		case 7: 
			monthInLetters = "August";
			break;
		case 8: 
			monthInLetters = "September";
			break;
		case 9: 
			monthInLetters = "October";
			break;
		case 10: 
			monthInLetters = "November";
			break;
		case 11: 
			monthInLetters = "December";
			break;
		default:
			monthInLetters = "Neverember";
	}

	return monthInLetters;
}

// IF statement to check if later or right now, or else.
var meeting = getNextDayOfWeek(5);

if (meeting == "LATER")
{
	document.getElementById("outernextmeeting").innerHTML = "Our next meeting is in ";

	var target_date = new Date();
	target_date.setHours(10, 30);
	target_date = target_date.getTime();

	var hours, minutes, seconds;

	var countdown = document.getElementById("nextmeeting");

	setInterval(function() {
		var current_date = new Date().getTime();
		var seconds_left = (target_date - current_date) / 1000;
	 
		hours = parseInt(seconds_left / 3600);
		seconds_left = seconds_left % 3600;
	  
		minutes = parseInt(seconds_left / 60);
		seconds = parseInt(seconds_left % 60);

		countdown.innerHTML = "";

		if (hours > 0)
		{
			countdown.innerHTML += hours;

			if (hours == 1) 
			{
				countdown.innerHTML += " hour, ";
			}
			else
			{
				countdown.innerHTML += " hours, ";
			}
		}

		if (minutes > 0)
		{
			countdown.innerHTML += minutes;

			if (minutes == 1) 
			{
				countdown.innerHTML += " minute and ";
			}
			else
			{
				countdown.innerHTML += " minutes and ";
			}
		}

		countdown.innerHTML += seconds + " seconds."

	}, 1000);	
}
else if (meeting == "RIGHTNOW")
{
	document.getElementById("outernextmeeting").innerHTML = "Our meeting is happening";
	document.getElementById("nextmeeting").innerHTML = " right now!";
}
else
{
	document.getElementById("outernextmeeting").innerHTML = "Our next meeting is this Friday, ";
	document.getElementById("nextmeeting").innerHTML = meeting;
}
