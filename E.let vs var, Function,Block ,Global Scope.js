//javascript是可以redeclare variables的
//完整tutorial : https://www.w3schools.com/js/js_let.asp

var i = 5;
for (var i = 0; i < 10; i++) {
  // some statements
}
// Here i is 10

let i = 5;
for (let i = 0; i < 10; i++) {
  // some statements
}
// Here i is 5
