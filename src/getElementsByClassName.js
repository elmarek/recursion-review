// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // create result variable
  var result = [];
  var func = function(element) {
    console.log("newcall");
    console.log(element.className);
    console.log(className);
    //check if its class name matches the target class
    // if (element === null){
    //   break;
    // }
    // if (element.className === undefined){
    //   return "undefined";
    // }
    if (element.className.indexOf(className) > -1) {
      result.push(element);
    }
    //check if the element has children

    //if it does, for each child, run func(child)
    if (element.hasChildNodes()) {
      for (var i = 0; i < Object.values(element.childNodes).length; i++) {
        //func(i);
        func(element.childNodes[i]);
      }
      //func of the children
    }
  };
  //need a call of the function on document.body
  func(document.body);
  console.log(result);
  // return result variable
  return result;
};
