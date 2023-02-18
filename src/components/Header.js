import { Link } from 'gatsby'
import React from 'react'
import Webskite from '../images/Websbite logo.png'


export default function header() {
  return (
    <div id='HH'>
     <Link to='index'><img src={Webskite} id='HHimg'/></Link>
     <Link to='Approach' id='Hap'>Approach</Link>
     <Link to='Edge' id='Hed'>Edge</Link>
     <Link to='About' id='Hab'>About</Link>
     <Link to='Letstalk'><button id='Hle'>Lets Talk</button></Link>
    </div>
  )
}
