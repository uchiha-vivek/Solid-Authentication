import toast from 'react-hot-toast'

// validate login page username

export async function usernameValidate(values){
    const errors = userNameVerify({},values)
    return errors
}

export async function passwordValidate(values){
    const errors  = passwordVerify({},values)
    return errors
}

// validate password
function passwordVerify(err={},  values){
    const specialChars = [".","\\", ":", ";"]
    if(!values.password){
        err.password = toast.error("Password Required")
    }else if(values.password.includes(" ")){
            err.password =toast.error("Invalid Password")
    }else if(values.password <5){
        err.password = toast.error("Passowrd must be more than 5 characters")
    }else if(!specialChars.test(values.password)){
        err.password = toast.err("password must contain special characters")
    }
    return err
}

// validate reset password

export async function resetPasswordVaidation(values){
     const errors = passwordVerify({},values);
     if(values.password!= values.confirm_password){
        errors.exist = toast.error("Password not match !") 
     }
     return errors
}


// validate register form



export async function registerValidation(values){
   const errors = userNameVerify({},values)
   passwordVerify(errors,values)
   emailVerify(errors,values)
   return errors
}


// validate username
function userNameVerify( err={}, values ){
     if(!values.username){
            err.username = toast.error("Username required")
     }else if(values.username.includes(" ")){
        err.username = toast.error("invalid Username")
     }
     return err
    }


    // validate email

    function emailVerify(error={},values){
        if(!values.email){
            error.email = toast.error("Email required")
        }
        else if(values.email.includes(" ")){
            error.email =toast.error("Wrong email")
        }
        return error
    }