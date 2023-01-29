import React from 'react';

import CustomInput from '@Components/CustomInput';
import CustomSelect from '@Components/CustomSelect';
import CustomButton from '@Components/CustomButton';
import { fieldTypes, filterFormFields } from './constants';

export default () => {
  const renderFormField = (field) => {
    switch(field.type) {
      case fieldTypes.input:
        return (
          <CustomInput
            label={field.label}
          />
        )

      case fieldTypes.select:
        return (
          <CustomSelect
            options={[
              { label: 'test 1', value: 1 },
              { label: 'test 2', value: 2 },
              { label: 'test 3', value: 3 },
              { label: 'test 4', value: 4 }
            ]}
          />
        )

      default:
        return null;
    }
  }

  const renderField = (field) => {
    return (
      <div
        key={field.key}
        className="spacex-filter-form__fields-field"
      >
        {renderFormField(field)}
      </div>
    )
  }

  return (
    <div className='spacex-filter-form'>
      <p className='spacex-filter-form__info'>
        Search Form
      </p>
      <div className='spacex-filter-form__fields'>
        {Object.values(filterFormFields).map(renderField)}

        <div className="spacex-filter-form__fields-field">
          <CustomButton
            content="Search"
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  )
}
