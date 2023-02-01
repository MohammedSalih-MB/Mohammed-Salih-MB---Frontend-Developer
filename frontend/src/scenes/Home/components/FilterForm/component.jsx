import React, { useState } from 'react';

import CustomInput from '@Components/CustomInput';
import CustomSelect from '@Components/CustomSelect';
import CustomButton from '@Components/CustomButton';
import { fieldTypes, filterFormFields, statusOptions } from './constants';
import { getFullList } from '@Scenes/Home/helper';

export default (props) => {
  const [filter, setFilter] = useState({});

  const onFilterChange = (newValue, key) => {
    setFilter({
      ...filter,
      [key]: newValue
    })
  }

  const getOptions = (key) => {
    switch(key) {
      case 'country':
        return props.countries.map(country => ({
          label: country,
          value: country
        }));

      case 'active':
        return statusOptions;
    }
  }

  const isFiltered = (item) => {
    for (const key in filter) {
      if (!filter[key]) {
        continue;
      }

      if (
        filterFormFields[key].type === fieldTypes.select
        && item[key].toString() !== filter[key]
      ) {
        return true;
      }

      if (
        filterFormFields[key].type === fieldTypes.input
        && !item[key].toLowerCase().includes(filter[key].toLowerCase())
      ) {
        return true;
      }
    }

    return false;
  }

  const onSearch = () => {
    const fullList = getFullList();
    const newList = fullList.filter(item => {
      return !isFiltered(item);
    });

    props.setList(newList);
  }

  const onClear = () => {
    setFilter({});
    const fullList = getFullList();
    props.setList(fullList);
  }

  const renderFormField = (field) => {
    switch(field.type) {
      case fieldTypes.input:
        return (
          <CustomInput
            label={field.label}
            value={filter[field.key] || ''}
            onChange={(newValue) => { onFilterChange(newValue, field.key) }}
          />
        )

      case fieldTypes.select:
        return (
          <CustomSelect
            label={field.label}
            options={getOptions(field.key)}
            value={filter[field.key] || ''}
            onChange={(newValue) => { onFilterChange(newValue, field.key) }}
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

        <div className="spacex-filter-form__fields-field spacex-filter-form__btns">
          <CustomButton
            content="Search"
            onClick={onSearch}
          />
          <CustomButton
            content="Clear"
            onClick={onClear}
          />
        </div>
      </div>
    </div>
  )
}
