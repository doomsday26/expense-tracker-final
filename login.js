let form= document.getElementById('form')
let email = document.getElementById('email')
let name= document.getElementById('name')
let password= document.getElementById('password')
let http="http://localhost:3000"
form.addEventListener('submit',login)

function login(e){
e.preventDefault()
console.log(email.value,password.value);
axios.post(http+'/user/login',{ 'email': email.value, 'password': password.value }).then(
    result=>{
       if(result.success){
alert("you have successgully logged in")
       }else{
        alert(result.valid)
       }
    }
).catch(err=>{console.log(err);})

}

//{ email: 'h12.com', password: '122234' }