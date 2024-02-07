
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

const findAddress =(obj)=>{
  const street = obj.street || '__';
  const house = obj.house || '__';
  const society = obj.society || '__';

  const result = `${street}, ${house} , ${society}`;
  console.log(result);
}

const add={
  street:10,
  house:`15/A`,
  society:'bangladesh'
}

findAddress(add);





const canPay =(arr, num)=>{
  // ** if arr is an [];
  if (!Array.isArray(arr)) {
    return 'firt parameter must be an array'
  }
  let length = arr.length;
  if (length === 0) {
    return 'purchage amount can not be empty'
  }
  let result = arr.reduce((acc, val)=>{
    return acc + val;
  },0);

  // ** validate num;
  if(typeof num !=='number' || isNaN(num) || num<=0){
    return ' second parameter must be a valid number'
  }
  let check = result === num ? true : false;
  return check;
}
console.log(canPay([10,20,30,40],100));

function onlyPay(arr, num){
  // ** array validation--->
  if (!Array.isArray(arr)) {
    return 'first parameter must be an Array'
  };
  // ** taking array length --->; 
  var length = arr.length;
  // ** array length validation--->
  if(length === 0){
    return ' Array can not be empty'
  };
  // ** adding all array data
  var total = 0;
  for (var i = 0; i <length; i++) {

    total+=arr[i];
    
  }
  // ** validating number --->

  if(num < 0 || isNaN(num) ||typeof num!=='number')return ' please provide a valid number';

  if(total === num){
    return true;
  }
  else {
    return false;
  }
}
console.log(onlyPay([1,2,3], 6));