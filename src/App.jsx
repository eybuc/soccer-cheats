import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Cheat1 from './pages/Cheat1';
import Cheat2 from './pages/Cheat2';
import Cheat3 from './pages/Cheat3';
import Cheat4 from './pages/Cheat4';
import Cheat5 from './pages/Cheat5';
import Cheat6 from './pages/Cheat6';
import Cheat7 from './pages/Cheat7';
import Cheat8 from './pages/Cheat8';
import Cheat9 from './pages/Cheat9';
import Cheat10 from './pages/Cheat10';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cheat1" element={<Cheat1 />} />
        <Route path="/cheat2" element={<Cheat2 />} />
        <Route path="/cheat3" element={<Cheat3 />} />
        <Route path="/cheat4" element={<Cheat4 />} />
        <Route path="/cheat5" element={<Cheat5 />} />
        <Route path="/cheat6" element={<Cheat6 />} />
        <Route path="/cheat7" element={<Cheat7 />} />
        <Route path="/cheat8" element={<Cheat8 />} />
        <Route path="/cheat9" element={<Cheat9 />} />
        <Route path="/cheat10" element={<Cheat10 />} />
      </Routes>
    </Layout>
  );
}

export default App;
