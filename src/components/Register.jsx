import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import avatar from '../assets/avatar.png';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { passwordValidate } from '../helper/validate';
import convertToBase64 from '../helper/convert';
import { registerValidation } from '../helper/validate';

const Register = () => {
  const [file, setFile] = useState();

  const formik = useFormik({
    initialValues: {
      email: 'vs@gmail.com',
      username: 'Vivek',
      password: '1234!@#',
    },
    validate: registerValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = await Object.assign(values, { profile: file || '' });
      console.log(values);
    },
  });

  async function onUpload(e) {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  }

  return (
    <div className="container mx-auto p-4">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
          <div className="title flex flex-col items-center mb-6">
            <h4 className="text-3xl font-bold mb-2">Register</h4>
            <span className="text-center text-gray-500">Happy to Join you</span>
          </div>
          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex flex-col items-center py-5">
              <label htmlFor="profile" className="cursor-pointer">
                <img
                  src={file || avatar}
                  alt="Avatar"
                  className="w-24 h-24 rounded-full shadow-md"
                />
              </label>
              <input
                onChange={onUpload}
                type="file"
                id="profile"
                name="profile"
                className="hidden"
              />
            </div>
            <div className="textbox flex flex-col items-center gap-4 mb-6">
              <input
                {...formik.getFieldProps('email')}
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <input
                {...formik.getFieldProps('username')}
                type="text"
                placeholder="Username"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <input
                {...formik.getFieldProps('password')}
                type="password"
                placeholder="Password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Register
              </button>
            </div>
            <div className="text-center">
              <span className="text-gray-500">
                Forgot Password?{' '}
                <Link
                  className="text-blue-500 hover:text-blue-600 transition duration-300"
                  to="/"
                >
                  Login Now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
