import React from 'react'
import Profile from '../images/profile.webp'
import Header from '../components/Header'
import Footer from './Footer'



export default function About() {
  return (
    <div>
        <Header/>
      <h1 id='Abh'>Web's bite</h1>
     <div id='Abm'> <img src={Profile} id='Abimg'/>
      <p id='Ap'>Ramesh Seelamsetty has worked building digital products for over 15 years, but his last stint as a founder behind products like AdvisorsApp and YourAdvisor brought him to work towards helping businesses aquire leads and prospetcs. Gaining that insight into the ever changing ecosystem of online lead and prospect generation, Ramesh knew he could help online businesses achieve more by building online products the right way so as to grab a bite of the world wide web.</p>
      </div>
      <div id='Abp'><p>Ramesh having helped others finding developer resources in India realized the challenges of find a developer resource and more so finidng one who fits right with your team with the right experience, on time. With the understanding of the cultural, timezone , language and many other differences, he went on to solve this problem by building a template which priotizes communication, adaptiveness and quality solutions for our clients. .</p>
      
      <p>Ramesh spends a significant amout to time exploring newest trends in technoloy to deliver modern solutions and reducing cost for our clients.</p>
      <p>When you partner with us at Websbite, we bring all these elements in our project to deliver a cost effective quality technology solution and great client experience.</p>
      </div>
      
      <Footer/>
    </div>
  )
}
