import React from 'react'
import Footer from '../shared/Footer'
import Header from '../shared/Header'
import "./RootLayout.css"

const RootLayout = ({ children }) => {
  return (
    <div className='layout-container'>
      <Header />
      <main className='main-container'>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default RootLayout
