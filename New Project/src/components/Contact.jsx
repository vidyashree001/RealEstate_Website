import React from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "53e5327b-d938-430f-b182-4810eb508f9b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Form submitted successfully!");
      setResult("");
      event.target.reset();
    } else {
      console.error("Error:", data);
      toast.error(data.message || "Something went wrong!");
      setResult("");
    }
  };

  return (
    <div
      className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden'
      id='Contact'
    >
      {/* Animated Heading */}
      <motion.h1
        className="text-4xl font-bold text-black mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Contact <span className="text-gray-500 font-light">With us</span>
      </motion.h1>

      {/* Animated Subtitle */}
      <motion.p
        className="text-lg text-gray-600 text-center max-w-2xl mb-8 mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
      >
        Ready to Make a Move? Let's Build Your Future Together.
      </motion.p>

      {/* Form */}
      <motion.form
        onSubmit={onSubmit}
        className="max-w-3xl mx-auto w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Name & Email */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="w-full md:w-1/2 text-left">
            <label className="block mb-1 font-medium">Your Name</label>
            <input
              className="w-full border border-gray-300 rounded py-3 px-4"
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="w-full md:w-1/2 text-left">
            <label className="block mb-1 font-medium">Your Email</label>
            <input
              className="w-full border border-gray-300 rounded py-3 px-4"
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>
        </div>

        {/* Message Field */}
        <div className="text-left mb-6">
          <label className="block mb-1 font-medium">Your Message</label>
          <textarea
            className="w-full border border-gray-300 rounded py-3 px-4"
            name="message"
            placeholder="Type your message..."
            rows="5"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded transition"
          >
            {result ? result : "Send Message"}
          </button>
        </motion.div>
      </motion.form>
    </div>
  );
};

export default Contact;
