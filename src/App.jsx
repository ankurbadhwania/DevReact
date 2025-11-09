import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Bodyy from "./components/Bodyy";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./components/Feed";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Bodyy />}>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/feed" element={<Feed />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
