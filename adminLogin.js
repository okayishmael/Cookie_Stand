
//Warning: never use this for real world activities.

//login function
let username = function() {
    let correctUsername = 'PCSadmin'; // Correct/Expected Answer
    let username = prompt("Demo Username: PCSadmin");// get user ID
    
    //verify ID inputted 
    if(username === correctUsername) {
        //If correct, ask for password
        //if not run the code in line 26
        let password =function() {
            let correctPassword = 'Code201'; // Correct/Expected Answer
            let password = prompt('Demo Password: Code201'); // get user password
            
            //verify password inputted
            if(password === correctPassword) {
                //if correct welcome user
                //If not run the code in line 22
                alert('Welcome ' + username); //If yes, show user this
            } else{
                alert(' Wrong Password. Refresh page to try again');//if no, show user this     
            }
            };
            password()
    } else{
        alert('Wrong Username. Refresh page to try again');//if no, show user this     
    }
    };
    username();
    