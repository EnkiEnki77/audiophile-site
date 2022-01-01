import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Headphones from './pages/Headphones'
import Speakers from './pages/Speakers'
import Earphones from './pages/Earphones'
import { GlobalStyles } from './Global.styles'

function App() {
  return (
   <Router>
     <Routes>
       <Route path='/'/>
       <Route path='home' element={<Home/>}/>
       <Route path='category/headphones' element={<Headphones/>}/>
       <Route path='category/speakers' element={<Speakers/>}/>
       <Route path='category/earphones' element={<Earphones/>}/>
     </Routes>
     <GlobalStyles/>
   </Router>
  
  );
}

export default App;
