import React, { Fragment } from 'react'
import InnerPageBanner from '../../components/partials/InnerPageBanner'
import styles from '../../styles/InnerPage.module.scss'
import Link from 'next/link';
import { FiChevronRight } from "react-icons/fi";
export async function getServerSideProps() {
    // Fetch data from an external API
    const res = await fetch('https://api.yellowoods.com/api/posts');
    const data = await res.json();
    if (!data.status) {
        return {
          notFound: true,
        };
      }
    
    // Pass data to the page component as props
    return {
      props: {
        data,
      },
    };
  }

const Blog = ({data}) => {
   let bannerImage = '/images/innerBnr.jpg';
   return (
      <Fragment>
         <InnerPageBanner style={styles} pageTitle="Blog" bannerImage={bannerImage} />
         <div className={styles.innerPageContent}>
          <div className='container'>
          <div className={styles.homeContainer}>
     <div className={styles.services}>
        <div className='container'>
            <div className='row'>
                <div className='col-md-9'>
                <div className={styles.blogInnerWrapper}>
              <div className='row '>
                {
                    data && data.posts ?
                    data.posts.map((item)=>{
                        return  <div className='col-md-6 col-6' key={item.id}>
                        <div className={styles.blogItem}>
                        <Link href={`/blog/${item.slug}`}><a>
                          <div className={styles.blogThumb}>
                            <img src={item.thumbnail} alt='property'/>
                             <div className={styles.overlayBg}></div>
                          </div>
                          <h3 className={`${styles.propertyButton}`}> {item.title}</h3>
                             </a></Link> 
                        </div>
                     </div>
                    })
                     : null
                }
               
              
              </div>
           </div>
                </div>
            <div className='col-md-3'>
                    <div className={styles.serviceWidget}>
                        <h2 className={styles.widgetTitle}>Our Services</h2>
                        <div className={styles.widgetContent}>
                            <ul>
                                <li>
                                    <Link href="/services/planing"><a><span>Planning</span> <FiChevronRight /></a></Link>
                                    <Link href="/services/2d-design"><a><span>2D Design</span> <FiChevronRight /></a></Link>
                                    <Link href="/services/3d-elevation"><a><span>3D Elevation</span> <FiChevronRight /></a></Link>
                                    <Link href="/services/interior-designing"><a><span>Interior Designing</span> <FiChevronRight /></a></Link>
                                    <Link href="/services/vaastu-consultation"><a><span>Vaastu Consultation</span> <FiChevronRight /></a></Link>
                                    <Link href="/services/structural-designing"><a><span>Structural Designing</span> <FiChevronRight /></a></Link>
                                    <Link href="/services/waterproofing"><a><span>Waterproofing</span> <FiChevronRight /></a></Link>
                                    <Link href="/services/material-provider"><a><span>Material Provider</span> <FiChevronRight /></a></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.serviceWidget}>
                        <h2 className={styles.widgetTitle}>Opening Hours</h2>
                        <div className={styles.widgetContent}>
                            <ul>
                                <li>
                                    <Link href="/"><a><span>Monday</span> 9 AM - 6 PM</a></Link>
                                    <Link href="/"><a><span>Tuesday</span> 9 AM - 6 PM</a></Link>
                                    <Link href="/"><a><span>Wednessday</span> 9 AM - 6 PM</a></Link>
                                    <Link href="/"><a><span>Thursday</span> 9 AM - 6 PM</a></Link>
                                    <Link href="/"><a><span>Friday</span> 9 AM - 6 PM</a></Link>
                                    <Link href="/"><a><span>Saturday</span> 9 AM - 6 PM</a></Link>
                                    <Link href="/"><a><span>Sunday</span> OFF</a></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
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

Blog.layout = 'Main'
export default Blog


