//tutorial: https://medium.com/@mandeep1012/function-declarations-vs-function-expressions-b43646042052
//function declaration

//Example: Function Expression
alert(foo()); // ERROR! foo wasn't loaded yet
var foo = function() { return 5; }

//Example: Function Declaration
alert(foo()); // Alerts 5. Declarations are loaded before any code can run.
function foo() { return 5; }

//Function declarations load before any code is executed while Function expressions load only when 
//the interpreter reaches that line of code.
