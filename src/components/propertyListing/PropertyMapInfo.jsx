import React from 'react'
import MapComponent from './MapComponent'

const PropertyMapInfo = ({address}) => {
  return (
    <>
            <div className='map-image-container col-md-6 col-sm-12 col-12'>
        <h2 className='map-header'> Where you'll be </h2>
        <MapComponent address={address}/>
    </div>
    <div className='extra-info col-md-6 col-sm-12 col-12'>
        <h2 className='extra-heading'> Extra Info </h2>
        <p className='extra-description'>
            Nestled in a serene location, this cozy villa offers the perfect blend of comfort and elegance. 
            Featuring spacious rooms, modern interiors, and a lush green garden, it provides an ideal escape 
            from the busy city life. The villa boasts a private terrace, natural light-filled living spaces, 
            and a warm ambiance for relaxation. Whether for family gatherings or peaceful retreats, this villa 
            creates a homely yet luxurious experience. Truly a place where comfort meets charm.
        </p>
    </div>
    </>
  )
}

export default PropertyMapInfo