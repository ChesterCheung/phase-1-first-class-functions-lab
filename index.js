const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
const returnFirstTwoDrivers = function(){
    return(drivers.slice(0 , 2));
}
const returnLastTwoDrivers = function(){
    return(drivers.slice(2, 4));
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFaremultiplier(number){
    return number;
}

createFaremultiplier(function() {number * 4});