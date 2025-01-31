import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Navbar from './assets/components/Navbar'

function App() {

  return (
    <>
      <main className='bg-slate-300/20 p-10'>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={'Home'} />
            <Route path='/gameDevProjects' element={'GameDev Projects'} />
            <Route path='/softwareDev' element={'Developed Software'} />
            <Route path='/universityProjects' element={'University Projects'} />
            <Route path='/about' element={'About'} />
          </Routes>
        </Router>
      </main>
    </>
  )
}

export default App
