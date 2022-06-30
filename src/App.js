import Navbar from './components/Navbar';
import React from 'react';
import './App.css';

import Home from './components/pages/Home';

function App() {
  return (
    <div className="App" >
<Router>
      <Navbar/>
      <Home />
        <Routes>
         <Route path='/' />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
