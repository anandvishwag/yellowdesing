import React, {useState, useEffect} from 'react'
import styles from '../../styles/Header.module.scss'
import Link from 'next/link'
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
const Header = () => {
  const [sticky, setSticky] = useState("");
  const [showMenu, setToggleMenu] = useState(false);
 // on render, set listener
 useEffect(() => {
  window.addEventListener("scroll", isSticky);
  return () => {
      window.removeEventListener("scroll", isSticky);
  };
}, []);

const isSticky = () => {
  const scrollTop = window.scrollY;
  const stickyClass = scrollTop >= 150;
  setSticky(stickyClass);
};
  return (
    <header className={`${styles.headerWrapper} ${sticky ? styles.headerSticky : ''}`}>
      <div className={`container ${styles.headerContainer}`}>
        <div className={styles.brand}>
          <Link href={'/'}>
            <a>
               <img src='/images/logo.png' alt='brand'/>
            </a>
            </Link>
        </div>
        <div className={styles.headerRight}>
           <div className={styles.headerTop}>
              <div className={styles.whatsapp}>
             <FaWhatsapp color='#23AC44' size={25}/>  <span>+91 - 9696475344</span>
              </div>
              <div className={styles.followUs}>
                  <span>Follow Us</span>
                  <ul>
                      <li><Link href={'/'}><a><FaFacebookF  color='#7A5E27' size={20}/></a></Link></li>
                      <li><Link href={'/'}><a><FaInstagram  color='#7A5E27' size={20}/></a></Link></li>
                  </ul>
              </div>
           </div>
           <div className={`${styles.navigation} ${showMenu ? `${styles.showMenu}` : ``}`}>
             <ul>
                <li><Link href={'/'}><a>Home</a></Link></li>
                <li><Link href={'/about'}><a>About</a></Link></li>
                <li><Link href={'/blog'}><a>Blog</a></Link></li>
                <li>
                  <Link href={'/services'}><a>Services</a></Link>
                    <ul className={styles.dropdownMenu}>
                       <li><Link href={'/services/planing'}><a>Planing</a></Link></li>
                       <li><Link href={'/services/2d-design'}><a>2D Design</a></Link></li>
                       <li><Link href={'/services/3d-elevation'}><a>3D Elevation</a></Link></li>
                       <li><Link href={'/services/interior-designing'}><a>Interior Designing</a></Link></li>
                       <li><Link href={'/services/vaastu-consultation'}><a>Vaastu Consultation</a></Link></li>
                       <li><Link href={'/services/structural-designing'}><a>Structural Designing</a></Link></li>
                       <li><Link href={'/services/waterproofing'}><a>Waterproofing</a></Link></li>
                       <li><Link href={'/services/material-provider'}><a>Material Provider</a></Link></li>
                    </ul>
                  </li>
                {/* <li><Link href={'/building-material-enquiry-form'}><a>Enquiry</a></Link></li> */}
                <li><Link href={'/contact-us'}><a>Contact</a></Link></li>
             </ul>

            
           </div>
           <button className={`${styles.toggleButton} ${showMenu ? `${styles.showMenuButton}` : ``}`} onClick={()=>setToggleMenu(!showMenu)}>
                 <span></span>
                 <span></span>
                 <span></span>
             </button>
        </div>
      </div>
    </header>
  )
}

export default Header