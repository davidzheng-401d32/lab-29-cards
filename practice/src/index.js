import React from 'react';
import ReactDOM from 'react-dom';

import content from './content.json';
import Page from './components/page.js';

import { BrowserRouter } from 'react-router-dom';


const App = (props) => {
  return <Page content={content} />;
};

const rootElement = document.getElementById('root');
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , rootElement);


