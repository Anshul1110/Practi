function dataVal(){
var userAge =parseInt(prompt("What is your Age?"));
if (isNaN(userAge)){
        console.log("You are an idiot");
}else if (userAge < 18){
    console.log("Not Eligible");
}else{
    console.log("You are an Awesome");
}
}