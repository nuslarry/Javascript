<!DOCTYPE html>
<html>
<body>

<p>Click the button to add elements to the beginning of the array.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;

function myFunction() {
  //加到前面
  fruits.unshift("Lemon", "Pineapple");//Lemon,Pineapple,Banana,Orange,Apple,Mango
  //刪前面
  fruits.shift("Lemon", "Pineapple");//Pineapple,Banana,Orange,Apple,Mango
  //加到後面
  fruits.push("Grava")//Pineapple,Banana,Orange,Apple,Mango,grava
  //刪後面
  fruits.pop()//Pineapple,Banana,Orange,Apple,Mango
  document.getElementById("demo").innerHTML = fruits;
}
</script>

<p><b>Note:</b> The unshift() method does not work properly in Internet Explorer 8 and earlier: the values will be inserted, but the return value will be <em>undefined</em>.</p>

</body>
</html>
