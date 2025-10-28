import React from 'react'

const Footer = () => {
  return (
          <section className="footer">
  <div className="footer-container">
    <div className="footer-about">
      <h3>Apexline Logistics</h3>
      <p>
        We provide trusted, efficient, and global logistics services — 
        connecting businesses across borders with reliability and speed.
      </p>
    </div>

    <div className="footer-links">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>

    <div className="footer-contact">
      <h4>Contact</h4>
      <p>Email: info@apexline.com</p>
      <p>Phone: +234 800 000 0000</p>
      <p>Location: Lagos, Nigeria</p>
    </div>
  </div>

  <div className="footer-bottom">
    <p>© 2024 Apexline. All rights reserved.</p>
  </div>
</section>
  )
}

export default Footer
