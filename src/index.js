
exports.min = function min(array) {
  if (array == undefined || array.length == 0) {
                  return 0;} 
  else {
  m = array[0];
  for (i = 1; i < array.length; i++) {
if (array[i] < m) {
        m = array[i]} 
}
return m;
}

}

exports.max = function max(array) {
  if (array == undefined || array.length == 0) {
                  return 0;} 
  else {
  m = array[0];
  for (i = 1; i < array.length; i++) {
if (array[i] > m) {
        m = array[i]} 
}
return m;
}

}

exports.avg = function avg (array) {
  if (array == undefined || array.length == 0) {
                  return 0;} 
  else {
  a = 0;
  i = 0;
  while (i<array.length) {
   a = a+array[i];
 i++;
  }
 return a/array.length;  
}

}
