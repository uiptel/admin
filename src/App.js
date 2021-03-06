import React from 'react';
import { Admin, Resource } from 'react-admin';
import crudProvider from '@fusionworks/ra-data-nest-crud'
import { createBrowserHistory as createHistory } from 'history';
import { StatList } from './stat/statList';
import { StatShow } from './stat/statShow';
import authProvider from './authProvider';
import httpClient from './httpClient';
import config from './config';

const dataProvider = crudProvider(config.API_URL, httpClient);
const history = createHistory({ basename: 'admin' });

const App = () => (
  <Admin title="Uiptel Admin" dataProvider={dataProvider} authProvider={authProvider} history={history}>
    <Resource name="stat" show={StatShow} list={StatList} />
  </Admin>
);

export default App;
