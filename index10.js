// a= ["2","4","8","10"]
// function missing(a){
//     return a.reverse("")

// }

// console.log(missing(a))


// function debounce(fn,delay){

//     let timer;
//     return function(){

//         timer=setTimeout(()=>{
//             clearTimeout(timer)
//             fn()

//         },delay)

//     }

// }
// const ans=debounce(function(){
//     console.log("hello")
// },700)
// ans()





// function throttle(fn,delay){

//     let lastTime=0;

//     return function(){
//         const now=Date.now()
        
//         if(now-lastTime>=delay){
//             lastTime=now;
//             fn()
//         }
//     }

// }
// const ans=throttle(function(){
//     console.log("api call")

// },10000)
// setInterval(()=>{
//     ans()
// },100)




// function x(){

//     setTimeout(()=>{
//         console.log(i)
//     },1000)

//     var i=1;

// }
// x()



// console.log({}==={})
// console.log({}=={})


// var a=8000;
// {
//     var a=9000
// }
// let b=a;
// {
//         let b=10000
// }
// console.log(b)


// let arr=[1,2,3,4]
// var ans=arr.map(function(value){
//     return value=5
// })
// console.log(ans)



// let arr=[1,2,3,4,2]
// let ans=arr.sort(function(a,b){
//     return a-b

// })
// let duplicate=[]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==arr[i+1]){
//         duplicate.push(arr[i])
//     }
// }
// console.log(duplicate)


// var arr=[1,2,3,4,5]
// function reversearray(arr){
//     return arr.reverse()


// }
// console.log(reversearray(arr))



// var arr=[1,2,3,4,5]
// var ans=[]
// function reverse(arr){
//     for(var i=arr.length-1;i>=0;i--){

//         ans.push(arr[i])


//     }
//     return ans
// }
// console.log(reverse(arr))




// var arr=[1,2,3,4,5]

// var ans=arr.sort(function(a,b){
//     return a-b
// })
// console.log(arr[0])





// function debounce(fn,delay){

//     let timer;
//     return function(){
//         clearTimeout(timer)

//         setTimeout(()=>{
//             fn()
//         },delay)
//     }


// }
// const ans=debounce(function(){
//     console.log("hello")
// },500)

// ans()
// ans()
// ans()
// ans()
// ans()
// ans()




// function throttle(fn,delay){

//     let lastTime=0

//     return function(){
//         let now= Date.now()

//         if(now-lastTime>=delay){
//            lastTime=now

//            fn()
//         }
//     }
// }
// const ans=throttle(function(){
//     console.log("hello")

// },1000)

// ans()
// ans()
// ans()
// ans()
// ans()
// ans()
// ans()




// const arr=[1,2,3,4,5,6,7,8,9,10]
// function paginate(arr,page,limit){

//     const start=(page-1)*limit

//     return arr.slice(start,start+limit)

// }

// console.log(paginate(arr,2,2))




// const obj={
//     name:"saurabh",
//     address:{
//         city:"mumbai"
//     },
// }
// const obj2={...obj}

// obj2.address.city="surat"

// console.log(obj.address.city)//mumbai


// const obj1 = { a: 1, b: { c: 2 } }
// const obj2 = { ...obj1 }

// obj2.a = 10
// obj2.b.c = 20

// console.log(obj1.a, obj1.b.c)//1,20




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


let arr=[1,'a',2,'b',3,'c','d']
let num=[]
let char=[]

function xyz(arr){
    for(let i=0;i<arr.length;i++){
        if(typeof arr[i]==="number"){
            num.push(arr[i])

        }
        else{
           typeof arr[i]==="string"
            char.push(arr[i])
        }
    }
    return {num,char}

}
console.log(xyz(arr))