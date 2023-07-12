import { useRef, useState, useEffect } from 'react'
import './App.css'
import { CardsContainer } from './CardsContainer/CardsContainer'
import axios from 'axios';
import { nanoid } from 'nanoid';

axios.defaults.baseURL = `http://localhost:5000`

function App(){
  //VARS
  const inputRef = useRef<HTMLInputElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const [error, setError] = useState<Error>()
  const [isLoaded, setIsLoaded] = useState(false);
  const [images, setImages] = useState([]);
  const [total, setTotal] = useState([]);
  const [totalHits, setTotalHits] = useState([]);
  const [search, setSearch] = useState("");
  //GET IMAGES
  
  useEffect(() => {
    axios.get('/api/images', {
      params: {
        search: search
      }
    })
    .then((result) => {
      setIsLoaded(true);
      setImages(result.data.hits);
      setTotal(result.data.total);
      setTotalHits(result.data.totalHits);
    })
    .catch((error) => {
      setIsLoaded(true);
      setError(error);
    });

    if(inputRef.current) {
      inputRef.current.value = search.replace('+',' ')
    }
  }, [search])

  function handleButtonClick() {
    if(inputRef.current) {
      setSearch(inputRef.current.value.replace(' ', '+'));
    }
  }

  function handleKeyDown(e: { key: string; }) {
    if(e.key=='Enter'){
      if(inputRef.current) {
        setSearch(inputRef.current.value.replace(' ', '+'));
      }
    }
  }

  // DISPLAY
  function getResult() {
    if (error) {
      return (
          <div>Error: {error.message}</div>
      )
    } else if (!isLoaded) {
      return (
          <div>Loading...</div>
      )
    } else {
      return <CardsContainer images={images}/>
    }
  }

  return (
    <>
      <h1 className="headText">Fullstack Developer Intern Coding Test</h1>
      <input className='mainInput' type="text" placeholder='Search an image...' id="search" ref={inputRef} onKeyDown={handleKeyDown} key={nanoid()}/>
      <button className='button-main' id="button-main" ref={btnRef} key={nanoid()} onClick={handleButtonClick}>Search</button>
      <div className='resultGeneral'>
          <div className="d-inline totalImages">Total images: {total}</div>
          <div className="d-inline renderedImages">Image rendered: {totalHits}</div>
      </div>
      {getResult()}
    </>
  )

}

export default App
