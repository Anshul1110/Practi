



/* function fib(n){


    
     
   

    if(n<=2){
 
    
        return 1;
    }


else{
 
  console.log(fib(n-1));
  
        
        return fib(n-1)+fib(n-2);
        
}
                
 
    

    }
    function memo(f) {
  var cache = {}
  return function(x) {
    if (typeof cache[x] === 'undefined') {
      cache[x] = f(x);
    }
    return cache[x];
  }
}
fib = memo(fib);


      

    


//console.log(fib(0));
//console.log(fib(30));*/
/*function move(n,X,Y){
    console.log(n + "disk moves from " + X + "to " + Y );

}



function hanoi( n, source, target, spare){
    if (n===1){
        move(n,source,target);

    
        
    }
    else{
        hanoi(n-1,source,spare, target);
        move(n,source,target);
        hanoi(n-1, spare, target, source);
       // move(source,target);
       // move(spare,target);

    }
}
hanoi(2,'A','B','C');*/

/*function factorial(n){
    if (n===0){
        return 1;
    }
    var y = factorial(n-1);
    return n*factorial(n-1);
}

console.log(factorial(5));*/


/*function gcd(a,b){
    if ( b<=1){
        return a;
    } return gcd(b, a%b);

}
console.log(gcd(75,36)); */

/*function range(a,b){
    if (b-a ===a){
            a= a+1;
        

       console.log(a);
       // console.log(b-1);

    }else{ var list = range(a, b-1);
       
        return list;
        
        
         }

}
console.log(range(2,9)); */

/*function even(n){
    if (n%2==0){
        console.log("The number is even ");
        return true;
    } else {
        console.log("The number is odd");
        return true;
    }
}

console.log(even(6));*/

/*function exp(a,n){
    if (n===1){
        return a;
    }else{
        var x = a*exp(a,n-1);
        return x;
    }
}
console.log(exp(8,3));*/


/*function primeNumber(a,b){            {Incorrect}
    
if (a%b===0){
   return a;
}                                   
    
else{
    var x = primeNumber(a,b-1);
    a++;
    }
primeNumber(a,b-1);
}


 
 console.log(primeNumber(6,19));*/