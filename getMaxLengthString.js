const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  if(arrayOfString === null || arrayOfString === undefined){
    return undefined
  }
  let str = [...arrayOfString]
  let max = 0
  let at = 0,at2
  console.log(str[0].length)
  for(let i = 0;i<str.length;i++){
    
    if(str[i].length > max){
      max = str[i].length
      at = i 
    }
    if(str[i].length === max){
      at2 = i
    }
  }
  if(at2!==at){
    return arrayOfString = [str[at],str[at2]]
  }else {return arrayOfString = [str[at]]}
  }

console.log(getMaxLengthString(['hello', 'hi', 'hey']))
module.exports = getMaxLengthString
