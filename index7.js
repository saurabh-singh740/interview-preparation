// function xyz(call){
//     console.log("hello")
//     call()
// }
// function xyzz(call){
//     console.log("hello")
//     call()
// }
// function xyzzz(call){
//     console.log("hello")
//     call()
// }
// xyz(function(){
//     xyzz(function(){
//         xyzzz(function(){
//             console.log("all executed")
//         })
//     })
// })


// const add=(a,b)=>{
//     return a+b

// }
// console.log(add(2,3))

// function test(x=10){
//     console.log(x)
// }
// test()



// let x=10;
// function xyz(x){
//     console.log(x)

// }
// xyz(x)

let str="aabbcde"
function unique(str){

    for(let i=0;i<str.length;i++){
        if(str.indexOf(str[i])===str.lastIndexOf(str[i])){
            return str[i]
        }
    }


}
console.log(unique(str))