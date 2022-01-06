import React, { useState, useEffect } from 'react';
import info from '../../Data';
import { Container, Row } from 'react-bootstrap';
import OneService from './../../OneService/OneService';


const Service = () => {
    const [services,setService]=useState(info);
    useEffect(()=>{
            fetch(info)
            .then(res=>res.json())
            .then(data=>setService(data));
    },[])
    
    // console.log(info)
    return (
        <div>
             <Container className="courses-container">
         
                 <Row xs={1} md={3} className="g-4">
            
                       
                       {services.map((service)=>{
                                return(
                                   <OneService key={service.id} service={service}/>
                               )
                       })}
           
    
    
                  </Row>

              
  
              </Container>


        </div>
    );
};

export default Service;