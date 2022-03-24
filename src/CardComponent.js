import axios from 'axios';
import React from 'react'
import { Button, Card, CardBody, CardText, CardTitle } from 'reactstrap'
import './Card.css'
function CardComponent({ id,title, subtitle, author, published, description }) {
  
  const deleteBook=()=> {
    const url = `http://localhost:8000/books/${id}`
    axios.delete(url).then((res) => console.log(res)).catch((err) => console.log(err));
    window.location.reload();
  }

  const updateBook = () => {
  //   const obj = {
  //     title: "this is edited title",
  //     author: "edited author"
      
  //  }

    const url = `http://localhost:8000/books/${id}`;

    axios.put(url, {  title: "this is edited title",
      author: "edited author"  }).then((res) => console.log(res)).catch((err) => console.log(err));
    window.location.reload();
  }

  return (
     <div className='card'>
        <Card> 
        <CardBody>
          <CardTitle><h3>{title}</h3></CardTitle>
          <small>{subtitle}</small>
          <p><strong>Published:</strong> {published}</p>
          <CardText><p><strong>Author:</strong></p> {author}</CardText>
          <CardText><p><strong>Description:</strong></p>{description}</CardText>
          <Button color="primary"onClick={updateBook}>Edit</Button>
          <Button color="danger" onClick={deleteBook}>Delete</Button>
        </CardBody>
        </Card>         
  </div>
  )
}

export default CardComponent;