import React from 'react'
import Office from '../images/office.webp'
import Header from '../components/Header'
import Footer from './Footer'
import office from '../images/office.webp'

export default function Contactus() {
  return (
    <div>
        <Header/>
      <h1 id='ch'>More Ways To Contact Us</h1>
      <div>
        <img src={office} id='cimg'/>
        <div id='cs'>We are based out of San Diego, California but we are distributed.</div>
          <p id='cp1'>Other locations we work from are Hyderabad and Pune in India.</p>
            </div>
            <Footer/>
    </div>
  )
}
