
import './App.css';
import DragAndDrop from './pages/Drag-n-Drop/dragAndDrop';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<DragAndDrop />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
