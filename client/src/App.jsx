
import './App.css';
import DragAndDrop from './pages/Drag-n-Drop/dragAndDrop';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Stepper from './pages/stepper/Stepper.jsx';
import Quiz from './pages/quiz/quiz.jsx';
import Home from './pages/Home List/Home.jsx';
import DarkMode from './pages/Dark Mode/DarkMode.jsx';
import Pagination from './pages/Pagination/Pagination.jsx';
import Poll from './pages/Poll/Poll.jsx';
import ProgressBar from './pages/ProgressBar/ProgressBar.jsx';
import Grid from './pages/Grid Page/Grid.jsx';
import TicTakToe from './pages/TicTacToe/TicTakToe.jsx';
import CurrencyConverter from './pages/Currency Converter/CurrencyConverter.jsx';
import SelectableGrid from './pages/Selectable Grid/SelectableGrid.jsx';

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/stepper' element={<Stepper />} />
          <Route path='/dragNdrop' element={<DragAndDrop />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/darkMode' element={<DarkMode />} />
          <Route path='/pagination' element={<Pagination />} />
          <Route path='/poll' element={<Poll />} />
          <Route path='/progressBar' element={<ProgressBar />} />
          <Route path='/grid' element={<Grid />} />
          <Route path='/tic-tac-toe' element={<TicTakToe />} />
          <Route path='/currency-converter' element={<CurrencyConverter />} />
          <Route path='/selectable-grid' element={<SelectableGrid />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
