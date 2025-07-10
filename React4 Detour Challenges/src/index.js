const nums = [1, 2, 3, 4, 5];

const squared = nums.map(function (x) {
  return x * x;
});

console.log(squared); // Array(5) [ 2, 4, 6, 8, 10 ] for x*2 checked in browser console.
// Array(5) [ 1, 4, 9, 16, 25 ] for x*x

const names = ["alice", "bob", "charlie", "danielle"];
// --> ["Alice", "Bob", "Charlie", "Danielle"]
// Your code here
const capNames = names.map(function (name) {
  return name.charAt(0).toUpperCase() + name.substring(1);
});

console.log(capNames); // [ 'Alice', 'Bob', 'Charlie', 'Danielle' ]

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"];

const htmlPokes = pokemon.map(function (poke) {
  return "<p>" + poke + "</p>";
});

console.log(htmlPokes); // [ '<p>Bulbasaur</p>', '<p>Charmander</p>', '<p>Squirtle</p>' ]
