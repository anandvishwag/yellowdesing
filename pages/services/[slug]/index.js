import React, { Fragment, useEffect, useState } from 'react'
import InnerPageBanner from '../../../components/partials/InnerPageBanner'
import styles from '../../../styles/InnerPage.module.scss'
import { FiChevronRight } from "react-icons/fi";
import Accordion from 'react-bootstrap/Accordion';
import Link from 'next/link'
import parse from 'html-react-parser';
import Head from 'next/head';
import { API_URL, APP_URL } from '../../../utils/constant';
export async function getServerSideProps({ params }) {
    const { slug } = params;
  
    const res = await fetch(`${API_URL}/api/services/${slug}`);
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
const SingleService = ({data}) => {
    let bannerImage = '/images/innerBnr.jpg';

  return (
   <Fragment>
    <Head>
          <title>Services :: {data.service.meta_title}</title>
          <meta name="title" content={data.service.meta_title}/>
          <meta name="description" content={data.service.meta_description}/>
          <meta name="keywords" content={data.service.meta_keywords}/>

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
          <link rel="canonical" href={`${APP_URL}/services/${data.service.slug}`} />
        </Head>
      <InnerPageBanner pageTitle={data.service.title} bannerImage={bannerImage} style={styles}/>
      <div className={styles.innerPageWrapper}>
        <div className='container'>
            <div className='row'>
                <div className='col-md-9'>
                    <div className={styles.serviceFeatured}>
                        <img src={data.service.thumbnail} alt='featured image'/>
                    </div>
                    <div className={styles.serviceDetails}>
                      
                         {parse(data.service.description)}
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
            <div className={styles.ourProductS}>
                <h1>Our Project</h1>
                <div className='row'>
                    <div className='col-md-4'>
                        <img src='/images/services/service-1.png' alt='projects'/>
                    </div>
                    <div className='col-md-4'>
                        <img src='/images/services/service-2.png' alt='projects'/>
                    </div>
                    <div className='col-md-4'>
                        <img src='/images/services/service-3.png' alt='projects'/>
                    </div>
                </div>
            </div>
            {
                data.service && data.service.faqs.length > 0 &&   <div className={styles.faqs}>
                <h1 className={styles.faqTitle}>Faqs</h1>
                 <Accordion defaultActiveKey="0">
                    {
                      data.service.faqs.map((item, index)=>{
                            return  <Accordion.Item eventKey={`${index}`}>
                            <Accordion.Header>{item.ques}</Accordion.Header>
                            <Accordion.Body>
                            {parse(item.ans)}
                            </Accordion.Body>
                          </Accordion.Item>
                        })
                    }
              </Accordion>
            </div>
            }
          
        </div>
      </div>
   </Fragment>
  )
}
SingleService.layout = 'Main'
export default SingleService;