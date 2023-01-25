import React from 'react';

export default (props) => {
  const renderInfo = (label, value, key) => {
    return (
      <div
        key={key}
        className='spacex-list__content-item-info'
      >
        <h5> { label } </h5>
        <span>:</span>
        <p> { value } </p>
      </div>
    )
  }
  const renderCard = (item) => {
    const infoKeys = [
      { label: 'Name', key: 'name' },
      { label: 'Company', key: 'company' },
      { label: 'Details', key: 'description' }
    ];

    return (
      <div
        className="spacex-list__content-item"
        key={item.id}
      >
        <div className="spacex-list__content-item-image">
          <img src={item.image} />
        </div>
        
        { infoKeys.map(({ label, key }) => renderInfo(label, item[key], key)) }
      </div>
    )
  }

  return (
    <div className='spacex-list'>
      <h3 className='spacex-list__title'>
        Results
      </h3>
      <div className='spacex-list__content'>
        { props.list.map(renderCard) }
      </div>
    </div>
  )
}
