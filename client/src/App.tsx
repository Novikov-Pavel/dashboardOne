import React from 'react';
import Header from './components/header'
import Sidebar from './components/sidebar';
import Navigate from './components/navigate';
import './SASS/App.scss'
import Categories from './components/categories';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='content'>
        <Navigate />
        <Sidebar />
        <div className="content-mainContent">
          {/* Категории */}
          {/* Галерея */}
          <Categories />
        </div>
      </div>

    </div>
  );
}

export default App;
