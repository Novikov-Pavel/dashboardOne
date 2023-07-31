import React from 'react'
import { faList, faMagnifyingGlass, faTableCells, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { global } from '../../App/App'
import '../../SASS/gallery.scss'

function Gallary() {
    const { img, setImg, flexGrid, setFlexGrid, fetching, searchGallery, setSearchGallary } = React.useContext(global)
    const ref = React.useRef<HTMLInputElement>(null)
    const clearInput = () => {
        setSearchGallary('')
        ref.current?.focus()
    }
    const clear = () => setImg([])
    const flex = (value: boolean) => setFlexGrid(value)

    return (
        <div className='gallery'>
            <div className="gallery-header">
                <div className='gallery-header__icons'>
                    <div className='gallery-header__rending'>
                        <FontAwesomeIcon icon={faTableCells} size="xl" onClick={() => {
                            flex(true)
                            fetching(16)
                        }} />
                        <FontAwesomeIcon icon={faList} size="xl" onClick={() => {
                            flex(false)
                            fetching(5)
                        }} />
                    </div>
                    <FontAwesomeIcon icon={faTrash} size="xl" onClick={() => clear()} />
                </div>
                <form className='gallery-header__form'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
                    <input
                        type="text"
                        pattern='^[a-zA-Z]+$'
                        placeholder='Search'
                        value={searchGallery}
                        onChange={e => setSearchGallary(e.target.value)}
                        ref={ref}
                    />
                    {searchGallery !== '' &&
                        <FontAwesomeIcon icon={faXmark} size="xl"
                            onClick={() => clearInput()}
                        />}
                </form>
            </div>
            <div className='gallery-inner'>
                <div className={flexGrid ? 'gallery-block' : 'gallery-none'}>
                    <div className="gallery-flex">
                        {img
                            .filter(e =>
                                e.title.toLocaleLowerCase().includes(searchGallery.toLocaleLowerCase()))
                            .map(e => (
                                <div className="gallery-flexItem">
                                    <div className="gallery-flexItem__img" key={e.title} >
                                        <img src={e.thumbnailUrl} alt={e.title} key={e.title} />
                                    </div>
                                    <h3>{e.title.slice(0, 20)}...</h3>
                                    <p>ID: {e.id}</p>
                                </div>
                            ))}
                    </div>
                </div>
                <div className={!flexGrid ? 'gallery-block' : 'gallery-none'}>
                    <div className="gallery-grid">
                        {img
                            .filter(e =>
                                e.title.toLocaleLowerCase().includes(searchGallery.toLocaleLowerCase()))
                            .map(e => (
                                <div className='gallery-gridItem'>
                                    <div className='gallery-gridItem__img' key={e.title} >
                                        <img src={e.thumbnailUrl} alt={e.title} key={e.title} />
                                    </div>
                                    <h3>{e.title.slice(0, 20)}...</h3>
                                    <p>ID: {e.id}</p>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallary