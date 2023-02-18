import React from 'react'
import Apsuccess from '../images/approach-success.webp'
import Header from '../components/Header.js'
import Footer from './Footer'

export default function Approach() {
  return (
    <div>
      <Header/>
      <h1 id='aph1'>Your Product’s Success Matters A Lot to Us.</h1>
      <div id='api1'>
        <img src={Apsuccess} id='apimg1'/>
        <p id='app1'>To transform your idea to product in action is ofcourse our main objective. But more important than that is your product success. We are invested in your project and product success the moment you bring us on board.</p>
      </div>
      <p id='api2'>Every project brings something new and we treat is as a new assignment rather than following a standard technology implementation. We keep a tab on tech trends and we don’t use the golden hammer approach. When there is a requirement we bring a fresher, newer, economical and better approach to dealing with the same old problem so that our clients get better ROI and success with their product.</p>

      
      <div id='maingrid'>
      <h2 id='aph2'>Product Approach</h2>
        
        
        <div id='grid1'>
        <div>
             <ul id='apul1'>
                <h3 id='aph31'>ANALYSIS</h3>
             <li>Requirement Gathering</li>
             <li>Product Planning</li>
            <li> Tech Stack Assessment</li>
             <li>Resource Allocation</li>
             </ul>
             </div>
             <div>
                
             <ul id='apul2'> 
             <h3 id='aph32'>DESIGN</h3>  
            <li>Design System Application</li>
            <li> Wireframe Design</li>
             <li>Define Style Guide</li>
             <li>Illustrations & Assets Design</li>
             </ul>
             </div>
             <div>
                
                <ul id='apul3'>
                <h3 id='aph33'>DEVELOPMENT</h3>
              <li>Application Architecture</li>
             <li>Database Development</li>
              <li>API Design and Development</li>
              <li>Front-end Development</li>
              </ul>
             </div>
             <div>
                
                <ul id='apul4'>
                <h3 id='aph34'>LAUNCH</h3>
                <li>Cloud Deployment</li>
                <li>Performance Monitoring</li>
                <li>Log Management</li>
                </ul>
                </div>
             </div>
             </div>


             <div id='maingrid2'>
                <h2 id='aph22'>Remote Engineering Approach</h2>
                <div id='grid2'><div id='apul5'>
                    <h3 id='aph35'>Connect</h3>
                    <ul>
                        <li>Breif us about your requirement.</li>
                        <li>We answer your questions.</li>
                        <li>Get your quote.</li>
                        <li>A day to 2 weeks to get profiles.</li>
                    </ul>
                </div>
                <div id='apul6'>
                    <h3 id='aph36'>Select</h3>
                    <ul>
                        <li>Finalize your dedicated resource.</li>
                        <li>Onboarding</li>
                        <li>Meet your developer.</li>
                        <li>Project specific training.</li>

                    </ul>
                </div>
                <div id='apul7'>
                    <h3 id='aph37'>Kick Start</h3>
                    <ul>
                        <li>Start development.</li>
                        <li>Scale up or scale down resources.</li>
                        <li>Communication</li>
                        <li>Delivery team backed developers.</li>
                    </ul>
                </div>
                 <div id='apul8'>
                    <h3 id='aph38'> Handover</h3>
                    <ul>
                        <li>End of development cycle.</li>
                        <li>Handover files or code finalizing.</li>
                        <li>Developer exit.</li>
                    </ul>
                 </div>
                 </div>
             </div>

<Footer/>
      </div>
      
    
  )
}
