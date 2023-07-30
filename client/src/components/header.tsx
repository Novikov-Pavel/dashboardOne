import React from 'react'
import { Link } from 'react-router-dom'
import more from '../assets/more.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBell, faChevronUp, faCircleUser, faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { global } from '../App'
import '../SASS/header.scss'
 
function Header() {
    const { albumId, setAlbumId, flexGrid, fetching } = React.useContext(global)
    const ref = React.useRef<HTMLInputElement>(null)
    React.useEffect(() => {
        flexGrid ? fetching(16) : fetching(5)
    }, [])

    return (
        <div className='header'>
            <div className='header-logo'>
                <Link to={'/'} className='header-logo__bg'>
                    <FontAwesomeIcon
                        icon={faBars}
                        size="lg"
                        style={{ color: "#c3cad9", }}
                    />
                </Link>
                <Link to={'/'}>Constructor</Link>
            </div>
            <div className='header-menu'>
                <Link to={'/'}>Dashboard</Link>
                <Link to={'/'}>About Us</Link>
                <Link to={'/'}>News</Link>
                <Link to={'/'}>User Policy</Link>
                <Link to={'/'}>Contacts</Link>
                <Link to={'/'}><img src={more} alt="more" /></Link>
            </div>
            <form className='header-form'>
                <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    size="xl"
                    style={{ color: "#c3cad9" }}
                />
                <input type='number'
                    placeholder='Search Transactions and Documents'
                    value={albumId}
                    onChange={e => setAlbumId(e.target.value)}
                    ref={ref}
                />
                <button
                    type="submit"
                    onClick={(e) => {
                        flexGrid ? fetching(16) : fetching(5)
                        e.preventDefault()
                        ref.current?.focus()
                    }}>
                    <FontAwesomeIcon
                        icon={faChevronUp}
                        rotation={90}
                        size="xl"
                        style={{ color: "#c3cad9" }}
                    />
                </button>
            </form>
            <div className='header-acc'>
                <FontAwesomeIcon
                    icon={faCircleUser}
                    style={{ color: "#c3cad9", }}
                    size="xl"
                />
                <p>Clayton Santos</p>
            </div>
            <div className='header-alerts'>
                <Link
                    to={'/'}
                    className="header-alerts__bg fa-layers fa-fw"
                    style={{ background: '#fff' }}
                >
                    <FontAwesomeIcon
                        icon={faBell}
                        style={{ color: "#c3cad9", }}
                        size="xl"
                    />
                    <span className="fa-layers-counter"
                        style={{
                            backgroundColor: '#E62E7B',
                            borderRadius: '50%',
                            width: 50,
                            height: 50
                        }}></span>
                </Link>
                <Link to={'/'} className='header-alerts__bg'>
                    <FontAwesomeIcon
                        icon={faCircleXmark}
                        style={{ color: "#c3cad9", }}
                        size="xl"
                    />
                </Link>
            </div>

        </div>
    )
}

export default Header