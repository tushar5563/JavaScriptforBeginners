function checkSign(num){
    return num>0 ? "positive" : num<0? "negative":"zero"; 
}
console.log(checkSign(69));

var maagic =() =>new Date ();
 var myConcat =(arr1,arr2) => arr1.concat(arr2); 
 console.log(myConcat([1,2],[3,4,5]));
 const arr1=['tushar','mahek','radhika','sahana'];
 let arr2;
 (function()
    {
        arr2=[...arr1];
        arr1[0]='potato';
    }
 )();
console.log(arr2);