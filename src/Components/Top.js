import React from 'react'
import { Link } from 'react-router-dom'
import '../Components/Top.css';
import { Button,Navbar,Container,Nav } from 'react-bootstrap';

function Top() {
  return (
    <>
    <div className="Container">
    <div className="top">
        <header>
            <nav>
                <ul className='items'>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/About'}>About</Link></li>
                    <li><Link to={'/Courses'}>Courses</Link></li>
                    <li><Link to={'/Trainings'}>Trainings</Link></li>
                    <li><Link to={'/Contact'}>Contact</Link></li>
                  
                </ul>
               
                
            </nav>
            <Button className='button info'>Get Certificate</Button>
        </header>
    </div>
    <button className='toggle'>

      <i className='fa fa-times'></i>:
<i className='fa fa-bars'></i> 
    </button>
    </div>
   
    {/* <Navbar>
      hemo
      nfggk
    <ul className='items'>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/About'}>About</Link></li>
                    <li><Link to={'/Courses'}>Courses</Link></li>
                    <li><Link to={'/Trainings'}>Trainings</Link></li>
                    <li><Link to={'/Contact'}>Contact</Link></li>
                  
                </ul>
    </Navbar> */}
    {/* <h2 className='text-center text-primary mt-5'>kkdhfdhjdhfhjekehff</h2> */}
    

    {/* <Navbar bg="light" data-bs-theme="light" className='ms-5 me-5'>
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Button className='button info'>Get Certificate</Button>
        </Container>
      
      </Navbar> */}



    </>
  )
}

export default Top