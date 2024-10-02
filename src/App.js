import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import ThemeContext from "./ThemeContext/ThemeContext";
import { useContext } from "react";

function App() {
  return (
    <div className={'App'}>
      <Dashboard />
    </div>
  );
}

export default App;