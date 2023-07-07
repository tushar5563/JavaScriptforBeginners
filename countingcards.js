
funtion

// qrite reusable code with functions

function tusharTiwari() {
    console.log("mia malkova");
}
tusharTiwari();

// passing values to function with arguments
 function javaScript(a,b){
    console.log(a*b);
 }
 javaScript(69,69);


 //GLOBAL SCOPE AND FUNCTIONS//
 
 // declare a variable
 var vaR=10;
function fun1(){
    oopsGlobal=5;
}

function fun2(){
    var output =" ";
    if(typeof vaR!="undefined"){
        output+="vaR: " +vaR;
    }
    if(typeof oopsGlobal!="undefined"){
        output+="oopsGlobal" +oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();



//LOCAL SCOPE AND FUNCTIONS//
function fun3(a,b){
    var fun3="hawyeah";
    console.log(fun3);
}
fun3();

//GLOBAL AND LOCAL SCOPE//
var myWear="tshirt";
function outWear(){
    var myWear="sweater";

    return myWear;
}
console.log(outWear());
console.log(myWear);

//RETURN A VALUE FROM A FUNCTION WITH RETURN//
function seveN(num){
    return num-7;
}
console.log(seveN(76));

//ASSIGNMENT WITH A  RETURNED VALUE//
var changed=0;
function change(num){
    return(num*5)/2;
}
changed=change(10);
console.log(change(10));

//STAND IN LINE //
function nextIntLine(arr,item){
    arr.push(item)
    return arr.shift();
}
var testArr=[1,2,3,4,5,6]
console.log("before: " + JSON.stringify(testArr));
console.log(nextIntLine(testArr,7));
console.log("after: " + JSON.stringify(testArr));

//BOOLEAN VALUES //
function welcomeToBooleanValues() {
    return true;
}
console.log(welcomeToBooleanValues);

//USE CONDITIONAL LOGIC WITH IF STATEMENTS//
function trueOrFalse(isItTrue){
    if(isItTrue){
        return "yes its true rcb has 0 cups";
    }
    return " mumbai has most ipl cups ";
}
console.log(trueOrFalse(false));
//COMPARISON WITH THE EQAULITY OPERATOR//
function equalityOperator(a,b){
    if(a==b){
        return "chatur is gay";
    }
    return "pramod is gay";
}
console.log(equalityOperator(10 ,"10"));

function equalityOperator(a,b){
    if(a==b){
        return "chatur is gay";
    }
    return "pramod is gay";
}
function equalityOperators(a,b){
    if(a===b){
        return "chatur is gay";
    }
    return "h shreyas miss you bhai";
}
console.log(equalityOperators(10 ,"10"));

function ouR(sex){
    if(sex!=69){
        return "anime is best";
    }
    return "anime sucks";
}
console.log(ouR(96));

//COMPARISON WITH LOGICAL AND OPERATOR//
function lO(val){
    if(val>100){
        return "over 100";
    }
    if(val>10){
        return "over 10";
    }
    return "under 10";
}
console.log(lO(45));
//comparison with logical and operator part 2//
function logiclO(val){
    if(val<=50 && val>=25){
        return "true";
    }
    return "false";
}
console.log(logiclO(11));
 
//ELSE STATEMENTS//
function else1(value){
    var result=" ";
if(value>10){
    result="bigger then 10";
} else{
    result= "5 or smaller";
}
return result;
}
console.log(else1(5));

//ELSE IF STATEMENTS//
function class9(girls,boys){
    if(girls>69 && boys>45){
        return "true" 
    } else if(girls<70 && boys<50) {
        return " very true";
    } else
    {
        return " between true and very true"
    } 
}
console.log(class9(23,44));
//SWITCH STATEMENTS//
function caseInSwitch(val){
    var answer=" ";
    switch (val) {
        case 1:
            answer="alpha";
            break;
        case 2:
            answer="beta";
            break;
        case 3:
            answer="gama";
            break;
        case 4:
            answer="delta";
            break;
        default :
        answer="fuck";
        break;
    }return answer;
}
console.log(caseInSwitch(6));