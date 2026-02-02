// const arr1 = [1, 2, 3]
// const arr2 = [...arr1]

// arr2.push(4)
// console.log(arr1)



// const arr1 = [{ a: 1 }]
// const arr2 = [...arr1]

// arr2[0].a = 5
// console.log(arr1[0].a)


// var arr=[1,2,3,4]
// var ans=arr.find(function(value){
//     return value>4
// })
// console.log(ans)



// if("0"){
// console.log("i am saurabh")
// }
// else{
//     console.log("i m absent")

// }

// console.log(null==undefined)


// let arr=["saurabh","singh"]

// function intersection(arr){
//     let str1=arr[0];
//     let str2=arr[1];

//     let result=[]


//     for(let i=0;i<str1.length;i++){
//         if(str2.includes([str1])){
//             result.push(str1[i])

//         }else{
//             console.log("not found")
//         }

       

//     }
//     return result

// }
// console.log(intersection(arr))



// let arr=[1,10,100,2,20,200]
// let single=[]
// let double=[]
// let triple=[]

// function splitarray(arr){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>=0&&arr[i]<=9){

//             single.push(arr[i])
//         }
//         if(arr[i]>9&&arr[i]<=99){
//             double.push(arr[i])

//         }
//         if(arr[i]>99&&arr[i]<=999){
//             triple.push(arr[i])

//         }
//     }
//     return {
//         single,double,triple
//     }
    
// }
// console.log(splitarray(arr))


// let a=10;
// let b=20;

// [a,b]=[b,a]
// console.log(a,b)


// let arr=[1,'a',2,'b',3,'c','d']
// let num=[]
// let char=[]

// function xyz(arr){
//     for(let i=0;i<arr.length;i++){
//         if(typeof arr[i]==="number"){
//             num.push(arr[i])

//         }
//         else{
//            typeof arr[i]==="string"
//             char.push(arr[i])
//         }
//     }
//     return {num,char}

// }
// console.log(xyz(arr))





// let arr=[1, 2, 3, 2, 4, 1, 5]//1,2,3,4,5
// let ans=[]

// function  removeduplicates(arr){


//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]===arr[j]){
//                 ans.push(arr[i])
               
                
                
//             }
//         }
//     }
//     return ans

// }
// console.log(removeduplicates(arr))




//console.log("saurabh"-100)

// const arr=[1,2,3,4]
// const arr1=[...arr,5,6]
// console.log(arr1)


// let arr=['b',8,9,'c',2,'shivam']
// let num=[]
// let char=[]
// let str=[]
//  function seperate(arr){

//     for(let i=0;i<arr.length;i++){
//         if(typeof arr[i]==="number"){
//             num.push(arr[i])

//         }
//         else if( arr[i].length>"1"){
//             str.push(arr[i])

//         }
//         else{
//             char.push(arr[i])
//         }
//     }
//     return {num,char,str}

//  }
//  console.log(seperate(arr))

// let num=4
// console.log(typeof num)



let arr=[1,2,3,4,5]
let arr1=arr.map(function(value){
    return value=5
})
console.log(arr1)