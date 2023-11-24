import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/store";

// Head
// Body
//   Sidebar
//      - MenuItems
//   MainContainer
//      - ButtonList
//      - VideoContainer
//         - VideoCart

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
