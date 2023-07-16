import React, { useState } from 'react';

import "./Register.css";

function Registration() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [photo, setPhoto] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleBloodGroupChange = (event) => {
    setBloodGroup(event.target.value);
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file && (file.type === 'image/png' || file.type === 'image/jpeg')) {
      setPhoto(URL.createObjectURL(file));
    } else {
      setPhoto(null);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name, phone, address, gender, bloodGroup, photo });
  };

  return (
    <div className="app">

    <form className="register-form" onSubmit={handleSubmit}>

    <div className="title">Register</div>

      <div className='input-container'>
        <label>Name:</label>
        <input type="text" value={name} onChange={handleNameChange} name="name" required />
      </div>

      <div className='input-container'>
      <label>Password:</label>
      <input type="password" value={name} onChange={handleNameChange} name="password" required />
      </div>

      <div className='input-container'>
        <label>Phone:</label>
        <input type="tel" value={phone} onChange={handlePhoneChange} name="phone_num" required />
      </div>

      <div className='input-container'>
        <label>Address:</label>
        <textarea value={address} onChange={handleAddressChange} name="address" required />
      </div>

      <div className='input-container'>
        <label>Gender:</label>
        <select value={gender} onChange={handleGenderChange} name="gender" required>
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className='input-container'>
        <label>Blood Group:</label>
        <select type="text" value={bloodGroup} onChange={handleBloodGroupChange} name="blood_group" required >
          <option value="A+ve">A+ve</option>
          <option value="A-ve">A-ve</option>
          <option value="B+ve">B+ve</option>
          <option value="B-ve">B-ve</option>
          <option value="AB+ve">AB+ve</option>
          <option value="AB-ve">AB-ve</option>
          <option value="O+ve">O+ve</option>
          <option value="O-ve">O-ve</option>
        </select>
      </div>

      <div className='input-container'>
        <label>Photo:</label>
        <input type="file" accept="image/png,image/jpeg" onChange={handlePhotoChange} name="face" required />
        {photo && <img src={photo} alt="uploaded" />}
      </div>

      <div className="button-container">
          <input type="submit" />
        </div>

    </form>
   </div>
  );
}

export default Registration;