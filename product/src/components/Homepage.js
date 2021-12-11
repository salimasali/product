
import React,{useState,useEffect} from 'react'
import {Row,Col} from 'react-bootstrap'
import Producttdetails from './Producttdetails';

function Homepage() {

    const[books,setBooks]=useState([]);

    useEffect(() => {
        const fetchData = async()=> {
            await fetch('/pro.json')
            .then(res => res.json())
            .then(data =>{
                setBooks(data.products)
            })
        }
        fetchData();
        
        
    }, [])
    console.log("data is ",books);
    return (
        <Row>
        
            {books? books.map(item=> (
                <Col sm={12} md={8} lg={6} xl={3}>
                <Producttdetails data={item} />

            </Col>
        )): "error"
        }
    </Row>
    )
}

export default Homepage
