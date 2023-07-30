import React from 'react'
import { faList, faMagnifyingGlass, faTableCells, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { global } from '../App'
import '../SASS/gallery.scss'

function Gallary() {
    const { img, setImg, flexGrid, setFlexGrid, fetching, searchGallery, setSearchGallary } = React.useContext(global)
    console.log('img', img);
    console.log('searchGallery', searchGallery);

    const clear = () => setImg([])

    const flex = (value: boolean) => setFlexGrid(value)

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
                    />
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
                            <h3>{e.title}</h3>
                            <p>ID: {e.id}</p>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Gallary