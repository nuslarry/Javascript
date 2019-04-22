//https://www.w3schools.com/js/js_hoisting.asp

//Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope 
//(to the top of the current script or the current function).

//JavaScript Initializations are Not Hoisted


//example1 :
<script>
var age=23;
function foo(){
	var age=65;
    console.log(age)
}
foo();
console.log(age);
</script>

//example 2:
<script>
var age=40
function foo(){
    console.log(age) //undefined, 因為age在這一層中被decalre,但尚未賦值
    var age=65;
    console.log(age);
}
foo();
console.log(age);
</script>
