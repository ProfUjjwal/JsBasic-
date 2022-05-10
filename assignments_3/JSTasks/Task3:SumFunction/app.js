const sum  = function (a) {
  if(a) {
    return function (b) {
      if (b) {
        return sum(a+b); // it takes an argument and return a function which again can take an argument.
      }
      return a; // it will keep on adding 1+2+3+4..
    }
  }

  else {
    return 0;
  }
};    
  
  
  console.log(sum(1)(2)()); //3
  console.log(sum(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)(11)()); //10
  console.log(sum());

  