import React, { Fragment } from 'react'
import InnerPageBanner from '../components/partials/InnerPageBanner'
import styles from '../styles/InnerPage.module.scss'
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FiChevronLeft, FiChevronRight  } from "react-icons/fi";
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


const About = () => {
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
                              <Link href={'/'}><a>Contact Us</a></Link>
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
                              <div className={styles.serviceItems}>
                                 <img src='/images/services/service-1.png' alt='serviceThumb' />
                                 <h3>2D Design</h3>
                              </div>
                           </div>
                           <div className='col-md-3 col-6'>
                              <div className={styles.serviceItems}>
                                 <img src='/images/services/service-2.png' alt='serviceThumb' />
                                 <h3>3D Elevation</h3>
                              </div>
                           </div>
                           <div className='col-md-3 col-6'>
                              <div className={styles.serviceItems}>
                                 <img src='/images/services/service-3.png' alt='serviceThumb' />
                                 <h3>Building material supply</h3>
                              </div>
                           </div>
                           <div className='col-md-3 col-6'>
                              <div className={styles.serviceItems}>
                                 <img src='/images/services/service-4.png' alt='serviceThumb' />
                                 <h3>Interior design</h3>
                              </div>
                           </div>
                           <div className='col-md-3 col-6'>
                              <div className={styles.serviceItems}>
                                 <img src='/images/services/service-5.png' alt='serviceThumb' />
                                 <h3>Planning</h3>
                              </div>
                           </div>
                           <div className='col-md-3 col-6'>
                              <div className={styles.serviceItems}>
                                 <img src='/images/services/service-6.png' alt='serviceThumb' />
                                 <h3>Structure design</h3>
                              </div>
                           </div>
                           <div className='col-md-3 col-6'>
                              <div className={styles.serviceItems}>
                                 <img src='/images/services/service-7.png' alt='serviceThumb' />
                                 <h3>Vastu</h3>
                              </div>
                           </div>
                           <div className='col-md-3 col-6'>
                              <div className={styles.serviceItems}>
                                 <img src='/images/services/service-8.png' alt='serviceThumb' />
                                 <h3>Water proofing</h3>
                              </div>
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
                     <Carousel responsive={responsive} arrows={false} renderButtonGroupOutside={true} customButtonGroup={<ButtonGroup />}>
                        <div className={styles.testimonialItem}>
                           <div className={styles.testimonialUser}>
                              <div className={styles.userThumb}>
                                 <img src='/images/user.png' alt='user'/>
                              </div>
                              <p className={styles.userName}>Lyod Gomez</p>
                           </div>
                           <div className={styles.testimonialContent}>
                              <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure</p>
                           </div>
                        </div>
                        <div className={styles.testimonialItem}>
                           <div className={styles.testimonialUser}>
                              <div className={styles.userThumb}>
                                 <img src='/images/user.png' alt='user'/>
                              </div>
                              <p className={styles.userName}>Lyod Gomez</p>
                           </div>
                           <div className={styles.testimonialContent}>
                              <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure</p>
                           </div>
                        </div>
                        <div className={styles.testimonialItem}>
                           <div className={styles.testimonialUser}>
                              <div className={styles.userThumb}>
                                 <img src='/images/user.png' alt='user'/>
                              </div>
                              <p className={styles.userName}>Lyod Gomez</p>
                           </div>
                           <div className={styles.testimonialContent}>
                              <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure</p>
                           </div>
                        </div>
                        <div className={styles.testimonialItem}>
                           <div className={styles.testimonialUser}>
                              <div className={styles.userThumb}>
                                 <img src='/images/user.png' alt='user'/>
                              </div>
                              <p className={styles.userName}>Lyod Gomez</p>
                           </div>
                           <div className={styles.testimonialContent}>
                              <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure</p>
                           </div>
                        </div>
                        <div className={styles.testimonialItem}>
                           <div className={styles.testimonialUser}>
                              <div className={styles.userThumb}>
                                 <img src='/images/user.png' alt='user'/>
                              </div>
                              <p className={styles.userName}>Lyod Gomez</p>
                           </div>
                           <div className={styles.testimonialContent}>
                              <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure</p>
                           </div>
                        </div>
                        <div className={styles.testimonialItem}>
                           <div className={styles.testimonialUser}>
                              <div className={styles.userThumb}>
                                 <img src='/images/user.png' alt='user'/>
                              </div>
                              <p className={styles.userName}>Lyod Gomez</p>
                           </div>
                           <div className={styles.testimonialContent}>
                              <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure</p>
                           </div>
                        </div>
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


