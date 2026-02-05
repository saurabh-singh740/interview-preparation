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




// function debounce(fn,delay){

//     let timer;
//     return function(){
//         clearInterval(timer)

//         setTimeout(()=>{
//             fn()
//         })
//     }

// }

// const ans=debounce(function(){
//     console.log("hello")
// },1000)
// ans()


function throttle(fn,delay){

    let lasttime=0
    

    return function(){
        let now=Date.now()
        if(now-lasttime>=delay){
            lasttime=now;
            fn()
        }
    }

}
const ans=throttle(function (){
    console.log("api call")
},1000)
ans()