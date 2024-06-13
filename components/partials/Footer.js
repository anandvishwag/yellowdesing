import React from 'react'
import styles from '../../styles/Footer.module.scss'
import Link from 'next/link'
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarker, FaEnvelope, FaPhoneAlt     } from "react-icons/fa";
import { FiPhone, FiMapPin, FiMail   } from "react-icons/fi";
const Footer = () => {
  return (
    <footer>
       <div className={styles.footerWrapper}>
         <div className='container'>
           <div className='row'>
              <div className='col-md-4 col-12'>
                <div className={styles.footerWidget}>
                   <div className={styles.footerBrand}>
                     <img src='/images/logo.png' alt='footer-brand'/>
                   </div>
                   <div className={styles.followUs}>
                      <span>Follow Us</span>
                      <ul>
                        <li><Link href={'/'}><a><FaLinkedinIn size={18} /></a></Link></li>
                        <li><Link href={'/'}><a><FaFacebookF size={18}/></a></Link></li>
                        <li><Link href={'/'}><a><FaInstagram size={18}/></a></Link></li>
                      </ul>
                   </div>
                </div>
              </div>
              <div className='col-md-4 col-7'>
                <div className={styles.footerWidget}>
                   <h3>Contact Details</h3>
                   <ul className={styles.addressInfo}>
                       <li><Link href={'https://maps.app.goo.gl/mCzbi8sBG7AfbKML6'}><a target='_blank'><span><FiMapPin size={18}/></span> Shivnagar, Varanasi</a></Link></li>
                       <li><Link href={'tel:+91-9696475344'}><a><span><FiPhone  size={18}/></span> +91-9696475344, 8765768335</a></Link></li>
                       <li><Link href={'mailto:Yellowwoodesign@hotmail.com'}><a><span><FiMail  size={18}/></span> Yellowwoodesign@hotmail.com</a></Link></li>
                       <li><Link href={'https://wa.link/u5z168'}><a target='_blank'><span><FaWhatsapp size={18}/></span> +91-9696475344</a></Link></li>
                   </ul>
                </div>
              </div>
              <div className='col-md-4 col-5'>
                <div className={styles.footerWidget}>
                   <h3>Quick Links</h3>
                   <ul className={styles.quickLinks}>
                       <li><Link href={'/'}><a>Home</a></Link></li>
                       <li><Link href={'/about'}><a>About us</a></Link></li>
                       <li><Link href={'/services'}><a>Services</a></Link></li>
                       <li><Link href={'/blog'}><a>Blog</a></Link></li>
                       <li><Link href={'/contact-us'}><a>Contact Us</a></Link></li>
                   </ul>
                </div>
              </div>
           </div>
         </div>
       </div>
       <div className={styles.footerBottom}>
        <div className={`container ${styles.footerBottomInner}`}>
        <p>© Copyrights 2024 - yellowwooddesign. All Rights Reserved.</p>
         <ul>
            <li><Link href={'/'}><a>Terms and Conditions</a></Link></li>
            <li><Link href={'/'}><a>Privacy Policy</a></Link></li>
            <li><Link href={'/'}><a>Disclaimer</a></Link></li>
         </ul>
        </div>
        
       </div>
    </footer>
  )
}

export default Footer