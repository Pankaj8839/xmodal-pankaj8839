import './App.css';
import Modal from 'react-modal';
import { useState } from 'react';

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    date: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userDetails.phoneNumber.length !== 10)  {
      alert('Invalid phone number. Please enter a valid 10-digit number.');
      return;
    }

   =
    const selectedDate = new Date(userDetails.date);
    const today = new Date();
    if (selectedDate > today) {
      alert('Invalid date of birth. Date of birth cannot be in the future.');
      return;
    }

    alert('Form submitted successfully!');
    setModalIsOpen(false);
    setUserDetails({ name: '', email: '', date: '', phoneNumber: '' });
  };

  const FormInput = ({ label, type, id, name, value, onChange, required }) => (
    <div className="form-group">
      <p>{label}</p>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        aria-label={label}
      />
    </div>
  );

  return (
    <div className="App">
      <h1>User Details Modal</h1>
      <button onClick={() => setModalIsOpen(true)}>Open Form</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="modal"
        overlayClassName="overlay"
        ariaHideApp={false}
      >
        <div className="modal">
          <div className="modal-content">
            <h2>Fill Details</h2>
            <form onSubmit={handleSubmit} className="form">
              <FormInput
                label="Username:"
                type="text"
                id="username"
                name="name"
                value={userDetails.name}
                onChange={handleChange}
                required
              />
              <FormInput
                label="Email Address:"
                type="email"
                id="email"
                name="email"
                value={userDetails.email}
                onChange={handleChange}
                required
              />
              <FormInput
                label="Phone Number:"
                type="text"
                id="phone"
                name="phoneNumber"
                value={userDetails.phoneNumber}
                onChange={handleChange}
                required
              />
              <FormInput
                label="Date of Birth:"
                type="date"
                id="dob"
                name="date"
                value={userDetails.date}
                onChange={handleChange}
                required
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default App;


