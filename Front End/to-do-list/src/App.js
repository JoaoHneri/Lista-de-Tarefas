import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import Info from "./components/Info/Info";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/info/:id" Component={Info}/>
        <Route path="/Edit/:id" Component={Home}/>
      </Routes>
    </Router>
  );
}

export default App;
