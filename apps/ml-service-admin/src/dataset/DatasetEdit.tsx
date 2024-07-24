import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TrainingJobTitle } from "../trainingJob/TrainingJobTitle";

export const DatasetEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="source" source="source" />
        <NumberInput step={1} label="size" source="size" />
        <SelectInput
          source="format"
          label="format"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceArrayInput
          source="trainingJobs"
          reference="TrainingJob"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TrainingJobTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
