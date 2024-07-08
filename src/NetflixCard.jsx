import React from 'react'
import './Netflix.css'

export default function Card(props) {
  return (
    <div className='card'>
      <img src={props.imagesrc} alt={props.title} className='simage' />
      <div className='card-info'>
        <span className='card-category'>{props.title}</span>
        <h3 className='card-title'>{props.name}</h3>
        <a href={props.links} target='_blank' rel='noopener noreferrer'>
          <button className='watch-button'>Watch now</button>
        </a>
      </div>
    </div>
  )
}
