import React from 'react';

export default () => {
  const renderInfo = (data) => {
    return (
      <div
        className='spacex-list__content-item-info'
      >
        <h5>Company</h5>
        <span>:</span>
        <p>SpaceX</p>
      </div>
    )
  }
  const renderCard = (item) => {
    return (
      <div
        className="spacex-list__content-item"
      >
        <div className="spacex-list__content-item-image">
          <img src="https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg" />
        </div>
        
        {renderInfo()}
      </div>
    )
  }

  return (
    <div className='spacex-list'>
      <h3 className='spacex-list__title'>
        Results
      </h3>
      <div className='spacex-list__content'>
        {renderCard()}
      </div>
    </div>
  )
}
