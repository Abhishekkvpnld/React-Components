
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DragAndDrop from './pages/DragNDrop/DragAndDrop.jsx';
import Stepper from "./pages/StepperCard/Stepper.jsx"
import Home from "./pages/HomeList/Home.jsx"
import Quiz from "./pages/QuizPage/Quiz.jsx"
import DarkMode from "./pages/DarkModePage/DarkMode.jsx"
import Pagination from "./pages/PaginationComponent/Pagination.jsx"
import Poll from "./pages/PollPage/Poll.jsx"
import ProgressBar from "./pages/ProgressBarPage/ProgressBar.jsx"
import Grid from "./pages/GridPage/Grid.jsx"
import TicTakToe from "./pages/TicTacToeApp/TicTakToe.jsx"
import CurrencyConverter from "./pages/CurrencyConverter/CurrencyConverter.jsx"
import SelectableGrid from "./pages/SelectableGridPage/SelectableGrid.jsx"
import CountdownTimer from "./pages/CountdownTimerPage/CountdownTimer.jsx"
import OtpGenerator from "./pages/OTPGeneratorPage/OtpGenerator.jsx"

import { Toaster } from 'react-hot-toast';

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
          <Route path='/countdown-timer' element={<CountdownTimer />} />
          <Route path='/otp-generator' element={<OtpGenerator />} />
        </Routes>
        <Toaster position='top-right' />
      </Router>
    </>
  )
}

export default App
