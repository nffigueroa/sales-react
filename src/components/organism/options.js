import React, { useState } from 'react'
import { IoMdSettings } from 'react-icons/io'


import './options.scss'

export const OptionsOrganism = (props) => {
  const [list, setlist] = useState(false)
  return <td>
    <div className='option'>
      <section className='option__elipsis'>
        <IoMdSettings onClick={() => setlist(!list)} />
      </section>
      {list
        ? <section className='list'>
          {
            props.config.map((item) => {
              return <span className='list__item' onClick={() => { item.func(props.itemDisplayed); setlist(!list) }}>{item.label}</span>
            })
          }
          </section>
        : ''}
    </div>

         </td>
}

export default OptionsOrganism
