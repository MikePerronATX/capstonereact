import { Routes, Route } from 'react-router-dom';

import Navbar from './components/routes/navigation/Navbar';
import Home from './components/routes/home/Home';
import Login from './components/routes/login/Login';

const Shop = () => {
  return <h1> Shop</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default App;
