import React, { Fragment, useEffect, useState } from 'react'
import InnerPageBanner from '../components/partials/InnerPageBanner'
import styles from '../styles/InnerPage.module.scss'
import { FaWhatsapp, FaMapMarker, FaPhoneAlt } from "react-icons/fa";
import { Formik } from 'formik';
import Swal from 'sweetalert2'

const ContactUs = () => {
    let bannerImage = '/images/innerBnr.jpg';

    let randomStrings = Math.random().toString(36).slice(8);
    const [captcha, setCaptcha] = useState(randomStrings);
    const [isLoading, setLoading] = useState(false);
    // // useEffect(()=>{
    // //   setCaptcha();
    // // },[])
    const refreshCaptcha = () => {
        setCaptcha(Math.random().toString(36).slice(8))
    }

    const handleSubmit = async (values, { setSubmitting, resetForm }) =>{
        setLoading(true);
        const requestOptions = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
              // Add any other headers your API requires
            },
            body: JSON.stringify(values)
          };
          const response = await fetch('https://api.yellowoods.com/api/enquiry-submit', requestOptions);

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
      
          const data = await response.json(); 
          if(data && data.status){
            setLoading(false);
            Swal.fire({
                title: 'Thank You',
                text: data.message,
                icon: 'success',
                confirmButtonText: 'Cool'
              });
              resetForm();
          }else{
            Swal.fire({
                title: 'Error !',
                text: data.message,
                icon: 'error',
                confirmButtonText: 'Ok'
              })
          }
    }
    return (
        <Fragment>
            <InnerPageBanner pageTitle={'Contact Us'} bannerImage={bannerImage} style={styles} />
            <div className={styles.innerPageWrapper}>
                <div className={`container ${styles.contactWrapper}`}>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className={styles.contactForm}>
                                <h1>We'd Love To Hear From You</h1>
                                <p>Aenean sodales mauris quis tellus facilisis, vel mattis magna. Interdum curabitur eget aliquam elit in mauris purus.</p>
                                <Formik
                                    initialValues={{ name:'', email: '', phone:'',  message: ''}}
                                    validate={values => {
                                        const errors = {};
                                        if (!values.name) {
                                            errors.name = 'Name is required';
                                        }
                                        if (!values.email) {
                                            errors.email = 'Email is required';
                                        } else if (
                                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                        ) {
                                            errors.email = 'Invalid email address';
                                        }
                                        if (!values.phone) {
                                            errors.phone = 'Mobile is required';
                                        }
                                        if (!values.message) {
                                            errors.message = 'Message is required';
                                        }
                                        // if (!values.captcha) {
                                        //     errors.captcha = 'Required';
                                        // }
                                        
                                        return errors;
                                    }}
                                    onSubmit={handleSubmit}
                                >
                                    {({
                                        values,
                                        errors,
                                        touched,
                                        handleChange,
                                        handleBlur,
                                        handleSubmit,
                                        isSubmitting,
                                    }) => (

                                        <form className=' mb-15' onSubmit={handleSubmit}>
                                            <div className={styles.formGroup}>
                                                <label htmlFor='name'>Name</label>
                                                <input type='text' className={styles.formControl} id="name" 
                                                  name="name"
                                                  onChange={handleChange}
                                                  onBlur={handleBlur}
                                                  value={values.name}
                                                />
                                                  {errors.name && touched.name && <span className={styles.errorHelp}>{errors.name}</span>}
                                            </div>
                                            <div className={styles.formGroup}>
                                                <label htmlFor='email'>Email</label>
                                                <input type='email' className={styles.formControl} id="email" 
                                                  name="email"
                                                  onChange={handleChange}
                                                  onBlur={handleBlur}
                                                  value={values.email}
                                                />
                                                  {errors.email && touched.email && <span className={styles.errorHelp}>{errors.email}</span>}
                                            </div>
                                            <div className={styles.formGroup}>
                                                <label htmlFor='phone'>Mobile</label>
                                                <input type='tel' className={styles.formControl} id="phone" 
                                                  name="phone"
                                                  onChange={handleChange}
                                                  onBlur={handleBlur}
                                                  value={values.phone}
                                                />
                                                  {errors.phone && touched.phone && <span className={styles.errorHelp}>{errors.phone}</span>}
                                            </div>
                                            <div className={styles.formGroup}>
                                                <label htmlFor='message'>Message</label>
                                                <textarea className={styles.textArea} id="message"
                                                  name="message"
                                                  onChange={handleChange}
                                                  onBlur={handleBlur}
                                                  value={values.message}
                                                ></textarea>
                                                  {errors.message && touched.message && <span className={styles.errorHelp}>{errors.message}</span>}
                                            </div>
                                            {/* <div className={styles.formGroup}>
                                                <div className={styles.captcha}><span>{captcha} </span> <button type='button' onClick={refreshCaptcha}><img src='/images/refresh.png' alt='' /></button></div>
                                                <input type='text' className={styles.formControl} id="captcha" style={{ maxWidth: 200 }} 
                                                  name="captcha"
                                                  onChange={handleChange}
                                                  onBlur={handleBlur}
                                                  value={values.captcha}
                                                />
                                                {errors.captcha && touched.captcha && <span className={styles.errorHelp}>{errors.captcha}</span>}
                                            </div> */}
                                            <button type='submit' className={styles.submitButton}>{isLoading ? 'Please wait..' : 'Submit'}</button>
                                        </form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className={styles.contactImage}>
                                <img src='/images/contactThumb.jpg' alt='contactImg' />
                            </div>

                        </div>
                    </div>

                    <div className={styles.contactWrapperBottom}>
                        <div className='row'>
                            <div className='col-md-4 mb-15'>
                                <div className={styles.socialItems}>
                                    <FaWhatsapp size={20} /> <span>+91-9696475344</span>
                                </div>
                            </div>
                            <div className='col-md-4 mb-15'>
                                <div className={styles.socialItems}>
                                    <span className={styles.socialItemIcon}><FaPhoneAlt size={20} /></span> <span>+91-8765768335</span>
                                </div>
                            </div>
                            <div className='col-md-4 mb-15'>
                                <div className={styles.socialItems}>
                                    <span className={styles.socialItemIcon}><FaMapMarker size={20} /></span> <span>Shivnagar, Varanasi</span>
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