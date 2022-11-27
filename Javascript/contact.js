// for MENU_LIST {
  let menuList = document.getElementById('menu-list');
    menuList.style.maxHeight="0px";

    function togglemenu(){

        if(menuList.style.maxHeight =="0px")
            {
            menuList.style.maxHeight="600px"
            }
        else{
            menuList.style.maxHeight="0px"
        }
        }

//  }



       

 //INPUTS
let nameError = document.getElementById('name-error')
let emailError = document.getElementById('email-error')
let subjectError = document.getElementById('sbuject-error')
let messageError = document.getElementById('message-error')
let submitError= document.getElementById('submit-error')
let submit= document.getElementById('submit')
let Name= document.getElementById('Name')
let email= document.getElementById('Email')
let Message = document.getElementById('message')
let Subject =document.getElementById('Subject')
let cont = 0;


// Constructor
class Data{
    constructor(name,email,subject, message){
        this.name=name
        this.email=email
        this.subject=subject
        this.message=message
    }
}


// FOR NAME INPUT
function validateName() {
    let name=Name.value
    if(name.length ==0){
        nameError.innerHTML='name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML='write full name';
        return false;
    }
   
    name.innerHTML='<i class="fa-solid fa-check"></i>'
    return true;

}

// FOR EMAIL INPUT
function validEmail(){
    let Email=email.value

    if(Email === ""){
        emailError.innerHTML='email is required'
        return false
    }
    else if(!Email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML='email  Invalid'
        return false
    }

    
        emailError.innerHTML='<i class="fa-solid fa-check"></i>';
        return true
    }


// FOR MESSAGE INPUT
function validMessage(){
    let message=Message.value
    if(message.length=0){
        messageError.innerHTML='message reqiured'
    }
     if(message.length<30){
        messageError.innerHTML='must be more than 30 characters'
    }

    else if(message.length>30){
        messageError.innerHTML='<i class="fa-solid fa-check"></i>'
    }


}
// SUBMIT BUTTON
submit.addEventListener('click',(sub)=>{


    if(localStorage.getItem('cont')){
        cont = Number(JSON.parse(localStorage.getItem('cont'))) 
    }

    let userName=Name.value
    let userEmail=email.value
    let userSubject=Subject.value
    let userMessage=Message.value

    let userDetails = new Data(userName,userEmail,userSubject,userMessage)

    localStorage.setItem(`UserMessage${cont}`,JSON.stringify(userDetails))
    cont++
    localStorage.setItem('cont',cont)

    
    
    if(userName.length=0 || userEmail==='' || userMessage===""){
        window.alert('please fill out the fileds!')
    }
    else if(userName===userName || userEmail===userEmail || userSubject===userSubject){
        window.alert('Message Sent')
    }
    

    sub.preventDefault()
})