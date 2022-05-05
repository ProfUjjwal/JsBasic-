const obj = {
        b:10,
        c: {
            d: {
                e: 20
            }
        }
}

function deepCopy(obj) {
  
    if (null === obj || 'object' !== typeof obj) return obj;
      
    switch (obj.constructor) {
      case Boolean:
        return new Boolean(obj);
      case Number:
        return new Number(obj);
      case String:
        return new String(obj);
      case Date:EL12
        return new Date().setTime(obj.getTime());
      case Array:
        return obj.map((o) => deepCopy(o));
      case RegExp:
        return new RegExp(obj);
      case BigInt:
        return BigInt(obj);
      case Object: {
        let copy = {};
        Object.keys(obj).forEach((key) => {
          if (obj.hasOwnProperty(key)) copy[key] = deepCopy(obj[key]);
        });
        return copy;
      }
    }
    return obj;
  }

const objCopy = deepCopy(obj);// write a function to do deep copy
obj.c.d.e = 30;
console.log(obj.c.d.e); // should print 30
console.log(objCopy.c.d.e); // should print 20