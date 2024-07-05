import toast from 'react-hot-toast'

// validate login page username

export async function usernameValidate(values){
    const errors = userNameVerify({},values)
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