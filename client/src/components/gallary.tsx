import { faList, faMagnifyingGlass, faTableCells, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { global } from '../App'
import '../SASS/gallery.scss'

function Gallary() {
    const { img } = React.useContext(global)
    console.log(img);

    return (
        <div className='gallery'>
            <div className="gallery-header">
                <><div className='gallery-header__icons'>
                    <FontAwesomeIcon icon={faTableCells} size="xl" style={{ color: "#c3cad9", padding: 10 }} />
                    <FontAwesomeIcon icon={faList} size="xl" style={{ color: "#c3cad9", padding: 10 }} />
                </div>
                    <FontAwesomeIcon icon={faTrash} size="xl" style={{ color: "#c3cad9", padding: 10, border: '2px solid #F5F6F7', borderRadius: 100 }} /></>
                <form className='gallery-header__form'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" style={{ color: "#c3cad9" }} />
                    <input type="text" pattern='^[a-zA-Z]+$' placeholder='Search' />
                </form>
            </div>
            {img.length !== 0 &&
                img.map((e: any) => (
                    <img src={e.thumbnailUrl} alt={e.title} key={e.title} />
                ))
            }
        </div>
    )
}

export default Gallary