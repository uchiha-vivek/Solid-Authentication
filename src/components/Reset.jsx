import React from 'react';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { passwordValidate } from '../helper/validate';

const Reset = () => {
  const formik = useFormik({
    initialValues: {
      password: '',
      confirm_password: '',
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
            <h4 className="text-3xl font-bold mb-2">Reset</h4>
            <span className="text-center text-gray-500">
              Enter new password
            </span>
          </div>
          <form className="pt-6" onSubmit={formik.handleSubmit}>
            <div className="textbox flex flex-col items-center gap-4 mb-6">
              <input
                {...formik.getFieldProps('password')}
                type="password"
                placeholder="Password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <input
                {...formik.getFieldProps('confirm_password')}
                type="password"
                placeholder="Repeat Password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reset;
