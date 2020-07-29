import * as React from "react";
import { Show, SimpleShowLayout, TextField, DateField, UrlField } from 'react-admin';

export const StatShow = props => (
    <Show title="Stat view" {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="version" />
            <TextField source="digestImage" />
            <TextField source="userAgent" />
            <UrlField source="referer" />
            <TextField source="ip" />
            <TextField source="language" />
            <TextField source="timezone" />
            <DateField source="createdAt" />
        </SimpleShowLayout>
    </Show>
);