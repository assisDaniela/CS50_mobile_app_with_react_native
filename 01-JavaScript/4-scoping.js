// console.log(thisIsAConst); // error!
// console.log(thisIsALet); // error!
console.log(thisIsAVar); // Ok, but is undefined
thisIsHoisted();
// thisIsNotHoistedConst(); // error!
// thisIsNotHoistedVar(); // error! => 

const thisIsAConst = 50;
// thisIsAConst++; // error!

const constObj = {}
constObj.a = 'a';

let thisIsALet = 51;
thisIsALet = 50;

// let thisIsALet = 51; // error!

var thisIsAVar = 40;
thisIsAVar = 41;

var thisIsAVar = 40; // Ok

function thisIsHoisted() {
    console.log('this function is declared at the bottom of the file');
}

const thisIsNotHoistedConst = function() {
    console.log('should this be hoisted?');
}

var thisIsNotHoistedVar = function() {
    console.log('should this be hoisted?');
}