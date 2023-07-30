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
import '../SASS/navigate/navigate.scss'

function Navigate() {

  let navTop = [faCompass, faStar, faFB, faTrendingUp, faSocialPublicon, faSocialLocationCity]
  let navBottom = [Avatar1, Avatar2, Avatar3, Avatar4, faAddCircle]

  return (
    <div className='navigate'>
      <div className='navigate-top'>

        {navTop.map((e, i) => (
          <div className={navTop[2] === e ? 'fa-layers navigate-bg' : 'navigate-bg'}>
            <img src={e} alt="" key={e} />
            {navTop[2] === e && <span className="fa-layers-counter"></span>}
          </div>
        ))}
      </div>

      <div className='navigate-bottom'>
        {navBottom.map((e, i) => (
          <div className={navBottom[0] === e ? 'fa-layers navigate-bg' : 'navigate-bg'}>
            <img src={e} alt='Avatars' key={e + i} />
            {navBottom[0] === e && <span className="fa-layers-counter"></span>}
          </div>
        ))}
      </div>

    </div>
  )
}

export default Navigate