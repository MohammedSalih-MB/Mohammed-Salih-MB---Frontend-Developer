import React, { useState, useEffect } from 'react';

import Header from '@Components/Header';
import TaglineCard from './components/TaglineCard';
import FilterForm from './components/FilterForm';
import List from './components/List';
import { fetchList } from './helper';

export default () => {
  const [list, setList] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchList((result) => {
      setList(result.list);
      setCountries(result.countries);
    });
  }, []);

  return (
    <div className='spacex-app'>
      <Header />
      <TaglineCard />
      <FilterForm
        countries={countries}
        list={list}
        setList={setList}
      />
      <List
        list={list}
      />
    </div>
  )
}
