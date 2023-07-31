import React from 'react'
import { Link } from '@react-email/link'
import faSocialPerson from '../../assets/faSocialPerson.png'
import faSocialNavigation from '../../assets/faSocialNavigation.png'
import AvatarImage from '../../assets/AvatarImage.png'
import Dashboard from '../../assets/sidebar/Dashboard.svg'
import Notes from '../../assets/sidebar/Notes.svg'
import Invoice from '../../assets/sidebar/Invoice.svg'
import Files from '../../assets/sidebar/Files.svg'
import Events from '../../assets/sidebar/Events.svg'
import Teams from '../../assets/sidebar/Teams.svg'
import Massage from '../../assets/sidebar/Massage.svg'
import Settings from '../../assets/sidebar/Settings.svg'
import local_phone from '../../assets/sidebar/local_phone.svg'
import mail from '../../assets/sidebar/mail.svg'
import chrome_reader_mode from '../../assets/sidebar/chrome_reader_mode.svg'
import ic_telegram from '../../assets/sidebar/ic_telegram.svg'
import ic_whatsapp from '../../assets/sidebar/ic_whatsapp.svg'
import { socialsT, tabsT, contantsT } from './types'
import '../../SASS/sidebar.scss'

function Sidebar() {

  const socials: socialsT = [faSocialPerson, faSocialNavigation]
  const tabs: tabsT = [Dashboard, Notes, Invoice, Files, Events, Teams, Massage, Settings]
  const contants: contantsT = [local_phone, mail, chrome_reader_mode, ic_telegram, ic_whatsapp]

  return (
    <div className='sidebar'>

      <div className="sidebar-socials">
        {socials.map(e => (
          <div className='sidebar-socials__bg' key={e}>
            <img src={e} alt={e} key={e} />
          </div>
        ))}
      </div>

      <div className="sidebar-accaunt">
        <div>
          <div className="sidebar-accaunt-avatar">
            <img src={AvatarImage} alt="AvatarImage" />
          </div>
          <span className="sidebar-accaunt-count">2</span>
        </div>
        <h2 className='sidebar-accaunt-h2'>Hello Alfred Bryant</h2>
        <Link
          href='mailto:adrain.nader@yahoo.com'
          target='_blank'
        >adrain.nader@yahoo.com</Link>
      </div>

      <div className='sidebar-tabs'>
        {tabs.map(e => (
          <figure key={Math.random()}>
            <img src={e} alt={e} key={Math.random()} />
            <figcaption key={Math.random()}>{e.replace(/^.*\//g, '').replace(/\..*/g, '')}</figcaption>
          </figure>
        ))}
      </div>

      <div className="sidebar-contants">
        {contants.map(e => (
          <img src={e} alt={e} key={e} />
        ))}
      </div>
    </div >
  )
}

export default Sidebar