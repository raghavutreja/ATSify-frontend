import React from 'react'
import "./HomeSmallCard.css"

function HomeSmallCard({Step,CardData,CardLastPart}) {
  return (
    <div className='homecardmain' >
      <h5 style={{fontSize:"15px",color:"rgb(2, 168, 2)"}} >{Step}</h5>
      <p> <b>{CardData}</b> </p>
      <p>{CardLastPart}</p>
    </div>
  )
}

export default HomeSmallCard
