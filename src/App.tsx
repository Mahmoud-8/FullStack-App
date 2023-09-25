import './App.css';
import Header from './components/Header';
import Product from './pages/Product';
import img from './assets/img.avif';
import { Route, Routes, Outlet } from 'react-router-dom';
import Checkout from './pages/Checkout';

function Layout() {
  return (
    <>
      <Header title='WEBROAD' />
      <Outlet />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="/"
          element={
            <Product
              title='Complete Web Development '
              description='Learn React with Fullstack Complete Web Development Complete Web Development Complete Web Development Complete Web Development Complete Web Development'
              images={[{ src: img, alt: 'Thumbnail' }]}
              price={12.99}
            />
          }
        />
        <Route path="checkout" element={<Checkout />} />
        <Route path="success" element={<div>Success</div>} />
      </Route>
    </Routes>
  );
}

export default App;
