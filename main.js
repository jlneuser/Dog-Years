// my age
var myAge = 35;

// first 2 years of a dog's life
var earlyYears = 2;

earlyYears *= 10.5;

// each year after first 2 years of a dog's life
var laterYears = myAge - 2

// number of dog years for later years 
laterYears *= 4;

// my age equivalent to a dog's age
var myAgeInDogYears = earlyYears + laterYears;

// making my name lowercase 
var myName = 'Jeff'.toLowerCase();

// stating my human age and my dog age
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
