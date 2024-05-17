let arr=[1, 2, 3, 4, 5]
// arr[0]=55666
// console.log(arr, typeof arr);
// console.log(arr.length)
// console.log(arr[3])
// console.log(arr[0])
// console.log(arr.toString())
// console.log(arr.join("and"))
// arr.pop()
// arr.push(3)
//  console.log(arr.at(3))
// arr.fill(2)
// arr.shift()
// arr.unshift(8)
// arr.reverse()
// console.log(arr.includes(2))
// arr.map(item => 2*item)

// console.log(arr.map(item => 2*item))
// console.log(arr.filter(item=> 4>item))
// console.log(arr.find(item=> 4>item))
// console.log(arr.every(item=> 0<item))
// for (let i = 0; i < arr.length; i++) {
//     let prev=arr[i-1]
//     let curr=arr[i]
//     console.log("previos", prev, "current", curr)
// }    
let a=[4,3,7,5,9,1,8,2]
// a.sort()
// console.log(a);
// a.splice(1,4,22,33)

console.log(a.slice(1,4)); a.sort(function(a,b) {
    return(a-b)
     })
console.log(a); a.sort(function(a,b) {
    return(b-a)
     })
      console.log(a);
a.sort(function(a,b) {
    return(2-Math.random())
})
console.log(a);