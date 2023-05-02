import "./App.css";
import Routing from "./Routes/Index";
import { Provider, useDispatch } from "react-redux";
import store from './redux/store/store';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routing />
      </Provider>
    </div>
  );
}

export default App;
