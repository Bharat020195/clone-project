import { Link } from 'gatsby'
import React from 'react'
import Fimg from '../images/download.png'

export default function Footer() {
  return (
    <div id='F'>
        <div>
     <img src={Fimg} id='fimg1'/>
     <Link to='Approach' id='fi1'>Approach</Link>
     <Link to='Edge' id='fi2'>Edge</Link>
     <Link to='About' id='fi3'>About</Link>
     <Link to='Contactus' id='fi4'>Contact</Link>
     <div id='hb'>© Websbite LLC. 2022</div>
     </div>
      
    </div>
  )
}
