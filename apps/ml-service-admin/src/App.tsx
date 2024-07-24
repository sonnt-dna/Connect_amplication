import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ModelList } from "./model/ModelList";
import { ModelCreate } from "./model/ModelCreate";
import { ModelEdit } from "./model/ModelEdit";
import { ModelShow } from "./model/ModelShow";
import { TrainingJobList } from "./trainingJob/TrainingJobList";
import { TrainingJobCreate } from "./trainingJob/TrainingJobCreate";
import { TrainingJobEdit } from "./trainingJob/TrainingJobEdit";
import { TrainingJobShow } from "./trainingJob/TrainingJobShow";
import { DatasetList } from "./dataset/DatasetList";
import { DatasetCreate } from "./dataset/DatasetCreate";
import { DatasetEdit } from "./dataset/DatasetEdit";
import { DatasetShow } from "./dataset/DatasetShow";
import { PredictionList } from "./prediction/PredictionList";
import { PredictionCreate } from "./prediction/PredictionCreate";
import { PredictionEdit } from "./prediction/PredictionEdit";
import { PredictionShow } from "./prediction/PredictionShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"MLService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Model"
          list={ModelList}
          edit={ModelEdit}
          create={ModelCreate}
          show={ModelShow}
        />
        <Resource
          name="TrainingJob"
          list={TrainingJobList}
          edit={TrainingJobEdit}
          create={TrainingJobCreate}
          show={TrainingJobShow}
        />
        <Resource
          name="Dataset"
          list={DatasetList}
          edit={DatasetEdit}
          create={DatasetCreate}
          show={DatasetShow}
        />
        <Resource
          name="Prediction"
          list={PredictionList}
          edit={PredictionEdit}
          create={PredictionCreate}
          show={PredictionShow}
        />
      </Admin>
    </div>
  );
};

export default App;
