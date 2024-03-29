import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

import "./Book.css";

const Book = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      phoneNumber: phoneNumber,
      selectedDate: selectedDate,
    };
    axios.post("http://your-api-endpoint", data).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="app">
      <form className="booking-form" onSubmit={handleSubmit}>

      <div className="title">Book Appointment</div>

      <div className="input-container">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
       </div>

       <div className="input-container">
        <label htmlFor="phone">Phone Number:</label>
        <input
          type="number"
          id="phone"
          value={phoneNumber}
          maxLength={10}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        </div>

        <div className="input-container">
        <label htmlFor="date">Selected Date:</label>
        <DatePicker
          id="date"
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          minDate={new Date()}
        />
        </div>

        <div className="button-container">
          <input type="submit" />
        </div>

      </form>
    </div>
  );
};

export default Book;