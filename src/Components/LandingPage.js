import React from 'react'
import './Landpage.css';
import Top from './Top'
import Mainpage from './Mainpage'
import Courses from './Courses';
import Questions from './Questions'
function LandingPage() {
  return (
    <>
    <div className="main">
      <div>
      <h2 className='title'>Arivu</h2>
<p className='sub-title'>Online Education & learning</p>
      </div>
   

<div className="icons">
<i className="fa-brands fa-facebook icon"></i>
<i className="fa-brands fa-youtube  icon"></i>
<i className="fa-brands fa-square-instagram  icon"></i>
<i className="fa-brands fa-linkedin  icon"></i>
</div>
    </div>

    <Top/>
<Mainpage/>
<Courses/>
<Questions/>
    </>
  )
}

export default LandingPage