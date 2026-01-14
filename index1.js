console.log([]==[])
console.log([] ===  []);


console.log(mul(2)(3))
console.log(mul(2,3))

function mul (a,b){
    if(b!==undefined){
        return a*b
    }
    return function(c){
        return a*c
    }
}

fun()
var fun = function(){
    console.log("i am here")
}
fun()

function fun(){
    console.log("i am saurabh")
}
fun()

function fun(){
    console.log("i am there")
}
 fun()



foo();

var foo = function () {
  console.log("A");
};

foo();

function foo() {
  console.log("B");
}

foo();


bar();

function bar() {
  console.log("X");
}

bar = function () {
  console.log("Y");
};

bar();


test();

var test;

function test() {
  console.log("One");
}

test = function () {
  console.log("Two");
};

test();


hello();

var hello = function () {
  console.log("Hello from expression");
};

function hello() {
  console.log("Hello from declaration");
}

hello();

greet();

var greet = function () {
  console.log("Hi");
};

function greet() {
  console.log("Hello");
}

greet();

console.log(mul(3)(4))