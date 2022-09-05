const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  let str = []
  let re = []
  str = str.concat(arrayOfString)
  str = str.slice()

str.sort()
  return re =str[0]
}
console.log(getMaxLengthString(['hello', 'hi', 'hey']))
module.exports = getMaxLengthString
