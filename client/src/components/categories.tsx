import React, { useState } from 'react'
import incertDoc from '../assets/mainContent/categories/incertDoc.svg'
import label1 from '../assets/mainContent/categories/label1.svg'
import label2 from '../assets/mainContent/categories/label2.svg'
import label3 from '../assets/mainContent/categories/label3.svg'
import label4 from '../assets/mainContent/categories/label4.svg'
import label5 from '../assets/mainContent/categories/label5.svg'
import addItem from "../assets/mainContent/categories/add_circle.svg"
import folder from "../assets/mainContent/categories/folder.svg"
import '../SASS/categories.scss'

function Categories() {
    const list = {
        'All Notes': 43,
        'Design': 23,
        'Code Blocks': 15,
        'Drafts': 18,
        'Peoples Review': 21,
        'Social': 43,
        'Labels': 36,
        'My Notes': 29,
    }
    const labels = [
        'Notes',
        'Change Notes',
        'From Family',
        'Imagium',
        'Work',
        'New Label'
    ]
    const [li, setLi] = useState(0)
    return (
        <div className='categories'>
            <div className='categories-btn'>
                <img src={incertDoc} alt="incertDoc" />
                <button>New Note</button>
            </div>
            <div className='categories-list'>
                <ul className='categories-list__keys'>
                    {
                        Object.entries(list).map((e, i) => (
                            <li
                                className={li === i ? 'categories-list-item__active' : 'categories-list-item'}
                                onClick={() => setLi(i)}
                            >
                                <img src={folder} alt="folder" />
                                <span className='categories-list-item__span'>{e.map(e => (
                                    <span>{e}</span>
                                ))}</span></li>
                        ))
                    }
                </ul>                
            </div>
            <ul className='categories-addItem'>
                <li>Add Folder</li>
            </ul>
            <div className='categories-label'>
                <p>Labels</p>
                <div className='categories-label-items'>
                    {
                        labels.map((e, i) => (
                            <div className='categories-label-items__pos'>
                                <img
                                    src={i === 0 ? label1 : i === 1 ? label2 : i === 2 ? label3 : i === 3 ? label4 : i === 4 ? label5 : addItem}
                                    alt="label"
                                    key={e}
                                />
                                <p>{e}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Categories