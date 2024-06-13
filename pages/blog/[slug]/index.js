import React, { Fragment } from 'react'
import styles from '../../../styles/InnerPage.module.scss'
import Link from 'next/link';
import { MdOutlineDateRange } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import parse from 'html-react-parser';
import Head from 'next/head';
import { API_URL, APP_URL } from '../../../utils/constant';

export async function getServerSideProps( { params }) {
    const { slug } = params;
   
    // Fetch data from an external API
    const res = await fetch(`${API_URL}/api/post/${slug}`);
    const resLatest = await fetch(`${API_URL}/api/posts/latest`);
    const resp = await res.json();
    const respLatest = await resLatest.json();

    if (!resp.status || !respLatest.status) {
        return {
          notFound: true,
        };
      }

    const data = resp.post;
    const latestPosts = respLatest.posts;

    // Pass data to the page component as props
    return {
      props: {
        data,
        latestPosts
      },
    };
  }

const BlogSingle = ({data, latestPosts}) => {

   return (
      <Fragment>
<Head>
          <title>Blog :: {data.meta_title}</title>
          <meta name="title" content={data.meta_title}/>
          <meta name="description" content={data.meta_description}/>
          <meta name="keywords" content={data.meta_keywords}/>

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
          <link rel="canonical" href={`${APP_URL}/blog/${data.slug}`} />
        </Head>
         <div className={styles.innerPageContent}>
          <div className='container'>
          <div className={styles.homeContainer}>
     <div className={styles.services}>
        <div className='container'>
            <div className='row'>
                <div className='col-md-9'>
                <div className={styles.blogInnerWrapper}>
                    <div className={styles.featuredImage}>
                         <img src={data.thumbnail} alt='ft'/>
                    </div>
                    <div className={styles.aboutPost}>
                        <div><span><MdOutlineDateRange size={17}/> <strong>Plublish on :</strong> </span><span>{data.post_date}</span></div>
                        <div><span><FaUser size={17}/> <strong>Auther :</strong> </span><span>{data.auther_name}</span></div>
                    </div>
                    <div className={styles.blogContent}>
                       <h3>{data.title}</h3>
                        {parse(data.post_details)}
                    </div>
                  
           
           </div>
                </div>
            <div className='col-md-3'>
                    <div className={styles.serviceWidget}>
                        <h2 className={styles.widgetTitle}>Latest Posts</h2>
                        <div className={styles.widgetContent}>
                            <ul>
                                <li>
                                    {
                                        latestPosts && latestPosts.map((item)=>{
                                           return <Link href={`/blog/${item.slug}`} key={item.id}><a><span>{item.title}  <span className={styles.rd}>Read more</span></span> </a></Link>
                                        })
                                    }
                                    
                                 
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.serviceWidget2}>
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

BlogSingle.layout = 'Main'
export default BlogSingle


