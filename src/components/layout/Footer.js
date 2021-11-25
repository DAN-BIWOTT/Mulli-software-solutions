import React from 'react';

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">About Us</h2>
        <p className="mt-5">We endeavour to at all times, Empowere companies and individuals to stand out with excellent customer experience</p>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Important Links</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://termly.io/resources/templates/terms-and-conditions-template/">Terms &amp; Conditions</a>
          </li>
          <li>
            <a href="https://termly.io/resources/templates/terms-and-conditions-template/">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Contact Us</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="mailto:Support@hekayaent.co.ke">support@hekayaent.co.ke</a>
          </li>
          <li>
            <a href="https://api.WhatsApp.com/send?phone=+254758544601">WhatsApp</a>
          </li>
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">GitHub</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
