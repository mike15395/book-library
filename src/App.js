/* eslint-disable react-hooks/exhaustive-deps */
import AddBook from './AddBook';
import './App.css';
import List from './List';
import Navbar from './Navbar';
import axios from 'axios'
import { useEffect, useState } from 'react';

function App() {

  const [state, setData] = useState([]);


  useEffect(() =>
  {
    getbooks();
    //console.log(state.data);
  }, [])

  const getbooks = async () => {
    const url = "http://localhost:8000/books";

    await axios.get(url).then((result) => setData(result));
  }
  return (
    <div className='App'>
      <Navbar />
      
      <div className='app-body'>
        <div className='app-list'> <List state={state}/></div>
       <div className='app-add-book'> <AddBook/></div>
      </div>
    </div>
  );
}

export default App;
