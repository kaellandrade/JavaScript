for(var contador = 1; contador <= 100; contador ++){
  if (contador % 3 == 0) {
      console.log("Fizz")
  } else {
      if (contador % 5 == 0) {
      console.log("Buzz")
          
      } else {
      if ((contador % 3 == 0) && (contador % 5 == 0) ) {
          console.log("FIzzBuzz")
      } else {
      console.log(contador)          
      }        
      }
  }
}