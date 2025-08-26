import { ProductGrid } from '../../components/product-grid/ProductGrid';
import { useProducts } from '../../hooks/useProducts';
// We would also import FilterSidebar and other components here
// For now, we'll keep it simple to show the data flow.
import './ProductListPage.module.css';

function ProductListPage() {
  // The component's only job is to call the hook and render based on the result.
  // All the complex logic is hidden inside useProducts().
  const { products, isLoading, error } = useProducts();

  const renderContent = () => {
    if (isLoading) {
      return <div className='plp-status'>Loading products...</div>;
    }

    if (error) {
      return <div className='plp-status error'>Error: {error}</div>;
    }

    if (products.length === 0) {
      return <div className='plp-status'>No products found.</div>;
    }

    return <ProductGrid products={products} />;
  };

  return (
    <div className='product-list-page'>
      <aside className='plp-sidebar'>
        {/* <FilterSidebar /> would go here */}
        <h2>Filters</h2>
        <p>(Filter UI coming soon)</p>
      </aside>
      <main className='plp-main-content'>
        <h1>Product Listings</h1>
        {renderContent()}
        {/* <Pagination /> would go here */}
      </main>
    </div>
  );
}

export default ProductListPage;
