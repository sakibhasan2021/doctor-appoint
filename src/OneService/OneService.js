import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const OneService = (props) => {
    const {id,img,name,specialist}=props.service;
    console.log(name)
    return (
        <div>
            <Col className="mt-5  ">
            
            <Card className="single-course-container">
            
    <Card.Img variant="top" src={img} />
    
    <Card.Body>
      <Card.Title>  <h3> {name} </h3></Card.Title>
      <Card.Text>
        {specialist}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"> {specialist} </small>
    </Card.Footer>
    <Link to={`/moreservice/${id}`}>  <Button variant="info" className="my-3 mx-5">Appoint?</Button></Link>
   
  </Card>
        </Col>
        </div> 
    );
};

export default OneService;


//  {/* <Col className="mt-5  ">
            
//             <Card className="single-course-container">
            
//     <Card.Img variant="top" src={img} />
    
//     <Card.Body>
//       <Card.Title>  <h3> {name} </h3></Card.Title>
//       <Card.Text>
//         {name}
//       </Card.Text>
//     </Card.Body>
//     <Card.Footer>
//       <small className="text-muted">{name}% Offer Avaiable</small>
//     </Card.Footer>
   
//   </Card>
//         </Col> */}
//     );