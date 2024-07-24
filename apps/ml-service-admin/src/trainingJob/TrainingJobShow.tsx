import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { MODEL_TITLE_FIELD } from "../model/ModelTitle";
import { DATASET_TITLE_FIELD } from "../dataset/DatasetTitle";

export const TrainingJobShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="status" source="status" />
        <TextField label="endTime" source="endTime" />
        <TextField label="startTime" source="startTime" />
        <ReferenceField label="model" source="model.id" reference="Model">
          <TextField source={MODEL_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="dataset" source="dataset.id" reference="Dataset">
          <TextField source={DATASET_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
