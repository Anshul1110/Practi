

function myFunction() {
    var x = document.getElementById('modal');
    if (x.style.display === 'none') {
        x.style.display = 'flex';
    } else {
        x.style.display = 'none';
    }
}

/* function fib(n){


    
     
   

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


      

    


//console.log(fib(0));
//console.log(fib(30));*/
function move(n,X,Y){
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
hanoi(2,'A','B','C');