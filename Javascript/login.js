
let nameError = document.getElementById('name-error')
let emailError = document.getElementById('email-error')
let subjectError = document.getElementById('sbuject-error')
let messageError = document.getElementById('message-error')
let submitError= document.getElementById('submit-error')
let Name= document.getElementById('Name')
let email= document.getElementById('Email')
let Message = document.getElementById('message')
let Subject =document.getElementById('Subject')
let password =document.getElementById('password')
    let passwordSpan =document.getElementById('passwordSpan')
    let repPass = document.getElementById('repPass')
    let repPassSpan =document.getElementById('repPassSpan')
    let signupbtn =document.getElementsByName('button')
  
    password.addEventListener('keyup',()=>{
        let Password=password.value
        console.log(Password)

      if(Password===""){
        passwordSpan.innerHTML='Password Required!'
      }
      else if(Password.value < 4){
        passwordSpan.innerHTML='Password too weak'
      }
      else if(Password > 8) {
        passwordSpan.innerHTML='Password Okay'
      }
      passwordSpan.innerHTML='<i class="fa-solid fa-check"></i>';
    })
    function validEmail(){
        let Email=email.value
    
        if(Email === ""){
            emailError.innerHTML='email is required'
            return false
        }
        else if(!Email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
            emailError.innerHTML='email  Invalid'
        }
    
        
            emailError.innerHTML='<i class="fa-solid fa-check"></i>';
            return true
        }

