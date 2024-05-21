const arrNumber=[1,2,1]
const duplicate = arrNumber.filter((ele,index,arr)=>arr.indexOf(ele)!==index)
console.log(duplicate)


console.log(new Set(arrNumber))


console.log(arrNumber.filter((ele,index,arr)=>arr.indexOf(ele)===index))