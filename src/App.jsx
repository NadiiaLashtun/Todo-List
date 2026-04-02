import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './component/layout/Layout';
import Home from './component/pages/Home';
import List from './component/pages/List';

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={<Layout />}
      >
        <Route
          index='/'
          element={<Home />}
        />
        <Route
          path='/list'
          element={<List />}
        />
      </Route>
    </Routes>
  );
}

export default App;
