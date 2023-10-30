import React from 'react'
import Blueprint from './Blueprint'
import Data from './Data'


const Content = () => {

    const blueprintData = Data.map(copyOfData => {
        const {location, googleMapsUrl, startDate, endDate, title, description, imageUrl} = copyOfData

        return ( <Blueprint
        locations={location} googleMapsUrls={googleMapsUrl} startDates={startDate} endDate={endDate}
        titles={title} descriptions={description} imageUrls={imageUrl}
         />
        )
    })
  
    return (
      <section>
    <div>
      {blueprintData}
    </div>
    </section>
  )
}

export default Content

