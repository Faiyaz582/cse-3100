import { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);  // Set submitted to true to show the success message
    // Optionally, clear form after submission
    setFormData({ name: '', phone: '', email: '' });
  };

  return (
    <div className="container mt-4">
      <h2 className="text-left mb-4">Contact Us</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime accusantium architecto, nesciunt sequi explicabo blanditiis quibusdam ratione consectetur maiores officia consequuntur voluptate recusandae dicta quaerat tempora, deleniti est perspiciatis itaque.</p>
      {submitted && (
        <div className="alert alert-success" role="alert">
          Thank you for contacting us! We will get back to you soon.
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control w-50"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="form-control w-50"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control w-50"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-info text-white">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
