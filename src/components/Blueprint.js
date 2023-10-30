import React from 'react'

import "./Blueprint.css"

const Blueprint = (props) => {



  return (
    <section className='containerBlueprint'>
    <div className='Content'>
    <img className='cardImg' alt='' src={props.imageUrls} />
      <div className="textContainer">
              <div className='borderText'>
          <h1>{props.locations}</h1>
          <p>{props.googleMapsUrls}</p>
          <p>{props.startDates} - {props.endDates}</p>
          <p>{props.titles}</p>
          <p>{props.descriptions} </p>
              </div>
      </div>
    </div>
    </section>
  )
}

export default Blueprint
