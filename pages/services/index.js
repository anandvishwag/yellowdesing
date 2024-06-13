import React, { Fragment } from 'react'
import InnerPageBanner from '../../components/partials/InnerPageBanner'
import styles from '../../styles/InnerPage.module.scss'
import Link from 'next/link';
import Head from 'next/head';
import { API_URL, APP_URL } from '../../utils/constant';
export async function getServerSideProps() {
    // Fetch data from an external API
    const res = await fetch(`${API_URL}/api/services`);
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
         <Head>
          <title>Services :: Yellow Wood</title>
          <meta name="title" content="Services :: Yellow Wood"/>
          <meta name="description" content="Services :: Yellow Wood"/>
          <meta name="keywords" content="Services, Yellow Wood"/>

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
          <link rel="canonical" href={`${APP_URL}/services`} />
        </Head>

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


