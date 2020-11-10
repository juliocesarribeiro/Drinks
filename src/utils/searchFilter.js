
export default function SearchFilter(arr, cString) {

  var objeto    = arr;
  var position  = 0;
  var key       = cString;
  var aObj      = [];

  while ( position < 15 ) {
    let i = key + position;

    if( objeto[i] != null ){

      aObj.push(objeto[i]);
    }
    position++
  }
  return aObj
}

