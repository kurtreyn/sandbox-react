import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLoading } from './redux/actions';
import Home from './Pages/Home';
import AlgorithmsPage from './Pages/AlgorithmsPage';

function App() {
  return (
    <div className="app-container">
      {/* <Home /> */}
      <AlgorithmsPage />
    </div>
  );
}

export default App;
