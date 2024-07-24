import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ModelTitle } from "../model/ModelTitle";

export const PredictionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <div />
        <DateTimeInput label="predictedAt" source="predictedAt" />
        <ReferenceInput source="model.id" reference="Model" label="model">
          <SelectInput optionText={ModelTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
