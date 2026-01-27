import React from 'react';
import '../assets/styles/Contact.scss';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>
            Interested in working together or have a question?
          </p>

          <p style={{ marginTop: '20px', fontSize: '1.2rem' }}>
            Email me at:{' '}
            <a
              href="mailto:sapolraadnui@gmail.com"
              style={{ color: '#6c63ff', fontWeight: 600 }}
            >
              sapolraadnui@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;