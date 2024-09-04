
import './App.css';
import DragAndDrop from './pages/Drag-n-Drop/dragAndDrop';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Stepper from './pages/stepper/Stepper.jsx';

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/stepper' element={<Stepper/>}/>
          <Route path='/' element={<DragAndDrop />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
