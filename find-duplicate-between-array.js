let arr1 = [1]
let arr2 = [2]

///Method 1
const duplicate = []
arr1.forEach((item1) => {
    if (arr2.includes(item1)) {
        duplicate.push(item1)
    }
})
console.log(duplicate)


//Method 2
console.log(
    arr1.filter((item) => arr2.indexOf(item) !== -1)
)

