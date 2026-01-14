
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import MainPage from './pages/MainPage'
import AllProjects from './components/AllProjects'
function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/My-Portfolio' element={<MainPage/>}/>
        <Route path='/projects' element={<AllProjects darkMode={false}/>}/>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
