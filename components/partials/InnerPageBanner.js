import React from 'react'

const InnerPageBanner = ({style, pageTitle, bannerImage}) => {
  return (
    <div className={style.innerPageBanner} style={{backgroundImage:`url(${bannerImage})`}}>
          <h1>{pageTitle}</h1>
          <div className={style.overlayBg}/>
      </div>
  )
}

export default InnerPageBanner