import React from 'react'
import Header from '../partials/Header'
import Footer from '../partials/Footer'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const MainLayout = ({children}) => {

  return (
    <>
    <ToastContainer />
    <Header/>
    {children || ''}
    <Footer/>
    </>
  )
}

export default MainLayout