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
        console.log(result);
       if(result.success){
window.alert(result.valid)
document.getElementById('errorheading').innerHTML=""
       }else{
      window.alert(result.valid)
       }
    }
).catch(err=>{console.log(err);
// alert("status:  "+err.status+err.valid)

document.getElementById('errorheading').innerHTML= err.valid+ " error:  "+ err.status
})

}

//{ email: 'h12.com', password: '122234' }