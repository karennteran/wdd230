// Create array:
// day array:
// let dayname = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "wednesday",
//     "thursday",
//     "Friday",
//     "Saturday"
// ];


// month array:
let months = [
    "January",
    "February",
    "March",
    "april",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

let lastModif = Date.parse(document.lastModified);
// let dayName = dayname[d.getday()];
let monthName = months[d.getmonth()];
let year = d.getfullyear();
`Last Update: ${dayName}, ${monthName}/${d.getDate()}/${year}`

document.getElementById("lastmodified").textContent


