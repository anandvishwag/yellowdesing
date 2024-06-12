import React from 'react'
import Header from '../partials/Header'
import Footer from '../partials/Footer'

const MainLayout = ({children}) => {

  return (
    <>
    <Header/>
    {children || ''}
    <Footer/>
    </>
  )
}

export default MainLayout