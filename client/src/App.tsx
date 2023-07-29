import React, { useState } from 'react';
import Header from './components/header'
import Sidebar from './components/sidebar';
import Navigate from './components/navigate';
import Categories from './components/categories';
import Gallary from './components/gallary';
import './SASS/App.scss'

let defaultValue = {
  img: [],
  setImg: (a:[]): void => {
    throw new Error('error');
  },
  albumId: '1',
  setAlbumId: (c:string): void => {
    throw new Error('error');
  },

}

export let global = React.createContext(defaultValue);

function App() {

  const [img, setImg] = useState<[]>([])
  const [albumId, setAlbumId] = useState('')

  return (
    <global.Provider value={{
      img,
      setImg,
      albumId,
      setAlbumId,
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
