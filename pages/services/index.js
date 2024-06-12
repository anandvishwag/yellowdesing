import React, { Fragment } from 'react'
import InnerPageBanner from '../../components/partials/InnerPageBanner'
import styles from '../../styles/InnerPage.module.scss'
import Link from 'next/link';

export async function getServerSideProps() {
    // Fetch data from an external API
    const res = await fetch('https://api.yellowoods.com/api/services');
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

const Services = ({data}) => {
   let bannerImage = '/images/innerBnr.jpg';
   return (
      <Fragment>
         <InnerPageBanner style={styles} pageTitle="Services" bannerImage={bannerImage} />
         <div className={styles.innerPageContent}>
          <div className='container'>
          <div className={styles.homeContainer}>
     <div className={styles.services}>
        <div className='container'>

           <div className={styles.recentWorksInner}>
              <div className='row justify-content-center'>
                {
                    data && data.services ?
                    data.services.map((item)=>{
                        return  <div className='col-md-4 col-6' key={item.id}>
                        <div className={styles.recentWorksItems}>
                          <div className={styles.itemThumb}>
                            <img src={item.thumbnail} alt='property'/>
                             <div className={styles.overlayBg}></div>
                          </div>
                           <Link href={`/services/${item.slug}`}><a className={`${styles.propertyButton}`}>
                             {item.title}
                             <span></span>
                             </a></Link> 
                        </div>
                     </div>
                    })
                     : null
                }
               
              
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

Services.layout = 'Main'
export default Services


