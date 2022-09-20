function submitForm (){
    let emailVal = document.getElementById("email").value
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let nameVal = document.getElementById("fname").value
    let lnameVal = document.getElementById("lname").value
    let nameCheck = /^([a-zA-Z ]){2,30}$/;

    let email = false;
    let fname = false;
    let lname = false;
    
    if (nameCheck.test(nameVal)){
        fname = true;
    }
    
    if (nameCheck.test(nameVal) === false){
        document.getElementById("fname").style.border = "0.7px solid red";
        document.getElementById("invalid-error-name").style.display = "block";
    }

   if (mailformat.test(emailVal)){
        email = true;
    }

    if (mailformat.test(emailVal) === false){
        document.getElementById("email").style.border = "0.7px solid red";
        document.getElementById("invalid-error-email").style.display = "block";
    }


    if (nameCheck.test(lnameVal)){
        lname = true;
    }

    if (nameCheck.test(lnameVal) === false){
        document.getElementById("lname").style.border = "0.7px solid red";
        document.getElementById("invalid-error-lastName").style.display = "block";
    }

    if (email && fname && lname){
        document.getElementById("submitted").style.display = "block";
        document.getElementById("thank-you-note").innerHTML = `Thank you ${nameVal} for choosing Green Decor`;
        document.getElementById("submit-form").style.display = "none";
        document.getElementById("form-title").style.display = "none";
    }
    
}




