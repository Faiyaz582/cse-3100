import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-left mb-4">About Us</h2>
      
      {/* Our Mission Section */}
      <section className="mb-4">
        <h3>Our Mission</h3>
        <p>
          Our mission is to provide a safe and loving environment for abandoned and stray cats. We aim to
          match each cat with a responsible and caring adopter, ensuring that every cat finds a forever home.
        </p>
      </section>
      
      {/* Our History Section */}
      <section className="mb-4">
        <h3>Our History</h3>
        <p>
          Founded in 2010, we have been dedicated to rescuing and rehoming cats in need. Over the years, we have
          helped thousands of cats find their forever homes, and our community continues to grow stronger.
        </p>
      </section>
      
      {/* Our Team Section */}
      <section className="mb-4">
        <h3>Our Team</h3>
        <div className="row">
          {/* Team Member 1 */}
          <div className="col-md-4 mb-3">
            <div className="card" style={{ width: '18rem' }}>
              <img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                className="card-img-top"
                alt="Doctor"
              />
              <div className="card-body">
                <h5 className="card-title">Dr. John Doe</h5>
                <p className="card-text">Veterinarian</p>
              </div>
            </div>
          </div>
          
          {/* Team Member 2 */}
          <div className="col-md-4 mb-3">
            <div className="card" style={{ width: '18rem' }}>
              <img
                src="https://randomuser.me/api/portraits/women/2.jpg"
                className="card-img-top"
                alt="Doctor"
              />
              <div className="card-body">
                <h5 className="card-title">Dr. Jane Smith</h5>
                <p className="card-text">Veterinarian</p>
              </div>
            </div>
          </div>
          
          {/* Team Member 3 */}
          <div className="col-md-4 mb-3">
            <div className="card" style={{ width: '18rem' }}>
              <img
                src="https://randomuser.me/api/portraits/men/3.jpg"
                className="card-img-top"
                alt="Doctor"
              />
              <div className="card-body">
                <h5 className="card-title">Dr. Michael Brown</h5>
                <p className="card-text">Veterinarian</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
