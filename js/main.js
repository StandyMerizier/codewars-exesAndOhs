function XO(str) {
  // set entire string to lowercase
  let strng = str.toLowerCase()
  // Google: how to count number of letter in string javascript
  // results of google search, implement to count number of Os and number of Xs
  let ex = strng.replace(/[^x]/g, "").length
  let oh = strng.replace(/[^o]/g, "").length
  // return the comparison of the counts (for example if 0 == 0 then yay)
  // return countOfXs == countOfOs
//   return strng.count(ex) == strng.count(oh)
  return ex == oh;
}
