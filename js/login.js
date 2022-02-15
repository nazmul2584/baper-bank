document.getElementById('login-submit').addEventListener('click',function(){
    const emilfild = document.getElementById('email');
    const usremil = emilfild.value;
    const passwordlfild = document.getElementById('password');
    const usrepassword = passwordlfild.value;

    if (usremil=='a' && usrepassword=='1234'){
        window.location.href = 'bank.html';
    }
    
})


