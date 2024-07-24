import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  DateTimeInput,
  ReferenceInput,
} from "react-admin";
import { ModelTitle } from "../model/ModelTitle";
import { DatasetTitle } from "../dataset/DatasetTitle";

export const TrainingJobEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="endTime" source="endTime" />
        <DateTimeInput label="startTime" source="startTime" />
        <ReferenceInput source="model.id" reference="Model" label="model">
          <SelectInput optionText={ModelTitle} />
        </ReferenceInput>
        <ReferenceInput source="dataset.id" reference="Dataset" label="dataset">
          <SelectInput optionText={DatasetTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
