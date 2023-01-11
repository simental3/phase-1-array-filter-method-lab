// Array Filter Method Lab

// Globals
const drivers = [
    'Bobby',
    'Sammy',
    'Sally',
    'Annette',
    'Sarah',
    'Bobby'
];

const drivers2 = [
    {
        name: 'Bobby',
        hometown: 'Pittsburg'
    },
    {
        name: 'Sammy',
        hometown: 'New York'
    },
    {
        name: 'Sally',
        hometown: 'Cleveland'
    },
    {
        name: 'Annette',
        hometown: 'Los Angeles'
    },
    {
        name: 'Bobby',
        hometown: 'Tampa Bay'
    }
];

// 1.
function findMatching (array, string) {
    return array.filter( driver => driver.toLowerCase() === string.toLowerCase() );
}
console.log('Find Matching:', findMatching(drivers, 'Bobby'));
// LOG: Find Matching: (2) ['Bobby', 'Bobby']


// 2.
function fuzzyMatch (array, string) {
    return array.filter( driver => driver.startsWith(string) );
}
console.log('Fuzzy Match:', fuzzyMatch(drivers, 'S'));
// LOG: Fuzzy Match: (3) ['Sammy', 'Sally', 'Sarah']


// 3.
function matchName (array, string) {
    return array.filter(function (driver) {
        return driver.name === string;
    });
}
console.log('Match Name:', matchName(drivers2, 'Bobby'));
// LOG: { name: 'Bobby', hometown: 'Pittsburg' }
// LOG: { name: 'Bobby', hometown: 'Tampa Bay' }


/*
const result = drivers.filter(driversName => driversName === string)
Result will be a new array (generated from filter) that contains the elements meeting the condition in our callback: (driversName === string) 
*/

/*
// Deliverables
You'll be writing three functions:
1. findMatching- This function takes an array of drivers' names & a string as arguments, & returns the matching list of drivers. The
   function should be case insensitive.
2. fuzzyMatch - This function takes an array of drivers' names & a string as arguments for querying the array, & returns all drivers
   whose names begin with the provided letters.
3. matchName - This function takes an array of driver objects & a string as arguments. Each driver object has 2 properties: name &
   hometown. The function should return each element whose name property matches the provided string argument.
*/