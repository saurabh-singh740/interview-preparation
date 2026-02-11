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




// const arr=[1,2,3]
// const list = arr.map((x,i)=><p key={1}>{x}</p>)

// console.log(list.length)



 let str="saurabh"
 let count=0
 let vowel=["a","e","i","o","u"]
 for(let i=0;i<str.length;i++){
    if(vowel.includes(str[i])){
        count++
    }
 }
 console.log(count)