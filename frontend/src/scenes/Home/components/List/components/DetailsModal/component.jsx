import React from 'react';

import CustomModal from '@Components/CustomModal';

export default (props) => {
  const renderInfo = (label, value, key) => {
    const valueText = value != null ? value.toString() : '';

    return (
      <div
        key={key}
        className='spacex-details-modal__data-info'
      >
        <h5> { label } </h5>
        <span>:</span>
        <p> { valueText } </p>
      </div>
    )
  }

  const renderDetails = () => {
    if (!props.item) {
      return null;
    }

    const infoKeys = [
      { label: 'Name', key: 'name' },
      { label: 'Company', key: 'company' },
      { label: 'Country', key: 'country' },
      { label: 'Active', key: 'active' },
      { label: 'Type', key: 'type' },
      { label: 'Details', key: 'description' }
    ];

    return (
      <div
        className="spacex-details-modal"
      >
        <div className="spacex-details-modal__image">
          <img src={props.item.image} />
        </div>
        <div className='spacex-details-modal__data'>
          { infoKeys.map(({ label, key }) => renderInfo(label, props.item[key], key)) }
        </div>
      </div>
    )
  }

  return (
    <CustomModal
      open={!!props.item}
      handleClose={props.handleClose}
      title={props.item ? props.item.name : ''}
    >
      {renderDetails()}
    </CustomModal>
  )
}
