import React, { Fragment } from 'react'
import InnerPageBanner from '../../../components/partials/InnerPageBanner'
import styles from '../../../styles/InnerPage.module.scss'
import Link from 'next/link';
import { FiChevronRight } from "react-icons/fi";
import { MdOutlineDateRange } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import parse from 'html-react-parser';
export async function getServerSideProps( { params }) {
    const { slug } = params;
   
    // Fetch data from an external API
    const res = await fetch(`https://api.yellowoods.com/api/post/${slug}`);
    const resLatest = await fetch(`https://api.yellowoods.com/api/posts/latest`);
    const resp = await res.json();
    const respLatest = await resLatest.json();

    if (!resp.status || !respLatest.status) {
        return {
          notFound: true,
        };
      }

    const data = resp.post;
    const latestPosts = respLatest.posts;
    console.log(latestPosts);
    // Pass data to the page component as props
    return {
      props: {
        data,
        latestPosts
      },
    };
  }

const BlogSingle = ({data, latestPosts}) => {
   let bannerImage = '/images/innerBnr.jpg';
   return (
      <Fragment>
         {/* <InnerPageBanner style={styles} pageTitle={data.title} bannerImage={bannerImage} /> */}
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
                                           return <Link href={`/blog/${item.slug}`} key={item.id}><a><span>{item.title}  <span className={styles.rd}>Read more</span></span> <FiChevronRight /></a></Link>
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


