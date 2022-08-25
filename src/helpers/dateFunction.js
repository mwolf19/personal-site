//These are functions for working with dates.

//Whatever data type is passed in is the data type that
//will be returned (most likely a string). There is a cconfirmDateType() at the beginning to make 
//sure the date passed is of type date, and sets the returnType. There is a confirmReturnType() at the 
//end to make sure we are returning the correct data type. This excludes the conversion functions.

//This is needed for certain calculations
const millisecondsInDay = 86400000;

let returnType = '';

function confirmInputType(date) {
  let type = (date instanceof Date ? "date" : "string");

  if (type === 'date') {
    returnType = 'date';

    return date;
  } else {
    returnType = 'string';

    return convertStringToDate(date);
  }
}

function confirmReturnType(date) {
  let type = (date instanceof Date ? "date" : "string");

  if (returnType === 'date') {
    if (type === 'date') {
      return date;
    } else {
      return convertStringToDate(date);
    }
  } else {
    if (type === 'date') {
      return convertDateToApiString(date);
    } else {
      return date;
    }
  }
}

//#region functions
export function addDay(date, amount) {
  date = confirmInputType(date);

  date.setDate(date.getDate() + amount);

  return confirmReturnType(date);
}

export function subtractDay(date, amount) {
  date = confirmInputType(date);

  date.setDate(date.getDate() - amount);

  return confirmReturnType(date);
}

export function addMonth(date, amount) {
  date = confirmInputType(date);

  date.setMonth(date.getMonth() + amount);

  return confirmReturnType(date);
}

export function subtractMonth(date, amount) {
  date = confirmInputType(date);

  date.setMonth(date.getMonth() - amount);

  return confirmReturnType(date);
}

export function addYear(date, amount) {
  date = confirmInputType(date);

  date.setYear(date.getYear() + amount);

  return confirmReturnType(date);
}

export function subtractYear(date, amount) {
  date = confirmInputType(date);

  date.setYear(date.getYear() - amount);

  return confirmReturnType(date);
}

export function dateDifference(startDate, endDate) {
  startDate = confirmInputType(startDate);

  endDate = confirmInputType(endDate);

  startDate = new Date(startDate);
  endDate = new Date(endDate);

  return confirmReturnType((endDate.getTime() - startDate.getTime()) / millisecondsInDay);
}

export function getDayOfWeek(date) {
  date = confirmInputType(date);

  let dayString = '';

  let dayNumber = date.getDay();

  switch (dayNumber) {
    case 0:
      dayString = 'Sunday';
      break;
    case 1:
      dayString = 'Monday';
      break;
    case 2:
      dayString = 'Tuesday';
      break;
    case 3:
      dayString = 'Wednesday';
      break;
    case 4:
      dayString = 'Thursday';
      break;
    case 5:
      dayString = 'Friday';
      break;
    case 6:
      dayString = 'Saturday';
      break;
  }

  return dayString;
}

export function getEndOfWeek(date) { 
  date = confirmInputType(date);
  
  date.setDate(date.getDate() + (6 - date.getDay()));

  return confirmReturnType(date); 
}

export function getBeginningOfWeek(date) { 
  date = confirmInputType(date);
  
  date.setDate(date.getDate() - (date.getDay()));

  return confirmReturnType(date); 
}

export function getEndOfMonth(date) {
  date = confirmInputType(date);

  date = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  return confirmReturnType(date);
}

export function getBeginningOfMonth(date) {
  date = confirmInputType(date);

  date = new Date(date.getFullYear(), date.getMonth(), 1);

  return confirmReturnType(date);
}

export function getMonthOfYear(date) {
  date = confirmInputType(date);

  let monthString = '';
  let monthNumber = date.getMonth();

  switch (monthNumber) {
    case 0:
      monthString = 'January';
      break;
    case 1:
      monthString = 'February';
      break;
    case 2:
      monthString = 'March';
      break;
    case 3:
      monthString = 'April';
      break;
    case 4:
      monthString = 'May';
      break;
    case 5:
      monthString = 'June';
      break;
    case 6:
      monthString = 'July';
      break;
    case 7:
      monthString = 'August';
      break;
    case 8:
      monthString = 'September';
      break;
    case 9:
      monthString = 'October';
      break;
    case 10:
      monthString = 'November';
      break;
    case 11:
      monthString = 'December';
  }

  return monthString;
}

export function getWeekOfYear(date) {
  date = confirmInputType(date);

  let firstOfYear = new Date(date.getFullYear(), 0, 1);

  let days = Math.floor((date - firstOfYear) / millisecondsInDay);

  date = Math.ceil((date.getDay() + 1 + days) / 7);

  return confirmReturnType(date);
}
//#endregion functions

//#region conversions
export function convertDateToDateNoTime(date) {   
  var dd = date.getDate();
  var mm = date.getMonth(); //January is 0!
  var yyyy = date.getFullYear();

  let returnDate = new Date(yyyy,mm,dd,0,0,0,0)

  return returnDate; 
}

export function convertDateToApiString(date) {    
  var dd = String(date.getDate()).padStart(2, '0');
  var mm = String(date.getMonth() + 1).padStart(2, '0');
  var yyyy = date.getFullYear();

  date = yyyy + '-' + mm + '-' + dd;

  return date; 
}

export function convertStringToDate(date) {
  let parts = [];

  if (date.includes('-')) {
    parts = date.split(/[-T]/);
  } 

  return new Date(parts[0], parts[1] - 1, parts[2]);
}

export function convertFullStringToDate(date) {
  let parts = [];

  if (date.includes('-')) {
    parts = date.split(/[-T]/);
  } 
  
  return new Date(parts[0], parts[1] - 1, parts[2].substring(0, 2));
}

//#endregion conversions