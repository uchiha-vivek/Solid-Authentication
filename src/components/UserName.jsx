import React from 'react'
import { Link } from 'react-router-dom'
import avatar from "../assets/avatar.png"
import {Toaster} from 'react-hot-toast'
import {useFormik}  from 'formik'
import { usernameValidate } from '../helper/validate'
const UserName = () => {
      const formik = useFormik({
        initialValues : {
            username:''
        },
        validate:usernameValidate,
        validateOnBlur:false,
        validateOnChange:false,
        onSubmit : async values => {
            console.log(values)
        }
      })


  return (
    <div className='container mx-auto' >
        <Toaster position='top-center'  reverseOrder={false} ></Toaster>
        <div className='flex justify-center items-center h-screen'>
            <div>
                <div className='title flex flex-col items-center'>
                    <h4 className='text-5xl font-bold' >Hello Again</h4>
                    <span className='py-4 text-4xl w-2/3 text-center text-gray-500 '> Explore More by connecting with us. </span>
                    
                </div>
                <form className='py-1' onSubmit={formik.handleSubmit}   >
                    <div className=' profile fles justify-center py-5'>
                        <img src={avatar } alt='' />
                        </div>  
                        <div className='textbox flex flex-col items-center gap-6 '>
                                <input {...formik.getFieldProps('username')}  type='text' placeholder='UserName'/>
                                <button type='submit' >Lets Go</button>
                        </div>
                        <div className='text-center py-4' >
                                     <span className='text-gray-500'> Not a Member ? <Link className='text-red-500' to='/register' >Register Now</Link> </span>
                        </div>

                </form>
            </div>


        </div>

    </div>
  )
}

export default UserName