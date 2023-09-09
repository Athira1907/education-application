import React from 'react'
import  '../Components/Mainpage.css' 
import { Button } from 'react-bootstrap'

function Mainpage() {
  return (
    <>
    <div className="edu-page">
    <div className="content">

</div>

<div className="paragraph">
    <h3>WELCOME TO ARIVU</h3>
   
    <p>
    
      Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
     Ad qui ea necessitatibus at? Nesciunt doloribus laborum, <br />
    </p>
    <div className="button">
    <Button className='btn' id='btn-1' style={{textTransform:'uppercase'}}>get started now</Button>
    <Button className='btn' id='btn-2' style={{textTransform:'uppercase'}}>view courses</Button>
    </div>
   
</div>
    </div>
   
   
    </>
  )
}

export default Mainpage