

function myFunction() {
    var x = document.getElementById('modal');
    if (x.style.display === 'none') {
        x.style.display = 'flex';
    } else {
        x.style.display = 'none';
    }
}

function fib(n){


    
     
   

    if(n<=2){
        
    //console.log(1);
    
        return 1;
    }


else{
  //console.log(fib(n-1));
 // console.log(1);
  console.log(fib(n-1));
  
        
        return fib(n-1)+fib(n-2);
        
}
                
   // console.log(v);
   // console.log(fib(n-2));
    

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


      

    



console.log(fib(5));