import React, { useState } from 'react';

import DetailsModal from './components/DetailsModal';

export default (props) => {
  const [selected, setSelected] = useState(null);

  const handleModalClose = () => setSelected(null);

  const openModal = (item) => setSelected(item);

  const renderInfo = (label, value, key) => {
    const valueText = value != null ? value.toString() : '';

    return (
      <div
        key={key}
        className='spacex-list__content-item-info'
      >
        <h5> { label } </h5>
        <span>:</span>
        <p> { valueText } </p>
      </div>
    )
  }

  const renderCard = (item) => {
    const infoKeys = [
      { label: 'Name', key: 'name' },
      { label: 'Company', key: 'company' },
      { label: 'Type', key: 'type' }
    ];

    return (
      <div
        className="spacex-list__content-item"
        key={item.id}
        onClick={() => openModal(item)}
      >
        <div className="spacex-list__content-item-image">
          <img src={item.image} />
        </div>
        
        { infoKeys.map(({ label, key }) => renderInfo(label, item[key], key)) }
      </div>
    )
  }

  return (
    <>
      <div className='spacex-list'>
        <h3 className='spacex-list__title'>
          Results
        </h3>
        <div className='spacex-list__content'>
          { props.list.map(renderCard) }
        </div>
      </div>
      <DetailsModal
        handleClose={handleModalClose}
        item={selected}
      />
    </>
  )
}
