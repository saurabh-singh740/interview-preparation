// let x=10;
// function add(a){
//     return a+x;
// }
// console.log(add(2,x))


// function xyz(n){
//      if(n===1)return 1;
//     return n * xyz(n-1)

// }
// console.log(xyz(5))


// console.log(xyz(5)(4))
// console.log(xyz(5,8))


// function xyz(a,b){
//     if(b!=undefined){
//         return a*b
//     }
//     return function(c){
//         return a*c
//     }

// }

// console.log(typeof null)
// var a=2

// 

// const a={}
// a.key="saurabh"
// const b=a
// b.key="singh"

// console.log(a.key)

// const arr=["chandan","and"]

// function ispresent(arr){
    
//         if(arr[0].includes(arr[1])){
//             console.log("true")
//         }
//         else{
//             console.log("false")
//         }

// }
// ispresent(arr)


// function xyz(n){
//     if(n===1)return 1
//     return xyz(n-1)*n

// }
// console.log(xyz(4))

// const abc={
//     name:"saurabh",
//     age:15,
//     address:"india"
// }
// let xyz={
//     ...abc,
//     name:"ankit"
// }
// const{name,...pqr}=abc
// console.log(pqr,xyz)


function add(a){
    return function (b){
        return function(c){
            return a+b+c;
        }

    }

}
console.log(add(2)(4)(6))