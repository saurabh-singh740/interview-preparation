// if([]==true){
//     console.log("saurabh si absent");
    

// }
// else {
//     console.log("saurabh si present");

// }

// let obj={
//     a:{
//         b:2,
//     }
// }
// console.log(obj.a?.b?.c?.d??"saurabh")//saurabh
 
// function xyz(){
//     console.log("saurabh")
// }
// xyz()
// console.log(typeof xyz)
// var abc=12;

// if(function f(){}){
//     abc=abc+typeof f

// }
// console.log(abc)


function add(a){
    return function(b){
        return function(c){
            return function(d){
                return a+b+c+d;
            }
        }
    }
}
const ans=add(2)(2)(3)(4)//11
console.log(ans);


app.get('/',(req,res)=>{
    res.status(201).json({
        message:"hello node js",
    })
})