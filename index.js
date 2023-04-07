// Code your solution in this file!
function distanceFromHqInBlocks(location){
    const hq = 42;
    return Math.abs(location - hq);
}

function distanceFromHqInFeet(location) {
    const blocks = distanceFromHqInBlocks(location);
    const feet = blocks * 264
    return feet;
}

function distanceTravelledInFeet(start, destination) {
    const blocksTravelled = Math.abs(destination - start);
    const feetTravelled = blocksTravelled * 264;
    return feetTravelled;
}

function calculatesFarePrice(start, destination) {
    const feetTravelled = distanceTravelledInFeet(start, destination);
    let fare;
    if (feetTravelled <=  400) {
        fare = 0;
    } else if (feetTravelled > 400 && feetTravelled <= 2000) {
        fare = (feetTravelled - 400) * 0.02;
    } else if (feetTravelled > 2000 && feetTravelled <= 2500){
        fare = 25;
    } else {  // for distances greater than 2500. Is it ok to also have it as else if?
        fare = 'cannot travel that far';
    }
    return fare;
}
// Are functions declared in one function still applicable when the function is called or can it be redeclared?



