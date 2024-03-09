import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Episodes from './containers/Episodes';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Episodes/>}/>
      </Routes>
    </Router>
  )
}

export default App
