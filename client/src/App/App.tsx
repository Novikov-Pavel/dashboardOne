import React, { useState } from 'react';
import Header from '../components/header/header'
import Sidebar from '../components/sidebar/sidebar';
import Navigate from '../components/navigate/navigate';
import Categories from '../components/categories';
import Gallary from '../components/gallary/gallary';
import { Value, imgI } from './types';
import '../SASS/App.scss'

let defaultValue: Value = {
  img: [],
  setImg: (a) => {
    throw new Error('error');
  },
  albumId: '',
  setAlbumId: (c) => {
    throw new Error('error');
  },
  flexGrid: true,
  setFlexGrid: (c) => {
    throw new Error('error');
  },
  fetching: (value) => {
    throw new Error('error');
  },
  searchGallery: '',
  setSearchGallary: (c) => {
    throw new Error('error');
  },
  li: 0,
  setLi: (c) => {
    throw new Error('error');
  },
}

export let global = React.createContext(defaultValue);

function App() {

  const [li, setLi] = useState(0)
  const [img, setImg] = useState<imgI[]>([])
  const [albumId, setAlbumId] = useState<string>('')
  const [flexGrid, setFlexGrid] = React.useState<boolean>(true)
  const [searchGallery, setSearchGallary] = React.useState<string>('')

  let fetching = async (value: number) => {
    try {
      let res = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId || '1'}/photos?_limit=${value}`)
      if (res.ok) {
        let data = await res.json()
        setImg(data)
      }
    } catch (e) {
      console.error(e);
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
      setSearchGallary,
      li,
      setLi
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
