/*
	Returns Date object with the next dayOfWeek.

	@param dayOfWeek The day of the week (0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday
										  5 = Friday, 6 = Saturday)
	@return A date object with the next dayOfWeek
*/

function getNextDayOfWeek(dayOfWeek) {

	var date = new Date();
	var unformattedDate = new Date();

	unformattedDate.setDate(date.getDate() + (7 + dayOfWeek - date.getDay()) % 7);

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

document.getElementById("nextmeeting").innerHTML = getNextDayOfWeek(5);