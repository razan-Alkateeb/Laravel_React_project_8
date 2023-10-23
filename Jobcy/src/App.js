import React from "react";
import Routes from "./Routes/index";
import { Provider } from "react-redux";
import store from "./pages/ExtraPages/Components/redux/store";
import { DataProvider } from "./pages/FilterData/DataContext";

//import Custom Style scss
import "./assets/scss/themes.scss";
function App() {
  return (
    <DataProvider>
      <React.Fragment>
        {/* Provide the Redux store to your components */}
        <Provider store={store}>
          <Routes />
        </Provider>
      </React.Fragment>
    </DataProvider>
  );
}

export default App;
