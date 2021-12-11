import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import './Productdetails.css'



function Producttdetails({data}) {
    
    return (

        
     
        <Link to={`pro/${data.id}`}>
            <Card className="abcc my-3 p-3">
                <Card.Img src={data.img} className="pic" variant="top" />
                <Card.Body>
                    <Card.Title as="div">
                        <h4>{data.name}</h4>
                    </Card.Title>
                    <Card.Text as="div">
                        <p><strong>Author:</strong> {data.author} </p>
                    </Card.Text>
                    <Card.Text as="div">
                        <p><strong>Price:</strong> {data.price} </p>
                    </Card.Text>
                    
                    <Button variant="info">Add to wishlist</Button><br/><br/>
                    
                </Card.Body>
            </Card>
            </Link>
            
        
    )
}

       

export default Producttdetails
