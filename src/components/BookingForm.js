import React from "react";

function BookingForm({ showName, imageUrl, onClose }) {
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here
    };
  
    return (
      <div className="booking-form">
        <h2>Book Ticket for {showName}</h2>
        <img src={imageUrl} alt={showName} />
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <br />
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <br/>
          <label>
            No. of ticket:
            <input type="text" name="No. of ticket" required/>
          </label>
          <br />
          <button type="submit">Book Now</button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    );
  }

export default BookingForm