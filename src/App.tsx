import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Episodes from './containers/Episodes';
import Characters from './containers/Characters';
import CharacterDetails from './containers/CharacterDetails';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/characterdetails/:episode/:characterid" element={<CharacterDetails />}/>
        <Route path="/characters/:episode" element={<Characters />}/>
        <Route path="/" element={<Episodes/>}/>
      </Routes>
    </Router>
  )
}

export default App
