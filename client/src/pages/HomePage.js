import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
        <li>
          <Link to="/Register">Register</Link>
        </li>
      </ul>
    </nav>
  );
};


function HomePage() {
  return (
    <div>
      <Navbar/>
      <h1>Home Page</h1>
      <AboutUs/>
      <ContactUs/>
    </div>
  )
};

export default HomePage;


const ContactUs = () => {
  return (
    <section>
      <h2>Contact Us</h2>
      <p>
        You can reach us at <a href="mailto:C0850115@mylambton.ca">C0850115@mylambton.ca</a>.
      </p>
    </section>
  );
};

const AboutUs = () => {
  return (
    <section>
      <h2>About Us</h2>
      <p>
        We are a company dedicated to providing excellent services and products to our customers.
      </p>
    </section>
  );
};

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1>Welcome to our website!</h1>
      <ContactUs />
      <AboutUs />
    </div>
  );
};

  