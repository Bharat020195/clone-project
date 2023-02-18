import React from 'react'
import Header from '../components/Header'
import Footer from './Footer'
export default function Letstalk() {
  return (
    <div id='body'>
        <Header/>
        <h3 id='lh'>We'd love to hear from you</h3>
      <form id='form'> 
         Full name*:<br/>
        <input type='Text' id='inp1' ></input><br/>
        Work Email*:<br/>
        <input type='email' id='inp2'></input><br/>
        Tell us a little bit about your project:<br/>
        <input type='text' id='inp3'></input><br/>
        <p id='lp'>By submitting this form, I hereby provide my consent to Websbite to contact me based on the information provided above.</p>

      </form>
      <Footer/>
    </div>
  )
}
