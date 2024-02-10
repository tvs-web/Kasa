import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Description from './Pages/Description/Description';
import About from './Pages/About/About';
import Error from './Pages/Error/Error';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/kasa" />} />
        <Route path="/Kasa" element={<Home />} />
        <Route path="/Description" element={<Description />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
