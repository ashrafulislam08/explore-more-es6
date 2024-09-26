// filter selects elements based on a condition and returns an array with the element that fulfilled the condition.
const numbers = [1, 5, 6, 4, 15];
const players = [75, 65, 67, 72, 55, 59];
// const selected = players.filter((p) => p > 50);
// const selected = players.filter((p) => p > 60);
// console.log(selected);

const selectedByEven = players.filter((p) => p % 2 === 0);
console.log(selectedByEven);

const friends = ["Tom", "John", "Michael", "Oliver", "Tim", "Joshna"];
const oddFriends = friends.filter((friend) => friend.length > 4);
console.log(oddFriends);
