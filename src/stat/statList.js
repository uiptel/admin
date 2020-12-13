import * as React from "react";
import { List, Datagrid, TextField, DateField, Filter, TextInput, DateInput } from 'react-admin';

const StatFilter = props => (
    <Filter {...props}>
        <TextInput label="ip" source="ip" />
        <TextInput label="timezone" source="timezone" />
        <DateInput label="created" source="createdAt" />
    </Filter>
);

export const StatList = props => (
    <List title="Stat list" perPage={25} filters={<StatFilter />}
        sort={{ field: 'createdAt', order: 'DESC' }} {...props}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="href" />
            <TextField source="ip" />
            <TextField source="language" />
            <TextField source="timezone" />
            <DateField source="createdAt" />
        </Datagrid>
    </List>
);