import './App.css';
import Dashboard from './pages/Dashboard';
import Add from './pages/Add';
import Home from './pages/Home';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element ={<Home/>}>
        <Route index element ={<Dashboard/>}/>
        <Route path="/add" element ={<Add/>}/>
        </Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
