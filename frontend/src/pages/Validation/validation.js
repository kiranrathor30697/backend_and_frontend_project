const emailValidation = (userData) => {
    let err = {};
    let valid = true;
  
    const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,3}$/i;
    if (userData.email !== undefined && !userData.email) {
      err = "Please enter email";
      valid = false;
    } else if (userData.email !== undefined && !emailregex.test(userData.email)) {
      err = "Please enter valid email";
      valid = false;
    } else if (userData.email) {
      err = undefined;
    }
    
    return { err, valid };
  };


  const passwordRegexValid = (passData) => {
    let err = {};
    let valid = true;
  
    var PasswordRegex = new RegExp(
          "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,16})"
        );
    if (passData.password !== undefined && !passData.password) {
      err = "Please enter password";
      valid = false;
    } else if (passData.password !== undefined && !PasswordRegex.test(passData.password)) {
      err = "Password must be 8 to 16 long alphanumeric, must contain atleast 1 special character and upper case / lower case letters";
      valid = false;
    } else if (passData.password) {
      err = "";
    }
  
    return { err, valid };
  };
  


export const registerValidation = (userData) =>{
    let error = {}
    let isValid = true

    if(!userData.username && userData.username !== undefined){
        error.username = "Please Enter User Name"
        isValid = false
    }else if(userData.username){
        error.username = "";
    }

     if(userData.email !== undefined){
        const { err, valid } = emailValidation(userData);
        if (!valid) {
          error.email = err;
          isValid = valid;
        } else {
          error.email = "";
        }
    }

     if(!userData.dob && userData.dob !== undefined){
        error.dob = "Please Enter Date Of Birth"
        isValid = false
    }else if(userData.dob){
        error.dob = ""
    }

    if (userData.password !== undefined) {
        const { err, valid } = passwordRegexValid(userData);
        if (!valid) {
          error.password = err;
          isValid = valid;
        } else {
          error.password = "";
        }
    }

    if (userData.confirmPassword !== undefined && !userData.confirmPassword) {
        error.confirmPassword = "Please enter Confirm Password";
        isValid = false;
    }else if (userData.confirmPassword !== userData.password && userData.confirmPassword){
        error.confirmPassword = "Does not match Confirm Password";
        isValid = false;
    }  else if(userData.confirmPassword == userData.password && userData.confirmPassword && userData.password){
        error.confirmPassword = '';
    }


    return { isValid, error}
}
