import './App.css';
import { useState } from 'react';

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [userDetails, setUserDetails] = useState({ name: '', email: '', date: '', phoneNumber: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userDetails.phoneNumber.length !== 10) {
      alert('Invalid phone number. Please enter a 10-digit phone number.');
      return;
    }
    const selectedDate = new Date(userDetails.date);
    const today = new Date();
    if (selectedDate > today) {
      alert('Invalid date of birth. Date of birth cannot be in the future.');
      return;
    }
    setModalIsOpen(false);
    setUserDetails({ name: '', email: '', date: '', phoneNumber: '' });
  };

  return (
    <div className="App">
      <h1>User Details Modal</h1>
      <button onClick={() => setModalIsOpen(true)}>Open Form</button>

      {modalIsOpen && (
        <div
          className="modal-overlay"
          onClick={() => setModalIsOpen(false)} 
        >
          <div className='modal'>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} 
          >
            <h2>Fill Details</h2>
            <form onSubmit={handleSubmit} className="form">
              <p>Username:</p>
              <input
                type="text"
                id="username"
                name="name"
                value={userDetails.name}
                onChange={handleChange}
                required
              />
              <p>Email Address:</p>
              <input
                type="email"
                id="email"
                name="email"
                value={userDetails.email}
                onChange={handleChange}
                required
              />
              <p>Phone Number:</p>
              <input
                type="text"
                id="phone"
                name="phoneNumber"
                value={userDetails.phoneNumber}
                onChange={handleChange}
                required
              />
              <p>Date of Birth:</p>
              <input
                type="date"
                id="dob"
                name="date"
                value={userDetails.date}
                onChange={handleChange}
                required
              />
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
