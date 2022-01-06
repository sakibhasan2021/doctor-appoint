
import  React,{ useState,useEffect} from 'react';
import { useParams } from 'react-router';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import data from '../../Data';
import './MoreService.css';
// import Data from './../Data';
const MoreService = () => {
    
    const {id}=useParams();
    
    const [appoint,setAppoint]=useState([]);
     useEffect(()=>{
   const appointInfo=data.find(appoint=>appoint.id===parseInt(id))
    setAppoint(appointInfo);

    },[]);
    return (
        <div>
            <div className="appoint-container">
            <Card className="text-center">
  <Card.Header className="text-center">{appoint.name}</Card.Header>
  <Card.Body>
    <Card.Title>{appoint.name}</Card.Title>
     <Card.Img variant="top" src={appoint.img} />
    <Card.Text>
     {appoint.email}
    </Card.Text>
    
  </Card.Body>
  <Card.Footer className="text-muted mt-5">special at: {appoint.specialist}</Card.Footer>
  <Link to='/service'>  <Button variant="success" className="mt-5 mb-3">back Service</Button></Link>
   <Link to='/login'>  <Button variant="success" className="mt-3 mb-3">logIn</Button></Link>
  
</Card>
   
          
           
        </div>
        </div>
    );
};

export default MoreService;