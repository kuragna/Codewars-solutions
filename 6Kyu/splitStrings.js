function solution(str){
  let letters = "";
  let array = [];
  for(let i = 0; i < str.length; i += 1) {
    letters += str[i]
    if(letters.length == 2) {
      array.push(letters);
      letters = "";
    }
  }
  if(letters.length == 1) {
    array.push(`${letters}_`);
  }
  return array;
}