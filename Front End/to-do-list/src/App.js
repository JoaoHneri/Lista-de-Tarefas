import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Info from "./components/Info/Info";
import Task from "./components/Task/Task";
import Editar from "./components/Editar/Editar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/info/:id" Component={Info}/>
        <Route path="/Edit/:id" Component={Editar}/>
        <Route path="/" Component={Task}/>
      </Routes>
    </Router>
  );
}

export default App;
