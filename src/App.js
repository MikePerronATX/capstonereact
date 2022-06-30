import { Routes, Route } from 'react-router-dom';

import Navbar from './components/routes/navigation/Navbar';
import Title from './components/routes/title/Title';
import Home from './components/routes/home/Home';
import Login from './components/routes/login/Login';

const Shop = () => {
  return <h1> Shop</h1>;
};

const App = () => {
  return (
    <>
      <Title />
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Title />} />
          <Route path="home" element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
