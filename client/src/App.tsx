import React, { useState } from 'react';
import Header from './components/header'
import Sidebar from './components/sidebar';
import Navigate from './components/navigate';
import Categories from './components/categories';
import Gallary from './components/gallary';
import './SASS/App.scss'

let defaultValue = {
  img: [],
  setImg: (a: []): void => {
    throw new Error('error');
  },
  albumId: '',
  setAlbumId: (c: string): void => {
    throw new Error('error');
  },
  flexGrid: true,
  setFlexGrid: (c: boolean): void => {
    throw new Error('error');
  },
  fetching: (value: number): any => {
    throw new Error('error');
  },
  searchGallery: '',
  setSearchGallary: (c: string): void => {
    throw new Error('error');
  },
}

export let global = React.createContext(defaultValue);

function App() {

  const [img, setImg] = useState<[]>([])
  const [albumId, setAlbumId] = useState('')
  const [flexGrid, setFlexGrid] = React.useState(true)
  const [searchGallery, setSearchGallary] = React.useState('')

  let fetching = async (value: number) => {
    try {
      let res = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId || '1'}/photos?_limit=${value}`)
      if (res.ok) {
        let data = await res.json()
        setImg(data)
      }
    } catch (error) {
      console.error(error);
    }

  }
  return (
    <global.Provider value={{
      img,
      setImg,
      albumId,
      setAlbumId,
      flexGrid,
      setFlexGrid,
      fetching,
      searchGallery, 
      setSearchGallary
    }}>
      <div className="App">
        <Header />
        <div className='content'>
          <Navigate />
          <Sidebar />
          <div className="content-mainContent">
            <Categories />
            <Gallary />
          </div>
        </div>
      </div>
    </global.Provider>
  );
}

export default App;
