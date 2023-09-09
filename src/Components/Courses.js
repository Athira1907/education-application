import React from 'react'
import { Card } from 'react-bootstrap'
import '../Components/Courses.css';
function Courses() {
  return (
    <>
    <div className="container">
    <h3>Benefits About Online <br /> Learning Expertise</h3>
    <div className="content2">
    <div className="image">
    {/* <img src="https://i.pinimg.com/originals/65/ee/35/65ee350c7875c9b422325141ac3f262b.gif" alt="" /> */}
   <img src="https://verificationexcellence.in/wp-content/uploads/2018/06/online-training_Institute.gif" alt="" />
   {/* <img src="https://cdn.dribbble.com/users/1681709/screenshots/4735856/gif.gif" alt="" /> */}
   {/* <img src="https://visme.co/blog/wp-content/uploads/powerpoint-animation-how-to-add-animation-to-powerpoint-1200px.gif" alt="" /> */}
    </div>
    <div className="cards">
      <div className="card">
        <div className="heading">
        <i className='fa-solid fa-book-open'></i><h4>Online Courses</h4> 
        </div>
     
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
 Repudiandae, accusantium! <br /> Nulla accusamus, laboriosam quos, a similique ullam vel exercitationem <br />
 </p>
      </div>

      <div className="card">
      <div className="heading">
      <i class="fa-solid fa-graduation-cap"></i> <h4>Earn A Certificates</h4> 
        </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
 Repudiandae, accusantium! <br /> Nulla accusamus, laboriosam quos, a similique ullam vel exercitationem <br />
</p>
      </div>

      <div className="card">
      <div className="heading">
      <i class="fa-solid fa-chalkboard-user"></i><h4>Learn with Expert</h4>
        </div>
     
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
 Repudiandae, accusantium! <br /> Nulla accusamus, laboriosam quos, a similique ullam vel exercitationem <br />
</p>
      </div>
    </div>
    </div>
    </div>
   
    {/* 3 cards */}
    {/* <Card className='mt-4'>
      <Card.Header>Quote</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.{' '}
          </p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card> */}
    <div>
      <h3>OUR COURSES</h3>
      <h2 style={{textAlign:'center'}}>Explore Our Popular Online Courses</h2>
      <div className="row">
        <div className="card-1">
<p style={{textAlign:'center'}}>
  <img src="https://icons8.com/icon/qrfC3SIRlxvC/computer-science" alt="" />

  <h3>UI/UX DESIGN <br />Courses</h3>
  <a href="">25 Courses</a>
</p>
        </div>

        <div className="card-1">
<p style={{textAlign:'center'}}>
<i className="fa-solid fa-palette"></i>
  <h3>COMPUTER SCIENCE <br />Courses</h3>
  <a href="">25 Courses</a>
</p>
        </div>

        <div className="card-1">
        <p style={{textAlign:'center'}}>
<i className="fa-solid fa-palette"></i>
  <h3>WEB DEVELOPMENT <br />Courses</h3>
  <a href="">20 Courses</a>
</p>
        </div>

        <div className="card-1">
        <p style={{textAlign:'center'}}>
<i className="fa-solid fa-palette"></i>
  <h3>COMMERCE <br />Courses</h3>
  <a href="">35 Courses</a>
</p>
        </div>

        <div className="card-1">
        <p style={{textAlign:'center'}}>
<i className="fa-solid fa-palette"></i>
  <h3>HUMANITIES <br />Courses</h3>
  <a href="">21 Courses</a>
</p>
        </div>

        <div className="card-1">
        <p style={{textAlign:'center'}}>
<i className="fa-solid fa-palette"></i>
  <h3>MARKETING <br />Courses</h3>
  <a href="">10 Courses</a>
</p>
        </div>

        <div className="card-1">
        <p style={{textAlign:'center'}}>
<i className="fa-solid fa-palette"></i>
  <h3>GRAPHIC  DESIGN <br />Courses</h3>
  <a href="">12 Courses</a>
</p>
        </div>

        <div className="card-1">
        <p style={{textAlign:'center'}}>
<i className="fa-solid fa-palette"></i>
  <h3>VIDEO EDITING<br />Courses</h3>
  <a href="">5 Courses</a>
</p>
       </div>

      <div className="card-1">
      <p style={{textAlign:'center'}}>
<i className="fa-solid fa-palette"></i>
  <h3>ART & DESIGN <br />Courses</h3>
  <a href="">19 Courses</a>
</p>
      </div>

      <div className="card-1">
      <p style={{textAlign:'center'}}>
<i className="fa-solid fa-palette"></i>
  <h3>BUSINESS ADMINISTRATION <br />Courses</h3>
  <a href="">15 Courses</a>
</p>
      </div>


      </div>
    </div>
    </>
  )
}

export default Courses