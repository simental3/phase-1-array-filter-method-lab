// Array Filter Method Lab Notes

// Globals
const drivers = [
    'Bobby',
    'Sammy',
    'Sally',
    'Annette',
    'Sarah',
    'Bobby'
];

// #1.
// Step 1:
function findMatching (array, string) {
    return array.filter(function (driver) {
        return driver === string;
    })
}
// Step 2:
function findMatching (array, string) {
    return array.filter(function (driver) {
        return driver.toLowerCase() === string.toLowerCase();
    })
}
// Step 3:
function findMatching (array, string) {
    return array.filter((driver) => {
        driver.toLowerCase() === string.toLowerCase();
    })
}
// Step 4:
function findMatching (array, string) {
    return array.filter( driver => driver.toLowerCase() === string.toLowerCase() );
}
console.log(findMatching(drivers, 'Bobby'));
// LOG: (2) ['Bobby', 'Bobby']


// #2.
// Step 1:
function fuzzyMatch (array, string) {
    return array.filter(function (driver) {
        return driver.startsWith(string);
    })
}
// Step 2:
function fuzzyMatch (array, string) {
    return array.filter(function (driver) {
        return driver.startsWith(string);
    })
}
// Step 3:
function fuzzyMatch (array, string) {
    return array.filter((driver) => {
        driver.startsWith(string);
    })
}
// Step 4:
function fuzzyMatch (array, string) {
    return array.filter( driver => driver.startsWith(string) );
}
console.log('Fuzzy Match:', fuzzyMatch(drivers, 'S'));
// LOG: Fuzzy Match: (3) ['Sammy', 'Sally', 'Sarah']


// #3.
// Step 1:

// Step 2:

// Step 3:

// Step 4:


/*
**Anonymous function** inside the .filter ()
Previous Lesson Example:
[1, 2, 3, 4, 5].filter(function (num) {
    return num > 3;
});
// => [4, 5]
Arrow Function:
[1, 2, 3, 4, 5].filter( num => num > 3; )


// Anything that's iterating (map, filter, etc.) will need the place holder for each INDIVIDUAL index for the array 
*/


// Alternate for #2:
// Step 1:
function fuzzyMatch (array, str) {
    return array.filter( function (driver) {
        return driver.toLowerCase().indexOf(str.toLowerCase()) !== -1;
    } )
}
// Step 2:
function fuzzyMatch (array, str) {
    return array.filter( function (driver) {
        driver.toLowerCase().indexOf(str.toLowerCase()) !== -1;
    } )
}
// Step 3:
function fuzzyMatch (array, str) {
    return array.filter( function (driver) {
        driver.toLowerCase().indexOf(str.toLowerCase()) !== -1;
    } )
}
// Step 4:
function fuzzyMatch (array, str) {
    return array.filter( function (driver) {
        driver.toLowerCase().indexOf(str.toLowerCase()) !== -1;
    } )
}