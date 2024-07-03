import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Home, About, Projects, Contact} from './pages';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <main className='bg-slate-300/20 h-full'>
      <Router basename='/Portfolio-3D'>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App