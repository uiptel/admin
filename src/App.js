import React from 'react';
import { Admin, Resource } from 'react-admin';
import crudProvider from '@fusionworks/ra-data-nest-crud'
import { StatList } from './stat/statList';
import { StatShow } from './stat/statShow';

const uri = 'https://api.uiptel.com';
const dataProvider = crudProvider(uri);

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="stat" show={StatShow} list={StatList} />
  </Admin>
);

export default App;