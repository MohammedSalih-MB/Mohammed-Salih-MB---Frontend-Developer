import React from 'react';
import { render } from 'react-dom';

import '@Styles/styles.scss';
import App from '@Components/App';

const mountRoot = document.getElementById('app');

render(
  <App />,
  mountRoot
);
