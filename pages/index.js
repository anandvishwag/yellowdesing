import React, { Fragment } from 'react'
import Head from 'next/head';
import MainBanner from '../components/partials/MainBanner'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import { APP_URL } from '../utils/constant';
const Home = () => {
  return (
    <Fragment>
       <Head>
          <title>Home :: Yellow Wood</title>
          <meta name="title" content="Home :: Yellow Wood"/>
          <meta name="description" content="Home :: Yellow Wood"/>
          <meta name="keywords" content="Home, Yellow Wood"/>

           {/* OG Details */}
           {/* <meta property="og:type" content="website"/>
           <meta property="og:url" content={seoData.og_url}/>
           <meta property="og:title" content={seoData.og_title}/>
           <meta property="og:description" content={seoData.og_description}/>
          <meta property="og:image" content={seoData.og_image} />

          <meta property="twitter:card" content={seoData.twitter_card} />
          <meta property="twitter:url" content={seoData.page_url} />
          <meta property="twitter:title" content={seoData.twitter_title} />
          <meta property="twitter:description" content={seoData.twitter_description}/>
          <meta property="twitter:image" content={seoData.twitter_image} /> */}
          <link rel="canonical" href={APP_URL} />
        </Head>

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
                <p>We are working towards an unique and different house
                  construction experience with complete building solution
                  starting from concept to real time experience of home. experience with complete building solution
                  starting from concept to real time experience of home.</p>

                <Link href={'/about'}><a>Know More</a></Link>
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
              <p>10 Years of Experience/Quality Assurance / Timely Delivery of Project</p>
            </div>
            <div className={`${styles.infoItems} ${styles.infoItem2}`}>
              <p>Customer Services <br /> ( 2D, 3D )</p>
            </div>
            <div className={`${styles.infoItems} ${styles.infoItem3}`}>
              <p>Structural Detailing <br /> Interior Design</p>
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
                  <p>We are working towards an unique and different house construction experience with complete building solution starting from concept to real time expense of home building Our dedicated team of experts are working towards better customer experience .We are inclined towards quality construction and services .Your trust is utmost priority As a complete building solution Yellow Wood Design and Constructions is also available for all your building material needs and that with a genuine product guarantee.</p>
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
            <div className='row align-items-center'>
              <div className='col-md-7'>
                <div className={styles.materialContent}>
                  <h4>Your Online </h4>
                  <h1>Building Materials</h1>
                  <h5>Store for all your construction needs.</h5>
                  <p>As a complete building solution Yellow Wood Design and Constructions is also available for all your building material needs and that with a genuine product guarantee.</p>
                  <p>We Can add list of building materials along with remarks with best prise available in the market with assured quality of product.</p>

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
                    <p>Yellow Wood Construction is a new generation making dream homes at affordable & assured Quality construction. We found there is severe trust deficit with building contractor & labor contractor from customer end point. What we were always sure is this can be fixed by careful study and research, combined with technical knowledge and artistic judgment. We wil do this through a strong in house professional architects, designers, engineers, projects managers with 10 years experience in the construction industry. The entire work flow from booking, design, documentation, project execution, quality checks, payment flow & final handover.</p>

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
              <div className='row justify-content-center'>
                <div className='col-md-4 col-6'>
                   <div className={styles.recentWorksItems}>
                     <div className={styles.itemThumb}>
                       <img src='/images/services/service-4.png' alt='property'/>
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
                       <img src='/images/services/service-1.png' alt='property'/>
                        <div className={styles.overlayBg}></div>
                     </div>
                     <Link href={'/'}><a className={`${styles.propertyButton}`}>
                         2 D planning 
                        <span></span>
                        </a></Link> 
                   </div>
                </div>
                <div className='col-md-4 col-6'>
                   <div className={styles.recentWorksItems}>
                     <div className={styles.itemThumb}>
                       <img src='/images/services/service-2.png' alt='property'/>
                        <div className={styles.overlayBg}></div>
                     </div>
                     <Link href={'/'}><a className={`${styles.propertyButton}`}>
                         3D Plan
                        <span></span>
                        </a></Link> 
                   </div>
                </div>
                <div className='col-md-4 col-6'>
                   <div className={styles.recentWorksItems}>
                     <div className={styles.itemThumb}>
                       <img src='/images/services/service-6.png' alt='property'/>
                        <div className={styles.overlayBg}></div>
                     </div>
                     <Link href={'/'}><a className={`${styles.propertyButton}`}>
                         Warehouse Construction 
                        <span></span>
                        </a></Link> 
                   </div>
                </div>
                <div className='col-md-4 col-6'>
                   <div className={styles.recentWorksItems}>
                     <div className={styles.itemThumb}>
                       <img src='/images/services/service-8.png' alt='property'/>
                        <div className={styles.overlayBg}></div>
                     </div>
                     <Link href={'/'}><a className={`${styles.propertyButton}`}>
                        Waterproofing 
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