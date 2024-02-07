
document.querySelector('#app').innerHTML = `

`
function matchFinder(firstString, secondString){

  //*** wheather the parameters are strings */
  if(typeof firstString !== 'string' || typeof secondString !== 'string'){
    return `Either one of the parameters or both is not string...!`.toUpperCase();
  }
  if (firstString.includes(secondString)) {
    return true;
  }
  else{
    const parts = firstString.split(' ');
    for (const part of parts) {
      if (part.includes(secondString)) {
        return true;
      }
    }
  }
  return false;
}

console.log(matchFinder('faction','action'));



function sortMaker(arr){
    // ** array validation--->
    if(!Array.isArray(arr)){
      return `not an array`
    };
    if(arr.length > 2){
      return '';
    };

    for (let i = 0; i < arr.length-1; i++) {

        // ** wheather the array value is negative --->
        if (arr[i] < 0) {
          return `invalid value`
        };
        // ** wheather the value are equal --->
        if(arr[i]===arr[i + 1]){
          return 'equal'
        };
        if (arr[i]<arr[i+1]) {
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }
      return arr;
}
console.log(sortMaker([1,9]));