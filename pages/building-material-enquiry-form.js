import React, { Fragment } from 'react'
import InnerPageBanner from '../components/partials/InnerPageBanner'
import styles from '../styles/InnerPage.module.scss'
const BuildingMaterialEnquiryForm = () => {
    let bannerImage = '/images/innerBnr.jpg';
  return (
     <Fragment>
        <InnerPageBanner bannerImage={bannerImage} pageTitle={'Building Material Enquiry Form'} style={styles}/>
        <div className={styles.innerPageWrapper}>
            <div className={styles.enquiryFormWrapper}>
            <div className={`container ${styles.enquiryWrapper}`}>
            <form>
                    <div className={`row ${styles.formGroup}`}>
                        <div className='col-md-6 mb-15'>
                            <input type='text' className={styles.formControl} id="name" placeholder='Name'/>
                        </div>
                        <div className='col-md-6'>
                            <input type='text' className={styles.formControl} id="name" placeholder='Mobile Number'/>
                        </div>
                    </div>
                    <div className={`row ${styles.formGroup}`}>
                        <div className='col-md-6 mb-15'>
                            <select className={styles.formControl}>
                                <option>Material Service</option>
                            </select>
                        </div>
                        <div className='col-md-6'>
                        <select className={styles.formControl}>
                                <option>Quantity</option>
                            </select>
                        </div>
                    </div>
                    <div className={`row ${styles.formGroup}`}>
                        <div className='col-md-6 mb-15'>
                            <input type='text' className={styles.formControl} id="name" placeholder='Delivery Address'/>
                        </div>
                        <div className='col-md-6'>
                            <input type='text' className={styles.formControl} id="name" placeholder='City (Only in Varanasi)'/>
                        </div>
                    </div>
                    <div className={`row ${styles.formGroup}`}>
                        <div className='col-md-6'>
                            <input type='text' className={styles.formControl} id="name" placeholder='Pin code'/>
                        </div>
                    </div>
                    <button type='submit' className={styles.submitButton}>Submit</button>
                </form>
            </div>
              
            </div>
        </div>
     </Fragment>
  )
}
BuildingMaterialEnquiryForm.layout = 'Main'
export default BuildingMaterialEnquiryForm