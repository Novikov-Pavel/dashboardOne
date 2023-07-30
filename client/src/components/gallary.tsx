import React from 'react'
import { faList, faMagnifyingGlass, faTableCells, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { global } from '../App'
import '../SASS/gallery.scss'

function Gallary() {
    const { img, setImg, flexGrid, setFlexGrid, fetching, searchGallery, setSearchGallary, albumId } = React.useContext(global)
    const ref = React.useRef<HTMLInputElement>(null)
    const clearInput = () => {
        setSearchGallary('')
        ref.current?.focus()
    }
    const clear = () => setImg([])
    const flex = (value: boolean) => setFlexGrid(value)

    console.log('albumId', albumId);
    
    return (
        <div className='gallery'>
            <div className="gallery-header">
                <div className='gallery-header__icons'>
                    <div className='gallery-header__rending'>
                        <FontAwesomeIcon
                            icon={faTableCells}
                            size="xl"
                            style={{ color: "#c3cad9", padding: 10 }}
                            onClick={() => {
                                flex(true)
                                fetching(16)
                            }}
                        />
                        <FontAwesomeIcon
                            icon={faList} size="xl"
                            style={{ color: "#c3cad9", padding: 10 }}
                            onClick={() => {
                                flex(false)
                                fetching(5)
                            }}
                        />
                    </div>
                    <FontAwesomeIcon
                        onClick={() => clear()}
                        icon={faTrash} size="xl"
                        style={{ color: "#c3cad9", padding: 10, border: '2px solid #F5F6F7', borderRadius: 100 }}
                    />
                </div>
                <form className='gallery-header__form'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" style={{ color: "#c3cad9" }} />
                    <input
                        type="text"
                        pattern='^[a-zA-Z]+$'
                        placeholder='Search'
                        value={searchGallery}
                        onChange={e => setSearchGallary(e.target.value)}
                        ref={ref}
                    />
                    {searchGallery !== '' &&
                        <FontAwesomeIcon icon={faXmark} size="xl" style={{ color: "#c3cad9" }}
                            onClick={() => clearInput()}
                        />}
                </form>
            </div>
            <div className={flexGrid ? "gallery-flex" : 'gallery-grid'}>
                {img
                    .filter((e: any) => e.title.toLocaleLowerCase().includes(searchGallery.toLocaleLowerCase()))
                    .map((e: any) => (
                        <div className={flexGrid ? "gallery-flex__item" : 'gallery-grid__item'}>
                            <div className={flexGrid ? "gallery-flex__img" : 'gallery-grid__img'} key={e.title} >
                                <img src={e.thumbnailUrl} alt={e.title} key={e.title} />
                            </div>
                            <h3>{e.title.slice(0, 20)}...</h3>
                            <p>ID: {e.id}</p>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Gallary