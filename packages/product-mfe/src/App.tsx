import { Route, Routes } from 'react-router-dom';
import ProductDetailPage from './ProductDetailPage';
import ProductListPage from './ProductListPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<ProductListPage />} />
      <Route path='/product/:slug' element={<ProductDetailPage />} />
    </Routes>
  );
}

export default App;
