import { Route, Routes } from 'react-router-dom';
import ProductDetailPage from './pages/product-detail/ProductDetailPage';
import ProductListPage from './pages/product-list/ProductListPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<ProductListPage />} />
      <Route path='/product/:slug' element={<ProductDetailPage />} />
    </Routes>
  );
}

export default App;
