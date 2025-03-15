let name = prompt("Enter month: ").toLowerCase();

if(name === "january" || name === "february" || name === "march"){
    console.log("Months in Quarter 01");
}
else if(name === "april" || name === "may" || name === "june"){
    console.log("Months in Quarter 02");
}
else if(name === "july" || name === "august" || name === "september"){
    console.log("Months in Quarter 03");
}
else if(name === "october" || name === "november" || name === "december"){
    console.log("Months in Quarter 04");
}
else {
    console.log("Invalid month entered");
}
