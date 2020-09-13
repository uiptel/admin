import React from 'react';
import { Admin, Resource } from 'react-admin';
import crudProvider from '@fusionworks/ra-data-nest-crud'
import { StatList } from './stat/statList';
import { StatShow } from './stat/statShow';
import authProvider from './authProvider';
import httpClient from './httpClient';
import config from './config';

const dataProvider = crudProvider(config.apiUrl, httpClient);

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="stat" show={StatShow} list={StatList} />
  </Admin>
);

export default App;
