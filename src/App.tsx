import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Episodes from './containers/Episodes';
import Characters from './containers/Characters';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/characters/:episode" element={<Characters />}/>
        <Route path="/" element={<Episodes/>}/>
      </Routes>
    </Router>
  )
}

export default App
