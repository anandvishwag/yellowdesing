import React, { Fragment, useEffect, useState } from 'react'
import InnerPageBanner from '../components/partials/InnerPageBanner'
import styles from '../styles/InnerPage.module.scss'
import { FaWhatsapp, FaMapMarker, FaPhoneAlt  } from "react-icons/fa";

const ContactUs = () => {
    let bannerImage = '/images/innerBnr.jpg';

    let randomStrings = Math.random().toString(36).slice(8);
    const [captcha, setCaptcha] = useState(randomStrings); 
    // // useEffect(()=>{
    // //   setCaptcha();
    // // },[])
    const refreshCaptcha = () =>{
        setCaptcha(Math.random().toString(36).slice(8))
    }

   
  return (
   <Fragment>
      <InnerPageBanner pageTitle={'Contact Us'} bannerImage={bannerImage} style={styles}/>
      <div className={styles.innerPageWrapper}>
           <div className={`container ${styles.contactWrapper}`}>
              <div className='row'>
                <div className='col-md-6'>
                <div className={styles.contactForm}>
                  <h1>We'd Love To Hear From You</h1>
                  <p>Aenean sodales mauris quis tellus facilisis, vel mattis magna. Interdum curabitur eget aliquam elit in mauris purus.</p>
                  
                     <form className=' mb-15'>
                        <div className={styles.formGroup}>
                            <label htmlFor='name'>Name</label>
                            <input type='text' className={styles.formControl} id="name"/>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor='phone'>Mobile</label>
                            <input type='tel' className={styles.formControl} id="phone"/>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor='message'>Message</label>
                            <textarea className={styles.textArea} id="message"></textarea>
                        </div>
                        <div className={styles.formGroup}>
                            <div className={styles.captcha}><span>{captcha} </span> <button type='button' onClick={refreshCaptcha}><img src='/images/refresh.png' alt=''/></button></div>
                            <input type='text' className={styles.formControl} id="captcha" style={{maxWidth:200}}/>
                        </div>
                        <button type='submit' className={styles.submitButton}>Submit</button>
                     </form>
                  </div>
                </div>
                <div className='col-md-6'>
                    <div className={styles.contactImage}>
                       <img src='/images/contactThumb.jpg' alt='contactImg'/>
                    </div>
                   
                </div>
              </div>

              <div className={styles.contactWrapperBottom}>
                <div className='row'>
                    <div className='col-md-4 mb-15'>
                        <div className={styles.socialItems}>
                            <FaWhatsapp size={20}/> <span>+91-9696475344</span>
                        </div>
                    </div>
                    <div className='col-md-4 mb-15'>
                        <div className={styles.socialItems}>
                            <span className={styles.socialItemIcon}><FaPhoneAlt   size={20}/></span> <span>+91-8765768335</span>
                        </div>
                    </div>
                    <div className='col-md-4 mb-15'>
                        <div className={styles.socialItems}>
                            <span className={styles.socialItemIcon}><FaMapMarker  size={20}/></span> <span>Shivnagar, Varanasi</span>
                        </div>
                    </div>
                </div>
              </div>
           </div>
         
      </div>
   </Fragment>
  )
}
ContactUs.layout = 'Main'
export default ContactUs;