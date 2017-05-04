/*function dataVal(){
var userAge =parseInt(prompt("What is your Age?"));
if (isNaN(userAge)){
        console.log("You are an idiot");
}else if (userAge < 18){
    console.log("Not Eligible");
}else{
    console.log("You are an Awesome");
}
}
*/

/*var foo = [];
foo.push(1);
foo.push(2);

console.log(foo.length);
*/

/*function removeProp(obj,prop){
    if (obj.hasOwnProperty(prop)){
        console.log(obj);
        delete obj.prop;
        console.log(prop);
        return 0;
    }else {
        return false;
    }
}
var obj ={
    name : "Anshul",
    age : 24
}
console.log(removeProp(obj,));*/

function reverseString(str){
    if (str === ""){
        return "";
    }else{
        var x = reverseString(str.substr(1)) + str.charAt(0);
    return x;
    }
}
console.log(reverseString("Hello"));