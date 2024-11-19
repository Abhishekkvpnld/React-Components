
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DragAndDrop from './pages/DragNDrop/DragAndDrop';
import Stepper from "./pages/StepperCard/Stepper"
import Home from "./pages/HomeList/Home"
import Quiz from "./pages/QuizAppComp/QuizApp"
import DarkMode from "./pages/DarkModePage/DarkMode"
import Pagination from "./pages/PaginationComponent/Pagination"
import Poll from "./pages/PollPage/Poll"
import ProgressBar from "./pages/ProgressBarPage/ProgressBar"
import Grid from "./pages/GridPage/Grid"
import TicTakToe from "./pages/TicTacToeApp/TicTakToe"
import CurrencyConverter from "./pages/CurrencyConverter/CurrencyConverter"
import SelectableGrid from "./pages/SelectableGridPage/SelectableGrid"
import CountdownTimer from "./pages/CountdownTimerPage/CountdownTimer"
import OtpGenerator from "./pages/OTPGeneratorPage/OtpGenerator"

import { Toaster } from 'react-hot-toast';
import BreadCrumpsPage from './pages/BreadCrumps/BreadCrumpsPage';

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/stepper' element={<Stepper />} />
          <Route path='/dragNdrop' element={<DragAndDrop />} />
          <Route path='/quiz' element={<Quiz/>} />
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
          <Route path='/breadcrumps' element={<BreadCrumpsPage/>}/>
        </Routes>
        <Toaster position='top-right' />
      </Router>
    </>
  )
}

export default App
