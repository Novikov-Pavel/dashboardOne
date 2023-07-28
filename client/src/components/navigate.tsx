import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import faCompass from '../assets/faCompass.svg'
import faStar from '../assets/faStar.svg'
import faFB from '../assets/faFB.svg'
import faTrendingUp from '../assets/faTrendingUp.svg'
import faSocialPublicon from '../assets/faSocialPublicon.svg'
import faSocialLocationCity from '../assets/faSocialLocationCity.svg'
import Avatar1 from '../assets/Avatar1.png'
import Avatar2 from '../assets/Avatar2.png'
import Avatar3 from '../assets/Avatar3.png'
import Avatar4 from '../assets/Avatar4.png'
import faAddCircle from '../assets/faAddCircle.svg'
import '../SASS/navigate.scss'

function Navigate() {
  return (
    <div className='navigate'>
      <div className='navigate-top'>
        <div className='navigate-faCompass'>
          <img src={faCompass} alt='faCompass' />
        </div>
        <div className='navigate-faCompass'>
          <img src={faStar} alt='faStar' />
        </div>
        <div className='navigate-faCompass fa-layers'>
          <img src={faFB} alt='faFB' />
          <span className="fa-layers-counter"
            style={{
              backgroundColor: '#FF6633',
              borderRadius: '50%',
              width: 50,
              height: 50
            }}></span>
        </div>
        <div className='navigate-faCompass'>
          <img src={faTrendingUp} alt='faTrendingUp' />
        </div>
        <div className='navigate-faCompass'>
          <img src={faSocialPublicon} alt='faSocialPublicon' />
        </div>
        <div className='navigate-faCompass'>
          <img src={faSocialLocationCity} alt='faSocialLocationCity' />
        </div>
      </div>

      <div className='navigate-bottom'>
        <div className='navigate-faCompass fa-layers'>
          <img src={Avatar1} alt='Avatar1' />
          <span className="fa-layers-counter"
            style={{
              backgroundColor: '#FF6633',
              borderRadius: '50%',
              width: 50,
              height: 50
            }}></span>
        </div>
        <div className='navigate-faCompass'>
          <img src={Avatar2} alt='Avatar2' />
        </div>
        <div className='navigate-faCompass'>
          <img src={Avatar3} alt='Avatar3' />
        </div>
        <div className='navigate-faCompass'>
          <img src={Avatar4} alt='Avatar4' />
        </div>
        <div className='navigate-faCompass'>
          <img src={faAddCircle} alt='faAddCircle' />
        </div>
      </div>
    </div>
  )
}

export default Navigate