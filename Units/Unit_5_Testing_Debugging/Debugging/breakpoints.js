  function myFunction() {
      var x = 0;
      x++;
      x++;
      x++;
      x++;
      return x;
  }
  //returns an array of the even
  //numbers from [3,2,6,1,5,10,4]
  function evenSort() {
      var a = [3, 2, 6, 1, 5, 10, 4];
      var result = [];
      for (i = 0; i < a.length; ++i) {
          if (a[i] % 2 == 0) {
              result.push(a[i]);
          }
      }
      return result;
  }
  //returns an array of the first n factorials
  //***CONTAINS A BUG!!!
  function listFactorials(n) {
      var x;
      var result = [];
      for (var i = 1; i <= n; i++) {
          x = 1;
          for (var j = i; j > 0; --j) {
              x = x * j;
          }
          result.push(x);
      }
      return result;
  }
