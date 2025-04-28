const form = document.querySelector('#my-form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const msg = document.querySelector('.msg');

form.addEventListener('submit',function(e){
    e.preventDefault();

    if(name.value === '' || email.value == '' ){
        msg.classList.add('error')
        msg.innerHTML = 'failed input :( ';
        setTimeout(() => msg.innerHTML = '',1000)
    }else{
        msg.classList.remove("error");
        msg.innerHTML= 'succecfuly input welcome to nabeeh ';
        name.value = '';
        email.value = '';
    }
}


);
