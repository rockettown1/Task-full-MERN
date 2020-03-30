import React, { useContext, useEffect } from "react";
import { TasksProvider } from "./global/TasksContext";
import { FormProvider } from "./global/FormContext";
import { AuthContext } from "./global/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import { Route, Redirect } from "react-router-dom";
import Tasks from "./components/Tasks";
import { authHandler } from "./utils/authenticate";
import AccessModal from "./components/AccessModal";
import { AppContainer } from "./styles/";
import { TutorialProvider } from "./global/TutorialContext";

const App = () => {
  const [isAuthenticated, setisAuthenticated] = useContext(AuthContext);

  useEffect(() => {
    authHandler(setisAuthenticated);
  });

  return (
    <TasksProvider>
      <AppContainer>
        <FormProvider>
          <TutorialProvider>
            <Route exact path="/" component={AccessModal} />
            <PrivateRoute
              path="/main"
              render={() => {
                return <Tasks />;
              }}
            />
          </TutorialProvider>
        </FormProvider>
      </AppContainer>
      {isAuthenticated ? <Redirect to="/main" /> : <Redirect to="/" />}
    </TasksProvider>
  );
};

export default App;
