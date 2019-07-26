import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import CreateCourtForm from './CreateCourtForm'
import {Carousel, Nav, Navbar, Button} from 'react-bootstrap'
export default class AllCourtsPage extends Component {

    state = {
        courts: [],
        newCourt : {
            gymName: '',
            address: '',
            numberOfPlayers: '',
            entryPrice: ''
        }
    }
    componentDidMount() {
        this.getAllCourts()
    }
    getAllCourts = () => {
        axios.get('/api/courts')
            .then((res) => {
                this.setState({courts: res.data})
            })
    }
   
    render() {

        let courtsList = this.state.courts.map((court) => {
            return (
                <div>
                <Link 
                id='text'
                key={court._id}
                to={`/courts/${court._id}`}
                >
                {court.gymName}
                </Link>

            
                </div>

            )
        })
        return (
            <div>
               <Navbar style={{color: "#FA8320"}} variant="dark">
              <Navbar.Brand style={{color: "#FA8320"}} href="#home">I Got Next</Navbar.Brand>
               <Nav className="mr-auto">
               <Nav.Link style={{color: "#FA8320"}} href="/">Home</Nav.Link>
               <Nav.Link style={{color: "#FA8320"}} href="/courts">Courts</Nav.Link>
            </Nav>
          </Navbar>

            <br></br> 
            <br></br>
       
                <div className='wrapper'>
                    <div className='jumping-ball'>🏀 </div>
                    <div className='jumping-ball'>🏀 </div>
                    <div className='jumping-ball'>🏀 </div>
                    <div className='jumping-ball'>🏀 </div>
                    <div className='jumping-ball'>🏀 </div>
                    <div className='jumping-ball'>🏀 </div>
                    <div className='jumping-ball'>🏀 </div>
                    <div className='jumping-ball'>🏀 </div>
                    <div className='jumping-ball'>🏀 </div>
                    <hr></hr>
                </div>
                <h1>Open Courts/Parks:</h1>
             
                <div className='link'>
                
                <Link to={`/courts/create`} id='text'><Button style={{background: '#FA8320', borderColor: '#FA8320'}} variant="success">Create A Court</Button></Link>
                </div>
                <h2>{courtsList}</h2>

 

                
  <Carousel>
  <Carousel.Item>
    <img
      className="carousel"
      src="http://sfwallpaper.com/images/basketball-court-hd-wallpapers-1.jpg"
      alt="First slide"
      height="600"
     width="1500"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="carousel"
      src="https://www.downtownmagazinenyc.com/wp-content/uploads/2018/03/SA13-Basketball_revG.jpg"
      alt="Third slide"
      height="600"
     width="1500"
    />

    <Carousel.Caption>
    
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="carousel"
      src="https://www.faburous.com/wp-content/uploads/2015/05/Small-basement-court.jpg"
      alt="Third slide"
      height="600"
     width="1500"
    />

    <Carousel.Caption>
    
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="carousel"
      src="https://static2.mansionglobal.com/production/media/article-images/fd9fbab54ecce5120170b249ef89791d/large_Sky_Basketball_Court.jpg?width=620&height=413"
      alt="First slide"
      height="600"
      width="1500"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

            </div>
        )
    }
}

