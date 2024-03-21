import React, { Fragment } from 'react'
import MainBanner from '../components/partials/MainBanner'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
const Home = () => {
  return (
    <Fragment>
      <div className={'animationBox'}>
         <div><span></span></div>
         <div><span></span></div>
         <div><span></span></div>
         <div><span></span></div>
         <div><span></span></div>
         <div><span></span></div>
         <div><span></span></div>
         <div><span></span></div>
         <div><span></span></div>
      </div>
      <div className={styles.heroBanner}>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-md-5'>
              <div className={styles.bannerContent}>
                <span>Welcome to</span>
                <h1>Yellow <span>Wood</span></h1>
                <h4>Design & Construction</h4>
                <p>We are working towards a unique and different house
                  construction exprience with complete building sulution
                  starting from concept to real time exprence of home. exprience with complete building sulution
                  starting from concept to real time exprence of home.</p>

                <Link href={'/'}><a>Know More</a></Link>
              </div>
            </div>
            <div className='col-md-7'>
              <div className={styles.bannerImage}>
               <MainBanner/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.infoBox}>
        <div className='container'>
          <div className={styles.infoInnerBox}>
            <div className={`${styles.infoItems} ${styles.infoItem1}`}>
              <p>10 Years Experience | Quality Insurance | On Time</p>
            </div>
            <div className={`${styles.infoItems} ${styles.infoItem2}`}>
              <p>Customer Services <br /> ( 2D, 3D Interior Design )</p>
            </div>
            <div className={`${styles.infoItems} ${styles.infoItem3}`}>
              <p>Warehouse Specialist <br /> ( Design & Construction )</p>
            </div>
            <div className={`${styles.infoItems} ${styles.infoItem4}`}>
              <p>Building Material <br /> ( Cement, Steel, Sand, Bricks )</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.homeContainer}>
        <div className={styles.services}>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6'>
                <div className={styles.servicesContent}>
                  <h1>HOUSE CONSTRUCTION SERVICE</h1>
                  <p>We are working towards a unique and different house construction exprience with complete building sulution starting from concept to real time exprence of home building Our dedicated team of experts are working torards better customer exprience .We are inclined towards quality construction and services .Your trust is utmost priority As a complete building solution Yellow Wood Design and Constructions is also available for all your building material needs and that with a genuin product gaurentee.</p>
                  <Link href={'/'}>Basic Package  Start from ₹1500/sft </Link>
                </div>

              </div>
              <div className='col-md-6'>
                <div className={styles.servicesImages}>
                  <div className={styles.servicesImage1}>
                    <img src='/images/service-box-image-1.png' alt='serImg' />
                  </div>
                  <div className={styles.servicesImage2}>
                    <img src='/images/service-box-image-2.png' alt='serImg' />
                    <img src='/images/service-box-image-3.png' alt='serImg' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.materials}>
          <div className='container'>
            <div className='row'>
              <div className='col-md-7'>
                <div className={styles.materialContent}>
                  <h4>Your Online </h4>
                  <h1>Building Materials</h1>
                  <h5>Store for all construction needs.</h5>
                  <p>As a complete building sulution Yellow Wood Design and COnstructions is also available for all your building material needs and that with a genuin product gaurentee.</p>
                  <p>As a complete building sulution Yellow Wood Design and COnstructions is also available for all your building material needs and that with a genuin product gaurentee.</p>
                  <p>As a complete building sulution Yellow Wood Design and COnstructions is also available for all your building material needs and that with a genuin product gaurentee.</p>

                </div>
              </div>
              <div className='col-md-5'>
                <div className={styles.materialImages}>
                  <div className='row'>
                    <div className='col-md-6 col-6'>
                      <div className={styles.materialImageItem}>
                        <img src='/images/brand-material-thumb-1.png' alt='mti' />
                      </div>
                      <div className={styles.materialImageItem}>
                        <img src='/images/brand-material-thumb-2.png' alt='mti' />
                      </div>
                      <div className={styles.materialImageItem}>
                        <img src='/images/brand-material-thumb-3.png' alt='mti' />
                      </div>
                      <div className={styles.materialImageItem}>
                        <img src='/images/brand-material-thumb-4.png' alt='mti' />
                      </div>
                    </div>
                    <div className='col-md-6 col-6'>
                      <div className={styles.materialImageItem}>
                        <img src='/images/brand-material-thumb-5.png' alt='mti' />
                      </div>
                      <div className={styles.materialImageItem}>
                        <img src='/images/brand-material-thumb-6.png' alt='mti' />
                      </div>
                      <div className={styles.materialImageItem}>
                        <img src='/images/brand-material-thumb-7.png' alt='mti' />
                      </div>
                      <div className={styles.materialImageItem}>
                        <img src='/images/brand-material-thumb-8.png' alt='mti' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.about}>
          <div className='container'>
            <div className='row'>
              <div className='col-md-7'>
                <div className={styles.aboutContent}>
                  <h1>About</h1>
                  <div className={styles.shadowBox}>
                    <p>Yellow Wood Construction is a new generation making dream homes at affordable & assured Quality construction. We found there is severe trust deficit with building contractor & labor contractor from customer end point. What we were always sure is this can be fixed by careful study and research, combined with technical knowledge and artistic judgment. We wil do this through a strong in house professional architects, designers, engineers, projects managers with 15 years experience in the construction industry. The entire work flow from booking, design, documentation, project execution, quality checks, payment flow & final handover.</p>

                    <p><strong>Quality Standards : </strong><br />
                      Our main focus is customer satisfaction & to achieve highest quality standards we ensure the use of branded materials.</p>

                    <p><strong>ON Time Completion : </strong><br />
                      We provide a master schedule, monthly schedules & commit to completing project on time. To ensure clients are aware of the progress, monthly reports are consistently shared. We also follow a penalty policy in case of any delay.</p>

                    <p><strong>Guarantee : </strong><br />
                      We offer  1 year complete guarantee on all works that we execute & an addition 10 year warranty on structure.</p>
                  </div>
                </div>

              </div>
              <div className='col-md-5'>
                <div className={styles.aboutImage}>
                  <img src='/images/about-thumbnail.png' alt='about-img' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.weDeals}>
            <h1>We Deal in</h1>
            <div className={styles.brandLogos}>
               <div className={styles.logoItems}>
                  <img src='/images/company-logos/logo-1.png' alt='logo'/>
               </div>
               <div className={styles.logoItems}>
                  <img src='/images/company-logos/logo-2.png' alt='logo'/>
               </div>
               <div className={styles.logoItems}>
                  <img src='/images/company-logos/logo-3.png' alt='logo'/>
               </div>
               <div className={styles.logoItems}>
                  <img src='/images/company-logos/logo-4.png' alt='logo'/>
               </div>
               <div className={styles.logoItems}>
                  <img src='/images/company-logos/logo-5.png' alt='logo'/>
               </div>
               <div className={styles.logoItems}>
                  <img src='/images/company-logos/logo-6.png' alt='logo'/>
               </div>
               <div className={styles.logoItems}>
                  <img src='/images/company-logos/logo-7.png' alt='logo'/>
               </div>
               <div className={styles.logoItems}>
                  <img src='/images/company-logos/logo-8.png' alt='logo'/>
               </div>
               <div className={styles.logoItems}>
                  <img src='/images/company-logos/logo-9.png' alt='logo'/>
               </div>
               <div className={styles.logoItems}>
                  <img src='/images/company-logos/logo-10.png' alt='logo'/>
               </div>
               <div className={styles.logoItems}>
                  <img src='/images/company-logos/logo-11.png' alt='logo'/>
               </div>
               <div className={styles.logoItems}>
                  <img src='/images/company-logos/logo-12.png' alt='logo'/>
               </div>
               <div className={styles.logoItems}>
                  <img src='/images/company-logos/logo-13.png' alt='logo'/>
               </div>
               <div className={styles.logoItems}>
                  <img src='/images/company-logos/logo-14.png' alt='logo'/>
               </div>
            </div>
        </div>
      </div>
     <div className={styles.howItWorks}>
      <div className='container'>
      <h1>How it works</h1>
        <div className='row'>
           <div className='col-md-6'>
             <p><span className={styles.stepCount}>01</span> Submit your requirements</p>
           </div>
           <div className='col-md-6'>
             <p><span  className={styles.stepCount}>02</span> Get connected with our expert</p>
           </div>
           <div className='col-md-6'>
             <p><span className={styles.stepCount}>03</span> Receive a Quote</p>
           </div>
           <div className='col-md-6'>
             <p><span className={styles.stepCount}>04</span> Finalise work to be done</p>
           </div>
           <div className='col-md-6'>
             <p><span className={styles.stepCount}>05</span> Sign the aggreement</p>
           </div>
           <div className='col-md-6'>
             <p className='mb-0'><span className={styles.stepCount}>06</span> Watch your dream come true</p>
           </div>
        </div>
      </div>
     </div>
     <div className={styles.homeContainer}>
     <div className={styles.recentWorks}>
        <div className='container'>
           <h1>Recent Work</h1>
           <div className={styles.recentWorksInner}>
              <div className='row'>
                <div className='col-md-4 col-6'>
                   <div className={styles.recentWorksItems}>
                     <div className={styles.itemThumb}>
                       <img src='/images/property/property1.png' alt='property'/>
                        <div className={styles.overlayBg}></div>
                     </div>
                      <Link href={'/'}><a className={`${styles.propertyButton}`}>
                        Interior Design
                        <span></span>
                        </a></Link> 
                   </div>
                </div>
                <div className='col-md-4 col-6'>
                   <div className={styles.recentWorksItems}>
                     <div className={styles.itemThumb}>
                       <img src='/images/property/property2.png' alt='property'/>
                        <div className={styles.overlayBg}></div>
                     </div>
                     <Link href={'/'}><a className={`${styles.propertyButton}`}>
                        Interior Design
                        <span></span>
                        </a></Link> 
                   </div>
                </div>
                <div className='col-md-4 col-6'>
                   <div className={styles.recentWorksItems}>
                     <div className={styles.itemThumb}>
                       <img src='/images/property/property3.png' alt='property'/>
                        <div className={styles.overlayBg}></div>
                     </div>
                     <Link href={'/'}><a className={`${styles.propertyButton}`}>
                        Interior Design
                        <span></span>
                        </a></Link> 
                   </div>
                </div>
                <div className='col-md-4 col-6'>
                   <div className={styles.recentWorksItems}>
                     <div className={styles.itemThumb}>
                       <img src='/images/property/property4.png' alt='property'/>
                        <div className={styles.overlayBg}></div>
                     </div>
                     <Link href={'/'}><a className={`${styles.propertyButton}`}>
                        Interior Design
                        <span></span>
                        </a></Link> 
                   </div>
                </div>
                <div className='col-md-4 col-6'>
                   <div className={styles.recentWorksItems}>
                     <div className={styles.itemThumb}>
                       <img src='/images/property/property5.png' alt='property'/>
                        <div className={styles.overlayBg}></div>
                     </div>
                     <Link href={'/'}><a className={`${styles.propertyButton}`}>
                        Interior Design
                        <span></span>
                        </a></Link> 
                   </div>
                </div>
                <div className='col-md-4 col-6'>
                   <div className={styles.recentWorksItems}>
                     <div className={styles.itemThumb}>
                       <img src='/images/property/property6.png' alt='property'/>
                        <div className={styles.overlayBg}></div>
                     </div>
                     <Link href={'/'}><a className={`${styles.propertyButton}`}>
                        Interior Design
                        <span></span>
                        </a></Link> 
                   </div>
                </div>
              </div>
           </div>
        </div>
     </div>
     </div>
    </Fragment>
  )
}
Home.layout = 'Main'
export default Home