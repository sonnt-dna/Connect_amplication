import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ModelTitle } from "../model/ModelTitle";

export const PredictionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <div />
        <DateTimeInput label="predictedAt" source="predictedAt" />
        <ReferenceInput source="model.id" reference="Model" label="model">
          <SelectInput optionText={ModelTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
