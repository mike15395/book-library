import axios from 'axios';
import React, { useState } from 'react'
import { Button, Input } from 'reactstrap'
import './addbook.css'

function AddBook() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [genre, setGenre] = useState("");
    const [summary, setSummary] = useState("");
     
    const addBook = (e) => {
        e.preventDefault();
    
        let formJSON = {
            title: title,
            author: author,
            published: genre,
            summary: summary
        }
        const url = "http://localhost:8000/books";
        axios.post(url, formJSON).then((result) => console.log(result));
        window.location.reload();
    }

  return (
      <div className='addbook'>
          <form>
          <h1>Add new book here</h1>
          <label>Title:</label><br/><Input value={title} onChange={(e)=>setTitle(e.target.value)}></Input>
          <label>Author:</label><br /><Input value={author} onChange={(e) => setAuthor(e.target.value)}></Input>
          <label>Published:</label><br /> <Input value={genre} onChange={(e) => setGenre(e.target.value)}></Input>
          <label>Description:</label><br /><Input value={summary} onChange={(e) => setSummary(e.target.value)}></Input><br/>
              <Button color='success' type='submit' onClick={addBook}>Add Book</Button>
              </form>
    </div>
  )
}

export default AddBook