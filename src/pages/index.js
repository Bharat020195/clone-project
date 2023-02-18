import React from 'react'
import Header from '../components/Header.js'
import Footer from '../pages/Footer.js'
import Homeimg from '../images/home-scene.webp'
import Homestage from '../images/home-stage.webp'
import Homestart from '../images/home-start-converse.webp'
import '../pages/Style.css'

export default function index() {
  return (
    <div>
      <Header/>
      <div id='Hi1'>
       <h1 id='h1'>Digital Product Development & Remote Engineers For Your Big Ideas</h1>
        <img src={Homeimg} id='Himg1'/>
      </div>
      <p id='hp1'>You have solidified your idea. Now we can help you bring your product to market faster, to let you grab your bite.</p>
      <div id='Hi2'>
      <img src={Homestage} alt='No Image' id='Himg2'></img>
        <h2 id='h21'>Bring us in at any stage of your product.</h2>

      </div>
      <p id='hp2'>Wether you need us to build your product from scratch, you need extra engineers to work on your product to get there faster or need help to keep your product up and running, Websbite can help you at any stage of your product.</p>


      <div id='Hi3'>
        <h2 id='h22'>Let’s start with a conversation.</h2>
        <img src={Homestart} id='Himg3'></img>
      </div>
      <p id='hp3'>You have been making descisions and want to deliver products to the market faster. Every decision making process is overwhelming and leads to more questions. Be it product or adding more engineers.</p>
      <p id='hp4'>We understand the challenges when dealing with product and engineering and we have come across many questions ourselves in the past and found solutions while working on various projects.</p>
      <p id='hp5'>With that understanding as the foundation, we try to answer first as many questions you may have so that you feel confident about taking the next step. Any question big or small is important and we are ready to help you answer. </p>

      <Footer/>
      
    </div>
  )
}
