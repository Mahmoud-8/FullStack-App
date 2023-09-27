
const VITE_SERVER_Form = import.meta.env.VITE_SERVER_Form;
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import ThankYouMessage from './ThankYouMessage'; 

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false); 
  let navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${VITE_SERVER_Form}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Data sent successfully');
        setSubmitted(true);
        navigate('/thank-you');
      } else {
        console.error('Error sending data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      {submitted ? (
        <ThankYouMessage /> 
      ) : (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-sm space-x-3"
    >
      <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-800">
        <div className="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
          Contact us!
        </div>
        <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
          <div className="col-span-2 lg:col-span-1">
            <div className="relative">
              <input
                type="text"
                id="contact-form-name"
                className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Name"
                name="name" 
                value={formData.name}
                onChange={handleChange} 
              />
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <div className="relative">
              <input
                type="text"
                id="contact-form-email"
                className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Email"
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
              />
            </div>
          </div>
          <div className="col-span-2">
            <label className="text-gray-700" htmlFor="comment">
              <textarea
                className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                id="comment"
                placeholder="Enter your comment"
                name="message" 
                rows="5"
                cols="40"
                value={formData.message} 
                onChange={handleChange} 
              />
            </label>
          </div>
          <div className="col-span-2 text-right">
            <button
              type="submit"
              className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </form>
          )}

     </div>
  );
};

export default ContactForm;
