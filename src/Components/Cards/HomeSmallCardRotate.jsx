import React from 'react'
import "./HomeSmallCard.css"

function HomeSmallCardRotate({Step,CardData,CardLastPart}) {
  return (
    <div className='homecardmainrotate' >
      <h5 style={{fontSize:"15px",color:"rgb(2, 168, 2)"}} >{Step}</h5>
      <p> <b>{CardData}</b> </p>
      <p>{CardLastPart}</p>
    </div>
  )
}

export default HomeSmallCardRotate
