import React from 'react';
import { Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { passwordValidate } from '../helper/validate';

const Recovery = () => {
  const formik = useFormik({
    initialValues: {
      password: '',
    },
    validate: passwordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <div className="container mx-auto p-4">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
          <div className="title flex flex-col items-center mb-6">
            <h4 className="text-3xl font-bold mb-2">Recovery</h4>
            <span className="text-center text-gray-500">Enter OTP to recover password</span>
          </div>
          <form className="pt-6" onSubmit={formik.handleSubmit}>
            <div className="textbox flex flex-col items-center gap-4 mb-6">
              <div className="input text-center w-full">
                <span className="block text-sm text-gray-500 mb-2">
                  Enter 6 digits OTP sent to your email address
                </span>
                <input
                  {...formik.getFieldProps('otp')}
                  type="text"
                  placeholder="OTP"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 mt-2"
                />
              </div>
              <button
                type="submit"
                className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Recover Password
              </button>
            </div>
            <div className="text-center py-4">
              <span className="text-gray-500">
                Can't get OTP?{' '}
                <button
                  type="button"
                  className="text-blue-500 hover:text-blue-600 transition duration-300"
                >
                  Resend
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Recovery;
