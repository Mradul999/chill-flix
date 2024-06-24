import logo from "./logo.svg";
import "./App.css";
import { Body } from "./Components/Body.js";
import { Provider } from "react-redux";
import {Appstore} from "./utils/Appstore.js";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Body></Body>

    </div>
    
      
    
  );
}

export default App;
