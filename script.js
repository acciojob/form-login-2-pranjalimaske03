//your JS code here. If required.
//your JS code here. If required.
 function fun(){
            let firstName = document.getElementById("firstName");
            let lastName = document.getElementById("lastName");
            let phone = document.getElementById("phone");
            let email = document.getElementById("email");
            
            alert(`
            First Name : ${firstName.value}
            Last Name : ${lastName.value}
            Phone Number : ${phone.value}
            Email ID : ${email.value}
            ` )
        }
        let btn=document.getElementById("submit");
        btn.addEventListener("click",fun)