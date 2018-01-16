function fazzBizzBarr(n){
    
    for(var i = 0; i <= n; i++){
      if(!(i % 3) && !(i % 5) && !(i % 7)){
        console.log(i + ': ' + 'FazzBizzBarr');
      }else if(!(i % 5) && !(i % 3)){
        console.log(i + ': ' + 'FazzBizz');
      }else if(!(i % 7) && !(i % 5)){
        console.log(i + ': ' + 'BizzBarr');
      }else if(!(i % 7) && !(i % 3)){
        console.log(i + ': ' + 'FazzBarr');
      }else if(!(i % 3)){
        console.log(i + ': ' + 'Fazz');
      }else if(!(i % 5)){
        console.log(i + ': ' + 'Bizz');
      }else if(!(i % 5)){
        console.log(i + ': ' + 'Barr');
      }
    }
    
    return;
  
  }
  
  fazzBizzBarr(105);