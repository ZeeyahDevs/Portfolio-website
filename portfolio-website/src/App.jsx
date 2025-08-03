import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Project from './Pages/Project/Project'

import './App.css'

function App() {
  


  return (

    
<Router>
  <Routes>
    <Route path='/' element={<Home/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/project' element={<Project/>}/>
     
  </Routes>
</Router>





)
}

export default App
