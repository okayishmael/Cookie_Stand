
//login




let username = function() {
    let usernameAnswer = 'PCSadmin'; // Correct/Expected Answer
    let username = prompt("Demo Username: PCSadmin");// prompt, input require
    
    if(username === usernameAnswer) {
        let password =function() {
            let passwordAnswer = 'Code201'; // Correct/Expected Answer
            let password = prompt('Demo Password: Code201'); // declare var confirm to collect user input
            
            if(password === passwordAnswer) {
                alert('Welcome ' + username); //If yes, show user this
            } else{
                alert(' Wron Password. Refresh page to try again');//if no, show user this     
            }
            };
            password()
    } else{
        alert('Wrong Username. Refresh page to try again');//if no, show user this     
    }
    };
    username()