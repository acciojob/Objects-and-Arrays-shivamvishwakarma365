const players = ["John", "Bob", "Alice", "Poppy"];
var team=players;
var team1=players.slice();

const person = {
  name: "John Doe",
  age: 80,
};
var cap1={...person};
// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
