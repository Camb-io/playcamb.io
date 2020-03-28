import React from 'react'

const CardFront = ({suit, rank}) => {
  return (
    <div className="card front">
      <div className={`top ${suit}`}>
        {rank}
      </div>
      <div className={`middle ${suit}`}>
      </div>
      <div className={`bottom ${suit}`}>        
        {rank}
      </div>
    </div>
  )
}

export default CardFront