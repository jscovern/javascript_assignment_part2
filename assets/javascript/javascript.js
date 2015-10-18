//console.log(document.getElementById("userEnteredNum").innerHTML);
/*if (document.getElementById("userEnteredNum").innerHTML=undefined) {
  console.log("no number entered");
} else {
  var num1=document.getElementById("userEnteredNum").innerHTML;
}
*/
/*var x = document.getElementById('myForm');
window.addEventListener("DOMContentLoaded",function()
document.getElementById("myForm").addEventListener("click", function(){
  form.submit();})
)}*/
//var i = x.elements.namedItem("userEnteredNum").value;
//console.log(i);
function getNumBeers(){
  var newNumBeers=prompt("How many beers would you like to drink?");
  var numBeers=parseInt(newNumBeers);
  //console.log(numBeers);
  //console.log(typeof numBeers);
    if(numBeers>0 && typeof numBeers==="number"){
      //console.log("made it inside if");
      for(i=0; i<=numBeers; i++){
        //console.log("made it inside for");
        var numBeersLeft=numBeers-i;
        document.getElementById("numBeersText").innerHTML += numBeersLeft + " bottles of beer on the wall!<br>";
      }
    }else{
      alert("Gimme a real number of beers to drink!");
    }
}

function submitTheForm(){
  //var x=document.getElementById("myForm").submit();
  //document.getElementsByName('userEnteredNum').submit()
  var num1=document.getElementById("userEnterdNum").value;
  if (num1<10) {
    alert("The value you entered of: " + num1 + ", is less than 10!")
  }else {
    alert("The value you entered of: " + num1 + ", is greater than 10!")
  }
}

function displayUserName(userName){
  var nameToShow=userName.value;
  document.getElementById("UserNameConfirmation").innerHTML="You entered the name: " + nameToShow;
}

function printToConsole(){
  var currentTime=new Date();
  var hours=formatForLessThan10(currentTime.getHours());
  var minutes=formatForLessThan10(currentTime.getMinutes());
  /*var ampm;
  if (hours<=12) {
    ampm="am";
  } else{
    ampm="pm";
  }*/
  console.log("Did you know it is "+hours+":"+minutes+" ");
}

function formatForLessThan10 (num2){
  if(num2<10){
    num2="0"+num2;
  }
  return num2;
}
