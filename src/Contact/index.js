import React, { useState } from 'react';
import Header from '../Navbar';
import { Link } from 'react-router-dom';
import './index.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeNumber = (event) => {
    setNumber(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    
  };

  return (
    <div>
      <Header />
      <div className="contact-con">
        <div className="input-container">
          <h1 className="contact-headng">Contact me</h1>
          <label htmlFor="name" className="label">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            value={name}
            className="input-text"
            onChange={onChangeName}
          />
          <label htmlFor="number" className="label">
            Number
          </label>
          <input
            type="number"
            id="number"
            placeholder="Number"
            value={number}
            className="input-text"
            onChange={onChangeNumber}
          />
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            className="input-text"
            onChange={onChangeEmail}
          />
          <Link to="/" onClick={handleSubmit}>
            <button className="sub-btn">Submit</button>
          </Link>
        </div>
        <img src="https://i.ibb.co/N1Pg3xv/profile-pic.png" alt="profile-pic" className="cont-img" />
      </div>
    </div>
  );
};

export default Contact;
