import React, { Fragment } from 'react'
import InnerPageBanner from '../../components/partials/InnerPageBanner'
import styles from '../../styles/InnerPage.module.scss'
import Link from 'next/link';
import Head from 'next/head';
import { API_URL, APP_URL } from '../../utils/constant';
export async function getServerSideProps() {
    // Fetch data from an external API
    const res = await fetch(`${API_URL}/api/posts`);
    const resLatest = await fetch(`${API_URL}/api/posts/latest`);
    const data = await res.json();
    const latestData = await resLatest.json();
    if (!data.status || !latestData.status) {
        return {
          notFound: true,
        };
      }

    // Pass data to the page component as props
    return {
      props: {
        data,
        latestData
      },
    };
  }

const Blog = ({data, latestData}) => {

   let bannerImage = '/images/innerBnr.jpg';
   return (
      <Fragment>
          <Head>
          <title>Blog :: Yellow Wood</title>
          <meta name="title" content="Blog :: Yellow Wood"/>
          <meta name="description" content="Blog :: Yellow Wood"/>
          <meta name="keywords" content="Blog, Yellow Wood"/>

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
          <link rel="canonical" href={`${APP_URL}/blog`} />
        </Head>

         <InnerPageBanner style={styles} pageTitle="Blog" bannerImage={bannerImage} />
         <div className={styles.innerPageContent}>
          <div className='container'>
          <div className={styles.homeContainer}>
     <div className={styles.services}>
        <div className='container'>
            <div className='row'>
                <div className='col-md-9 col-12'>
                <div className={styles.blogInnerWrapper}>
              <div className='row '>
                {
                    data && data.posts ?
                    data.posts.map((item)=>{
                        return  <div className='col-md-12 col-12' key={item.id}>
                          <Link href={`/blog/${item.slug}`}><a>
                        <div className={styles.blogItem}>
                        
                          <div className={styles.blogThumb}>
                            <img src={item.thumbnail} alt='property'/>
                             <div className={styles.overlayBg}></div>
                          </div>
                          <div className={styles.blogContent}>
                            <h3> {item.title}</h3>
                            <p>{item.excerpt}</p>
                            <p><strong>Publish on : </strong> {item.post_date} </p>
                            <span className={styles.read_more}>Read More</span>
                          </div>
                         
                             
                        </div></a></Link> 
                     </div>
                    })
                     : null
                }
               
              
              </div>
           </div>
                </div>
            <div className='col-md-3 col-12'>
                    <div className={styles.serviceWidget}>
                        <h2 className={styles.widgetTitle}>Latest Posts</h2>
                        <div className={styles.widgetContent}>
                            <ul>
                                <li>
                                {
                                        latestData && latestData.posts.map((item)=>{
                                           return <Link href={`/blog/${item.slug}`} key={item.id}><a><span>{item.title}  <span className={styles.rd}>Read more</span></span> </a></Link>
                                        })
                                    }
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


