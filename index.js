let form= document.getElementById('form')
let email = document.getElementById('email')
let name= document.getElementById('name')
let password= document.getElementById('password')

form.addEventListener('submit',signup)

function signup(e){
e.preventDefault()
if(email.value===''|| name.value==='' ||password.value=== ''){
    alert("please enter all the values")
}else{
    console.log(email.value);
    console.log(name.value);
    console.log(password.value);  
}


}