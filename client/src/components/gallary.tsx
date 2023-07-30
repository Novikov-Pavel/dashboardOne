import React from 'react'
import { faList, faMagnifyingGlass, faTableCells, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { global } from '../App'
import '../SASS/gallery.scss'

function Gallary() {
    const { img } = React.useContext(global)

    return (
        <div className='gallery'>
            <div className="gallery-header">
                <div className='gallery-header__icons'>
                    <div className='gallery-header__rending'>
                        <FontAwesomeIcon icon={faTableCells} size="xl" style={{ color: "#c3cad9", padding: 10 }} />
                        <FontAwesomeIcon icon={faList} size="xl" style={{ color: "#c3cad9", padding: 10 }} />
                    </div>
                    <FontAwesomeIcon icon={faTrash} size="xl" style={{ color: "#c3cad9", padding: 10, border: '2px solid #F5F6F7', borderRadius: 100 }} />
                </div>
                <form className='gallery-header__form'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" style={{ color: "#c3cad9" }} />
                    <input type="text" pattern='^[a-zA-Z]+$' placeholder='Search' />
                </form>
            </div>
            <div className="gallery-main">
                {img.map((e: any) => (
                    <div className="gallery-main__item" key={e.title} >
                        <img src={e.thumbnailUrl} alt={e.title} key={e.title} />
                    </div>
                ))
                }
            </div>

        </div>
    )
}

export default Gallary