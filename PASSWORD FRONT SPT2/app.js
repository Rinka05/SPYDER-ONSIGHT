let up = document.getElementById('uppercase').checked ;
let lower = document.getElementById('lowercase').checked ;
let symbol = document.getElementById('symbol').checked ;
let number = document.getElementById('number').checked ;
if(up +lower +symbol+number === 0){
    alert("please check at least one box")
    return;
}
const keys = {
    uppercase :"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase :"abcdefghijklmnopqrstuvwxyz",
    numbers:"0123456789",
    symbols:"!@#$%^&*()_+~\\`|}{[]:;?<>,./-="
}
const getvalue =[
function uppercase(){
    return keys.uppercase[Math.floor(Math.random()*keys.uppercase.length)];
},
function lowercase(){
    return keys.lowercase[Math.floor(Math.random()*keys.lowercase.length)];
},

function numbers(){
    return keys.numbers[Math.floor(Math.random()*keys.numbers.length)];
},
function symbols(){
    return keys.symbols[Math.floor(Math.random()*keys.symbols.length)];
}
];
let passwordbox = document.getElementById("passwordbox");
let generate = document.getElementById("generate");

const length = document.getElementById("length");
let password ="";
while(length.value >password.length){
    let valuetoadd = getvalue[Math.floor(Math.random()*getvalue.length)];
    let checked = document.getElementById(valuetoadd.name).checked;
    if(checked){
        password += valuetoadd();
        console.log(password);
    }
    passwordbox.innerHTML = password;
}











