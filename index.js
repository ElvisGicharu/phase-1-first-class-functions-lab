// Code your solution in this file!
const returnFirstTwoDrivers= function(driver){
    return driver.slice(0,2);
};

const returnLastTwoDrivers = function(driver){
    return driver.slice(-2);
};

const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier =function(fare) {
    return function(trips) {
       return fare* trips ;
    };
};

const fareDoubler = createFareMultiplier (2);
const  fareTripler=  createFareMultiplier (3);

const selectDifferentDrivers=function(driver,whichdriver){
    return whichdriver(driver);
};