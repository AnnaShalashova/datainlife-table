import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SectionList from '../components/SectionList';
import Table from '../components/Table';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: "GET_DATA"})
  }, [])

  return (
    <Router>
        <section className="App">
        <SectionList />
        <Routes>
          <Route path="/" element={<Table /> }/>
          <Route path="/:idSection" element={<Table /> }/>
        </Routes>
      </section>
    </Router>   
  );
}

export default App;
