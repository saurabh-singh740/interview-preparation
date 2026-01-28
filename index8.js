//let arr=[1,2,3,[4,5,6,7],[9,12]]

// function flatten(arr){
//     for(let i=0;i<arr.length;i++){
//         // console.log(arr[i])
//         if(Array.isArray (arr[i])){
//             flatten(arr[i])
//         }
//         else{
//             console.log(arr[i])
//         }
//     }

// }
// flatten(arr)



// let arr=[1,2,3,[4,5,6,7],[9,12]]
// function flatten(arr){

//     for(let i=0;i<arr.length;i++){
//         if(Array.isArray(arr[i])){
//             flatten(arr[i])
//         }
//         else{
//             console.log(arr[i])
//         }
//     }

// }

// flatten(arr)



// function fn(){
//     return
//     {name:"saurabh"}
// }
// console.log(fn())


// const arr=[10,12,18,6,4]

// const target=30


// function index(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]+arr[j]===target){
//                 return [i,j]
//             }
//         }
//     }


// }
// console.log(index(arr))



// let a=100;
// let z=a++;
// console.log(a+z)




// let str="my name is saurabh"

// function reverse(str){

//   return str.split("").reverse().join("")

// }
// console.log(reverse(str))



// let str="my name is saurabh"
// let freq={}
// function frecount(str){

//   for(let ch of str){
//     if(ch !==" "){

//       if(freq[ch]===undefined){
//         freq[ch]=1;
//       }
//       else{
//         freq[ch]=freq[ch]+1
//       }



//     }
    
//   }
//   console.log(freq)



// }
// frecount(str)


// const a1=[1,2,3,4,5]
// const b1=[3,4,5,6,7]

// const c1=[]



// function intersection(a1,b1){

//   for(let i=0;i<a1.length;i++){
//     for(let j=0;j<b1.length;j++){
//       if(a1[i]==b1[j]){
//          c1.push (b1[j])
//       }
//     }
//   }
// return c1
// }
// console.log(intersection(a1,b1))


var arr=[1,2,3,4,5]
var ans=arr.reduce(function(a,b){
  return a*b

},1)
console.log(ans)