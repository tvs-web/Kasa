import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Error from './Pages/Error/Error';
import Apartments from './Pages/Apartments/Apartments';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/kasa" />} />
        <Route path="/kasa" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/apartments/:id" element={<Apartments />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
