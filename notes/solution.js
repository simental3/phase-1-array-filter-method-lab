// Array Filter Method Lab

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