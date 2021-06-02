/* eslint-disable no-unused-vars */
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { hot } from "react-hot-loader/root";

import { Helmet } from "react-helmet";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import "antd/dist/antd.css";
import "./assets/css/style.css";
import GlobalStyle from "./globalStyles";
import store from "./redux/store";
import config from "./config";
import PublicRoutes from "./routes/public";
import Auth from "./routes/auth";

const { theme } = config;

function App() {
  return (
    <Provider store={store}>
      <Router basename={process.env.PUBLIC_URL}>
        <Helmet>
          <title>Docs Clone</title>
        </Helmet>
        <GlobalStyle />
        <ThemeProvider theme={{ ...theme }}>
          <Switch>
            <Route>
              {/* route and protected route logic here */}
              <Route path="/" component={Auth} />
            </Route>
          </Switch>
        </ThemeProvider>
      </Router>
    </Provider>
  );
}

export default hot(App);
