import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import HomeLayout from "./components/HomeLayout/HomeLayout";
import { createBrowserHistory } from "history";
import {
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import HomeTemplate from "./components/templates/HomeTemplate";
import ImageDetail from "./pages/ImageDetail/ImageDetail";
import MyImage from "./pages/MyImage/MyImage";
import Profile from "./pages/Profile/Profile";
import { Provider } from "react-redux";
import { store } from "./redux/configStore";

export const history: any = createBrowserHistory();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={history}>
        <Routes>
          <Route path="/" element={<HomeTemplate />}>
            <Route path="/" element={<HomeLayout />} />
            <Route path="/image/:imageId" element={<ImageDetail />} />
            <Route path="/my-images" element={<MyImage />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </HistoryRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
