import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TrainingResultList } from "./trainingResult/TrainingResultList";
import { TrainingResultCreate } from "./trainingResult/TrainingResultCreate";
import { TrainingResultEdit } from "./trainingResult/TrainingResultEdit";
import { TrainingResultShow } from "./trainingResult/TrainingResultShow";
import { DatasetList } from "./dataset/DatasetList";
import { DatasetCreate } from "./dataset/DatasetCreate";
import { DatasetEdit } from "./dataset/DatasetEdit";
import { DatasetShow } from "./dataset/DatasetShow";
import { ModelList } from "./model/ModelList";
import { ModelCreate } from "./model/ModelCreate";
import { ModelEdit } from "./model/ModelEdit";
import { ModelShow } from "./model/ModelShow";
import { PredictionResultList } from "./predictionResult/PredictionResultList";
import { PredictionResultCreate } from "./predictionResult/PredictionResultCreate";
import { PredictionResultEdit } from "./predictionResult/PredictionResultEdit";
import { PredictionResultShow } from "./predictionResult/PredictionResultShow";
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
        title={"MLModelService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="TrainingResult"
          list={TrainingResultList}
          edit={TrainingResultEdit}
          create={TrainingResultCreate}
          show={TrainingResultShow}
        />
        <Resource
          name="Dataset"
          list={DatasetList}
          edit={DatasetEdit}
          create={DatasetCreate}
          show={DatasetShow}
        />
        <Resource
          name="Model"
          list={ModelList}
          edit={ModelEdit}
          create={ModelCreate}
          show={ModelShow}
        />
        <Resource
          name="PredictionResult"
          list={PredictionResultList}
          edit={PredictionResultEdit}
          create={PredictionResultCreate}
          show={PredictionResultShow}
        />
      </Admin>
    </div>
  );
};

export default App;
