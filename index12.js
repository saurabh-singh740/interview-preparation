// let x=10
// function xyz(x){
//   return x+10



// }
// console.log(xyz(x))//pure function



// let x=10
// function impure(){
//     return x+10

// }
// console.log(impure())//impure function



// let str="my name is saurabh"

// function longeststring(str){
//     let words=str.split(" ")
//     let ans=words.sort(function(a,b){
//         return b.length-a.length
//     })
//     console.log(ans[0])

// }
// longeststring(str)



// let arr=["saurabh","sau"]

// function intersection(arr){
   
//         if(arr[0].includes (arr[1])){
//             return true
//         }
//         else{
//             return false
//         }
    


// }
// console.log(intersection(arr))




// function xyz(){
//     console.log(x)
//     var x=5
// }
// xyz()



//console.log([1,2]==[1,2])



// var a="javascript"
// function xyz(a){
// var ans=a.split("")
// var vowel="aeiou"
// var ans1=0
// for(var i=0;i<ans.length;i++){
//     if(vowel.includes(ans[i])){
//         ans1++

//     }
    
// }
// return ans1
// }
// console.log(xyz(a))



// let str="saurabh"
// let vowels=["a","e","i","o","u"]
// let count=0
// for(let i=0;i<str.length;i++){
// if(vowels.includes(str[i])){
//     count++

// }
// }
// console.log(count)

// let str="saurabh"
// let obj={}
// function freqcount(str){
//     for(let ch of str){
//         obj[ch]=(obj[ch]||0)+1
//     }
//     return obj

// }
// console.log(freqcount(str))



// let arr=["saurabh","sau"]
// function intersection(arr){
//     if(arr[0].includes(arr[1])){
//         return true
//     }
//     else{
//         return false
//     }


// }
// console.log(intersection(arr))



// let arr=[23,21,45,6,32]
// let ans=arr.sort(function(a,b){
//     return b-a
// })
// console.log(ans[0])



// let arr=[23,21,45,6,32]

// let max=arr[0]

// for(let i=0;i<arr.length;i++){
//     if(arr[i]>max)
//         max=arr[i]
// }
// console.log(max)



// let str="madam"
// function ispalindrome(str){

//     let rev= str.split("").reverse("").join("")
//     return str===rev

// }
// console.log(ispalindrome(str))


{/* <h2 id="hero">click</h2>

var ans=document.getElementById("hero")

let click=false

ans.addEventListener("click",function(){
    if(click)
        {ans.innerText="clicked"}
    
    else{

        ans.innerText="not clicked"

    }
}) */}




const arr=[1,2,3]
const list = arr.map((x,i)=><p key={1}>{x}</p>)

console.log(list.length)