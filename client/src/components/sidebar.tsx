import React from 'react'
import faSocialPerson from '../assets/faSocialPerson.png'
import faSocialNavigation from '../assets/faSocialNavigation.png'
import AvatarImage from '../assets/AvatarImage.png'
import Dashboard from '../assets/sidebar/dashboard.svg'
import Notes from '../assets/sidebar/Notes.svg'
import Invoice from '../assets/sidebar/Invoice.svg'
import Files from '../assets/sidebar/Files.svg'
import Events from '../assets/sidebar/Events.svg'
import Teams from '../assets/sidebar/Teams.svg'
import Massage from '../assets/sidebar/Massage.svg'
import Settings from '../assets/sidebar/Settings.svg'
import local_phone from '../assets/sidebar/local_phone.svg'
import mail from '../assets/sidebar/mail.svg'
import chrome_reader_mode from '../assets/sidebar/chrome_reader_mode.svg'
import ic_telegram from '../assets/sidebar/ic_telegram.svg'
import ic_whatsapp from '../assets/sidebar/ic_whatsapp.svg'
import '../SASS/sidebar.scss'

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebar-socials">
        <div className='sidebar-socials__bg'>
          <img src={faSocialPerson} alt="faSocialPerson" />
        </div>
        <div className='sidebar-socials__bg'>
          <img src={faSocialNavigation} alt="faSocialNavigation" />
        </div>
      </div>
      <div className="sidebar-accaunt">
        <div>
          <div className="sidebar-accaunt-avatar">
            <img src={AvatarImage} alt="AvatarImage" />
          </div>
          <span className="sidebar-accaunt-count">2</span>
        </div>
        <h2 className='sidebar-accaunt-h2'>Hello Alfred Bryant</h2>
        <p className='sidebar-accaunt-email'>adrain.nader@yahoo.com</p>
      </div>
      <div className='sidebar-tabs'>
        <figure>
          <img src={Dashboard} alt="Dashboard" />
          <figcaption>Dashboard</figcaption>
        </figure>
        <figure>
          <img src={Notes} alt="Notes" />
          <figcaption>Notes</figcaption>
        </figure>
        <figure>
          <img src={Invoice} alt="Invoice" />
          <figcaption>Invoice</figcaption>
        </figure>
        <figure>
          <img src={Files} alt="Files" />
          <figcaption>Files</figcaption>
        </figure>
        <figure>
          <img src={Events} alt="Events" />
          <figcaption>Events</figcaption>
        </figure>
        <figure>
          <img src={Teams} alt="Teams" />
          <figcaption>Teams</figcaption>
        </figure>
        <figure>
          <img src={Massage} alt="Massage" />
          <figcaption>Massage</figcaption>
        </figure>
        <figure>
          <img src={Settings} alt="Settings" />
          <figcaption>Settings</figcaption>
        </figure>

      </div>
      <div className="sidebar-contants">
        <img src={local_phone} alt="local_phone" />
        <img src={mail} alt="mail" />
        <img src={chrome_reader_mode} alt="chrome_reader_mode" />
        <img src={ic_telegram} alt="ic_telegram" />
        <img src={ic_whatsapp} alt="ic_whatsapp" />
      </div>
    </div >
  )
}

export default Sidebar