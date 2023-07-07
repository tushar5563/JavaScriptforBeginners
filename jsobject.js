
/*
//BUILD JAVASCRIPT OBJECTS//
var ourDog ={
    "name": "tuffy",
    "legs": 4,
    "tails": 1,
    "height": "3ft",
    "breed": "labro",
    "friends":["everything"]

};
//UPADTING OBJECT PROPERTIES//
ourDog.breed="chutiya";
//ADDING NEW PROPERTIES TO AN OBEJCT//
ourDog.bark="bow-bow";
//DELETING A PROPERTIES FROM AN OBJECT//
delete ourDog.height;
console.log(ourDog);

//ACCESSING OBJECT PROPERTIES WITH BRACKET NOTATION//
 var testObj={
    "an tree": "ham burger",
    "my side": "veggies",
    "the drink": "water"
 };
 var entreeValue=testObj;["an tree"];
 var drinkValue=testObj;["water"];

 //ACCESSING OBJECT PROPERTIES WITH VARIABLES//
 var testObj={
    11:"tushar",
    12: "aman",
    13: "sufiyan"
 };
 var playerNumber=12;
var player= testObj[playerNumber];
console.log(player)

//using object for lookups//
function phoneticLookup(val){
   var result =" ";

   var lookup={
      "alpha":"goku",
      "bravo": "eren",
      "charlie":"hinata",
      "delta":"naruto",
      "echo":"luffy"
   };
   result=lookup[val];
   return result;
}
console.log(phoneticLookup("echo"));

//TESTING OBJECTS FOR PROPERTIES//
var myObj={
   "kick": "salman",
   "pathan": "sharukh",
   "dangal": "amir"
};
function checkObjj(checkProp){
   if (myObj.hasOwnProperty(checkProp )){
      return myObj[checkProp];
   }else{
      return "not found";
   }
}
console.log(checkObjj("kick"));
//manipulating complex objects//
var complexObject=[
   {
      "artist":"charlie puth",
      "title": "attention",
      "release year":2017,
      "formats":[
         "cd","8t","LP"],
         "gold ": "true"
      
   },
   {
      "artist":"kanye west",
      "title": "heartless",
      "release year":2018,
      "formats":[
         "youtube video"
      ]
   }

];
console.log(complexObject); */

//ACCESSING NESTED OBJECTS//
var myPlants =
[{
   type:"flowers",
   list:[
      "rose",
      "tulip",
      "sunflower" ]
},
{
   type:"trees",
   list:[
      "fir",
      "birch",
      "pine"
   ]
}
];
var secondTree=myPlants[1].list[1];
console.log(secondTree);
//iterate through an array with for loop
var ourArr=[9,10,11,12];
var ourTotal=0;
for (var i=0;i<ourArr.length;i++){
ourTotal+=ourArr[i];}
console.log(ourTotal);

function multiplyAll(arr){
   var product=1;
   for(var i=0;i<arr.length;i++)
   {
      for(var j=0;j<arr[i].length;j++){
         product*=arr[i][j];
      }
   }
   return product;
}
var  product=multiplyAll([[1,2],[3,4],[5,6,7]]);
console.log(product);
function randomFraction() {
   return Math.random();
}
console.log(randomFraction());
 var randomNumberBetween0nd19=Math.floor(Math.random()*20);
 function randomWholeNum(){
   return Math.floor(Math.random()*10);
 }
console.log(randomWholeNum());
function ourRandomRange(myMin,myMax){
   return Math.floor(Math.random()*(myMax-myMin+1))+myMin;
}
 var randomRange=ourRandomRange(1,13);
console.log(randomRange);
 function convertIntoInteger(str){
   return parseInt(str,2);
 }
 console.log("100111");
 function checkTrueandFalse(a,b){
   return a===b ? true:false;
 }
 console.log(checkTrueandFalse(1,2));



