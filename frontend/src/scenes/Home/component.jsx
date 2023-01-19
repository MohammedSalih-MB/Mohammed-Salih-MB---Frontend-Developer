import React from 'react';

import Header from '@Components/Header';
import TaglineCard from './components/TaglineCard';
import FilterForm from './components/FilterForm';
import List from './components/List';

export default () => {
  return (
    <div className='spacex-app'>
      <Header />
      <TaglineCard />
      <FilterForm />
      <List />
    </div>
  )
}
