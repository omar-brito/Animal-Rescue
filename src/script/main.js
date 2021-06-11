import '../style/main.scss';

const navbar = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
  

    burger.addEventListener('click', () => {
     
        nav.classList.toggle('nav-active');
       
        burger.classList.toggle('toggle');
        
    });
}

navbar(); 



const search = document.querySelector('.search');
const i = document.getElementById('search');
let input = document.querySelector('.input-search');
let paragraph = document.getElementById('paragraph');
let active = document.querySelector('active');
let spanTag = document.getElementsByTagName('span');
let yellowMark = document.querySelectorAll('yellowMark');

i.addEventListener('click', () => {

    // if(spanTag.className('yellowMark')) {
    //     search.classList.toggle('active');
        
    // }




    // if(search) {
    //     search.classList.add('active');
    //     input.focus();
    // } else {
        
    // }
    // if(input.value) {
    //     //search.classList.remove('active');
    //     let inputBox = document.getElementById('input-search').value;
    //     inputBox = inputBox.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
    //     let pattern = new RegExp(`${inputBox}`,"gi");
    //     paragraph.innerHTML = paragraph.textContent.replace(pattern, match => `<span class="yellowMark">${match}</span>`)
    // }
  
   

    // if(state = !false) {
    //     search.classList.remove('active');
    // }
    
     

   
    if(input.value == "") {
        search.classList.toggle('active');
        input.focus();

    } else {
        let inputBox = document.getElementById('input-search').value;
        inputBox = inputBox.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
        let pattern = new RegExp(`${inputBox}`,"gi");
        paragraph.innerHTML = paragraph.textContent.replace(pattern, match => `<span class="yellowMark">${match}</span>`)

        input.value = '';

    }

    // if(spanTag) {
    //     spanTag.className.remove('yellowMark');
    // }
    
    
    
    //input.value = '';
        //paragraph.spanTag.classList.remove('yellowMark');
        //search.classList.remove('active');
    
});




const form = document.getElementById('form');
const name = document.getElementById('name');
const address = document.getElementById('address');
const email = document.getElementById('email');
const creditCard = document.getElementById('creditCard');
const cvv = document.getElementById('cvv');


function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkEmail(input) {
  
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(re.test(input.value.trim())) {
            showSuccess(input);
        } else {
            showError(input, 'Email is not valid');
        }

}

function checkRequired(inputArray) {
    inputArray.forEach(function(input) {
        //console.log(input.id);
        if(input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

function checklength(input, min, max) {
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if(input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}


form.addEventListener('submit', function(e) {
    e.preventDefault();
    checkRequired([name, address, email, creditCard, cvv]);
    checklength(name, 3, 15);
    checklength(cvv, 3, 3);
    checkEmail(email);
   
});




