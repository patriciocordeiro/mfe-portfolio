import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import MFEBoundary from './components/MFEBoundary';

const RemoteCart = React.lazy(() => import('cart/Cart'));
const RemoteProductList = React.lazy(() => import('product/ProductList'));
function App() {
  return (
    <BrowserRouter>
      <header
        style={{
          marginBottom: '20px',
          padding: '10px',
          borderBottom: '2px solid black',
        }}>
        <nav
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <div>
            <Link to='/' style={{ marginRight: '15px' }}>
              Home (Browse)
            </Link>
            <Link to='/about'>About (Shell Page)</Link>
          </div>
          <MFEBoundary>
            <React.Suspense fallback={<div>Loading...</div>}>
              <RemoteCart />
            </React.Suspense>
          </MFEBoundary>
        </nav>
      </header>
      <main>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route
              path='/'
              element={
                <MFEBoundary>
                  <RemoteProductList />{' '}
                </MFEBoundary>
              }
            />
            <Route
              path='/about'
              element={<h2>About Page (Rendered by Shell)</h2>}
            />
          </Routes>
        </React.Suspense>
      </main>
    </BrowserRouter>
  );
}

export default App;
