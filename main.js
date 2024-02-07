
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

console.log(matchFinder('faction','faction'));

