import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { MODEL_TITLE_FIELD } from "../model/ModelTitle";
import { DATASET_TITLE_FIELD } from "../dataset/DatasetTitle";

export const TrainingJobList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"TrainingJobs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
