let email;
let password;
let check;
const MinLen = 5;
let change;
let oldPassword;
const NewLen = 6;

do{
    email = prompt('Enter you email');
    if(email === '' || email === null){
        alert('Canceled.');
        check = false;
    }else if(email.length < MinLen){
        alert('I don’t know any emails having name length less than 5 symbols');
        check = true;
    }else if(email === 'user@gmail.com'|| email === 'admin@gmail.com'){
        do{
            password = prompt('Enter you password');
            if(password === '' || password === null){
                alert('Canceled.');
                check = false;
            }else if(email === 'user@gmail.com' && password === 'UserPass' ||
                     email === 'admin@gmail.com' && password === 'AdminPass'){
                change = confirm('Do you want to change your password?');
                if(change === true){
                    do{
                        oldPassword = prompt('Enter you old password.');
                        if(oldPassword === '' || oldPassword === null){
                            alert('Canceled.');
                            check = false;
                        }else if(email === 'user@gmail.com' && oldPassword === 'UserPass' ||
                                 email === 'admin@gmail.com' && oldPassword === 'AdminPass'){
                            do{
                                password = prompt('Enter new password');
                                oldPassword = password; 
                                if(oldPassword === '' || oldPassword === null){
                                    alert('Canceled.');
                                    check = false;
                                }else if(password.length < NewLen){
                                    alert('It’s too short password. Sorry.');
                                    check = true;
                                }else {
                                    password = prompt('Enter password again');
                                    if(password === oldPassword){
                                        alert('You have successfully changed your password.');
                                        check = false;
                                    }else{
                                        alert('You wrote the wrong password');
                                        check = true;
                                    }
                                }
                            }while(check);
                        }else{
                            alert('Wrong password');
                            check = true;
                        }       
                    }while(check);
                }else{
                    alert('You have failed the change.');
                    check = false;
                }
            }else{
                alert('Wrong password');
                check = true;
            }
        }while(check);
    }else{
        alert('I don’t know you');
        check = true;
    }
}while(check);
