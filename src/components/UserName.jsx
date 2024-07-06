import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../assets/avatar.png';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { usernameValidate } from '../helper/validate';

const UserName = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
    },
    validate: usernameValidate,
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
            <h4 className="text-3xl font-bold mb-2">Hello Again</h4>
            <span className="text-center text-gray-500">
              Explore more by connecting with us.
            </span>
          </div>
          <form className="pt-6" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-5">
              <img
                src={avatar}
                alt="Avatar"
                className="w-24 h-24 rounded-full shadow-md"
              />
            </div>
            <div className="textbox flex flex-col items-center gap-4 mb-6">
              <input
                {...formik.getFieldProps('username')}
                type="text"
                placeholder="Username"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Let's Go
              </button>
            </div>
            <div className="text-center py-4">
              <span className="text-gray-500">
                Not a Member?{' '}
                <Link
                  className="text-blue-500 hover:text-blue-600 transition duration-300"
                  to="/register"
                >
                  Register Now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserName;
