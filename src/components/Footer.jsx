import React from 'react'

const Footer = () => {
    
  return (
    <>
     <footer>
        <div className="foot d-flex gap-2">
        <ul>
          <li><a href="http:"><h6> Get to Know Us</h6></a></li>
          <li><a href="http:"> About Us</a></li>
          <li><a href="http:"> Careers</a> </li>
          <li><a href="http:"> Press Releases</a></li>
          <li><a href="http:"> Amazon Science</a></li>
        </ul>
        <ul>
          <li><a href=""><h6>Connect with Us</h6></a></li>
          <li><a href="">Facebook</a></li>
          <li><a href="">Twitter</a></li>
          <li><a href="">Instagram</a></li>
        </ul>
        <ul>
          <li><a href=""><h6>Make Money with Us</h6></a></li>
          <li><a href="">Sell on Amazon</a></li>
          <li><a href="">Sell under Amazon Accelerator</a></li>
          <li><a href="">Protect and Build Your Brand</a></li>
          <li><a href="">Amazon Global Selling</a></li>
          <li><a href="">Become an Affiliate</a></li>
          <li><a href="">Fulfilment by Amazon</a></li>
          <li><a href="">Advertise Your Products</a></li>
          <li><a href="">Amazon Pay on Merchants</a></li>
        </ul>
        <ul>
        <li><a href=""><h6>Let Us Help You</h6></a></li>
        <li><a href="">COVID-19 and Amazon</a></li>
        <li><a href="">Your Account</a></li>
        <li><a href="">Returns Centre</a></li>
        <li><a href="">Recalls and Product Safety Alerts</a></li>
        <li><a href="">100% Purchase Protection</a></li>
        <li><a href="">Amazon App Download</a></li>
        <li><a href="">Help</a></li>
        </ul>
        </div>
        <hr />
        <div className="btns d-flex gap-3 rounded-0 justify-content-center">
          <button className='btn btn-outline-light'><i class="fa-solid fa-globe"></i> English</button>
          <button className='btn btn-outline-light'><img src="https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/india-flag-icon.png" alt="" /> India</button>
        </div>
       </footer>
       
    </>
  )
}

export default Footer