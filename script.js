 // ********* debounce **************
 
 const log100 = () => console.log(100);
  const debounceLog100 = createDebounceFunction(log100, 10000);

  function createDebounceFunction ( callback, ms ) {
    let timeout;

    return function () {
      const fncall = () => {
         callback.apply(this, arguments);
      }
      clearTimeout(timeout);
      timeout = setTimeout(fncall, ms);
    }
  }  

  // ******** myIterable **********
   
  function enterParameter() {
    const regexp = /\D/g;
    let elStart = '';
    let elFinish = '';
    let flag = false;

    while (!flag){
      elStart = prompt('Enter "from" : ');
      if (regexp.test(elStart)) {
          console.log('error ! need number')
      } else {
        flag = true;
      };
    }

     flag = false;   
    while (!flag){
      elFinish = prompt('Enter "to" : ');
      if (regexp.test(elFinish)) {
          console.log('error ! need number')
      } else {
        flag = true;
      };
      
    }
    madeMyIterable(elStart, elFinish);
  }

  function checkNumber(regexp, data) {
    if (regexp.test(data) === false) {
      console.log('error ! need number')
    };
  }
 
  function madeMyIterable(elStart, elFinish) {
    if ( elFinish <= elStart ) {
      console.log('error ! need "from" > "to"');
      enterParameter();
    };
    elStart = +elStart;
    elFinish = +elFinish;
  
    let myIterable = {
      from: elStart,
      to: elFinish
    };

    myIterable[Symbol.iterator] = function() {

      return {
        current: this.from,
        last: this.to,
      
        next() {
          if (this.current <= this.last) {
            return { done: false, value: this.current++ };
          } else {
            return { done: true };
          }
        }
      };
    };


    for (let num of myIterable) {
    console.log(num); 
    };
  }


 //  ******  cloneDeep ******
  function cloneDeep(obj) {
    let clone = {};
    for (let key in obj) {
      if (typeof obj[key] === "object") {
        clone[key] = cloneDeep(obj[key]);
      } else {
        clone[key] = obj[key];
      }
    }
    return clone;
  }