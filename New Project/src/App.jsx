import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Testimonails from './components/Testimonails';
import Contact from './components/Contact';
import Footer from './components/Footer'; // ✅ Corrected path
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastStyle={{
          backgroundColor: '#ffffff',  // Light background
          color: '#000000',            // Black text
          fontWeight: '500',
          fontFamily: 'sans-serif',
          fontSize: '14px',
          border: '1px solid #ccc',
          boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)'
        }}
        progressStyle={{ background: '#22c55e' }} // ✅ Green progress bar
      />

      <Header />
      <About />
      <Projects />
      <Testimonails />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
