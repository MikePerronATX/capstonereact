import { Routes, Route } from 'react-router-dom';

import Navbar from './components/routes/navigation/Navbar';

import Home from './components/routes/home/Home';

const Shop = () => {
  return <h1> Shop</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
