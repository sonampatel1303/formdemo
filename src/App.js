import logo from './logo.svg';
import './App.css';
import LoginForm from "./components/controlledform";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import RegisterationFormWithDynamicFields from './components/formwithdynamicfield';
import Sample from './components/sample';
import DepartmentList from './components/demowithUseEffect';

function App() {
  return (
  
      <>
  <Router>
    <Routes>
    <Route path="/" element={<DepartmentList />} />
    <Route path="/sample" element={<Sample />} />
    </Routes>
  </Router>
      <div className="App">
    
      </div>
      </>
    
  );
}

export default App;
