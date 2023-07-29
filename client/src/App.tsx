import React from 'react';
import Header from './components/header'
import Sidebar from './components/sidebar';
import Navigate from './components/navigate';
import './SASS/App.scss'

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
          as
        </div>
      </div>

    </div>
  );
}

export default App;
