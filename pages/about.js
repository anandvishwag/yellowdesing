import React, { Fragment } from 'react'
import Head from 'next/head';
import InnerPageBanner from '../components/partials/InnerPageBanner'
import styles from '../styles/InnerPage.module.scss'
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FiChevronLeft, FiChevronRight  } from "react-icons/fi";
import parse from 'html-react-parser';
import { API_URL, APP_URL } from '../utils/constant';
const responsive = {
   superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2
   },
   desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
   },
   tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
   },
   mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
   }
};


export async function getServerSideProps() {
   // Fetch data from an external API
   const res = await fetch(`${API_URL}/api/testimonial/all`);
   const resp = await res.json();
   if (!resp.status) {
       return {
         notFound: true,
       };
     }

   const testimonials = resp.testimonials;
   // Pass data to the page component as props
   return {
     props: {
      testimonials
     },
   };
 }

const About = ({testimonials}) => {
   let bannerImage = '/images/innerBnr.jpg';

   const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
      const { carouselState: { currentSlide } } = rest;
      return (
         <div className="carousel-button-group custom-carousel-btn">
            <button className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} > <FiChevronLeft size={20}/> </button>
            <button onClick={() => next()} ><FiChevronRight size={20}/> </button>
         </div>
      );
   };

   return (
      <Fragment>
          <Head>
          <title>About :: Yellow Wood</title>
          <meta name="title" content="About :: Yellow Wood"/>
          <meta name="description" content="About :: Yellow Wood"/>
          <meta name="keywords" content="About, Yellow Wood"/>

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
          <link rel="canonical" href={`${APP_URL}/about`} />
        </Head>

         <InnerPageBanner style={styles} pageTitle="About Us" bannerImage={bannerImage} />
         <div className={styles.innerPageContent}>
            <div className={styles.aboutWrapper}>
               <div className='container'>
                  <div className='row align-items-center'>
                     <div className='col-md-4'>
                        <div className={styles.aboutThumb}>
                           <img src='/images/aboutThumb.png' alt='aboutImg' />
                        </div>
                     </div>
                     <div className='col-md-8'>
                        <div className={styles.aboutContent}>
                           <span>About Yellow Wood Design & Constructions</span>
                           <h2>We are the best company for your visit</h2>
                           <p>We ,Yellow Wood Design and Construction ,are the complete solution provider for all your construction needs.We are dedicated team working towards your home construction journey .Our priorities are based on customer satisfaction and quality.</p>

                           <div className={styles.counterBox}>
                              <ul>
                                 <li><span>10+</span> Year <br /> Experience </li>
                                 <li><span>100+</span> Happy <br /> Customers </li>
                                 <li><span>15+</span> Choice <br /> of Services </li>
                                 <li><span>10+</span> Professional <br /> Guides </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className={styles.aboutSectionBottom}>
                  <div className='container'>
                     <div className='row'>
                        <div className='col-md-8'>
                           <div className={styles.contactBox}>
                              <h3>Connect with us for a unique exprience of construction services.</h3>
                              <Link href={'/contact-us'}><a>Contact Us</a></Link>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className={styles.indicatorImg}>
                     <img src='/images/indicator.png' alt='ind' />
                  </div>
               </div>
               <div className={styles.serviceWrapper}>
                  <div className='container'>
                     <h2>Our Services</h2>
                     <div className={styles.serviceList}>
                        <div className='row'>
                           <div className='col-md-3 col-6'>
                              <Link href={'/services/2d-design'}>
                                 <a> <div className={styles.serviceItems}>
                                 <img src='/images/services/service-1.png' alt='serviceThumb' />
                                 <h3>2D Design</h3>
                              </div></a>
                              </Link>
                             
                           </div>
                           <div className='col-md-3 col-6'>
                           <Link href={'/services/3d-elevation'}>
                                 <a> <div className={styles.serviceItems}>
                                 <img src='/images/services/service-2.png' alt='serviceThumb' />
                                 <h3>3D Elevation</h3>
                              </div></a>
                              </Link>
                             
                           </div>
                           <div className='col-md-3 col-6'>
                           <Link href={'/services/material-provider'}>
                                 <a> <div className={styles.serviceItems}>
                                 <img src='/images/services/service-3.png' alt='serviceThumb' />
                                 <h3>Building material supply</h3>
                              </div></a>
                              </Link>
                             
                           </div>
                           <div className='col-md-3 col-6'>
                           <Link href={'/services/interior-designing'}>
                                 <a>  <div className={styles.serviceItems}>
                                 <img src='/images/services/service-4.png' alt='serviceThumb' />
                                 <h3>Interior design</h3>
                              </div></a>
                              </Link>
                            
                           </div>
                           <div className='col-md-3 col-6'>
                           <Link href={'/services/planing'}>
                                 <a> <div className={styles.serviceItems}>
                                 <img src='/images/services/service-5.png' alt='serviceThumb' />
                                 <h3>Planning</h3>
                              </div></a>
                              </Link>
                             
                           </div>
                           <div className='col-md-3 col-6'>
                           <Link href={'/services/structural-designing'}>
                                 <a> <div className={styles.serviceItems}>
                                 <img src='/images/services/service-6.png' alt='serviceThumb' />
                                 <h3>Structure design</h3>
                              </div></a>
                              </Link>
                             
                           </div>
                           <div className='col-md-3 col-6'>
                           <Link href={'/services/vaastu-consultation'}>
                                 <a>   <div className={styles.serviceItems}>
                                 <img src='/images/services/service-7.png' alt='serviceThumb' />
                                 <h3>Vastu Consultation</h3>
                              </div></a>
                              </Link>
                           
                           </div>
                           <div className='col-md-3 col-6'>
                           <Link href={'/services/waterproofing'}>
                                 <a> <div className={styles.serviceItems}>
                                 <img src='/images/services/service-8.png' alt='serviceThumb' />
                                 <h3>Water proofing</h3>
                              </div></a>
                              </Link>
                             
                           </div>
                        </div>
                     </div>
                  </div>

               </div>
               <div className={styles.testimonialWrapper}>
                  <div className={`container ${styles.testimonialInner}`}>
                     <div className={styles.sectionTitle}>
                        <h2>Testimonial</h2>
                     </div>
                     <Carousel ssr={true} responsive={responsive} arrows={false} renderButtonGroupOutside={true} customButtonGroup={<ButtonGroup />}>
                     {
                        testimonials && testimonials.map((item)=>{
                           return   <div className={styles.testimonialItem} key={item.id}>
                           <div className={styles.testimonialUser}>
                              <div className={styles.userThumb}>
                                 <img src={item.profile_pic} alt='user'/>
                              </div>
                              <p className={styles.userName}>{item.name}</p>
                           </div>
                           <div className={styles.testimonialContent}>
                              {parse(item.description)}
                           </div>
                        </div>
                        })
                     }
                      
                    
                     </Carousel>
                  </div>

               </div>

            </div>

         </div>
      </Fragment>
   )
}

About.layout = 'Main'
export default About


