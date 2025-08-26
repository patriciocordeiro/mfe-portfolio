import { useProducts } from '../../hooks/useProducts';
import ProductGrid from '../product-grid/ProductGrid';
import PageControls from './PageControls';
import Pagination from './Pagination';
import SortDropdown from './SortDropdown';

export default function ProductDisplayArea() {
  const { data, loading, error, params, setParams } = useProducts({
    page: 1,
    perPage: 12,
  });

  return (
    <section style={{ flex: 1, padding: 16 }}>
      <PageControls>
        <SortDropdown
          value={params.sort}
          onChange={(s) => setParams({ ...params, sort: s })}
        />
        <Pagination
          page={params.page || 1}
          total={Math.ceil((data.total || 0) / (params.perPage || 12))}
          onChange={(p) => setParams({ ...params, page: p })}
        />
      </PageControls>

      {loading && <div>Loading...</div>}
      {error && <div style={{ color: 'red' }}>{String(error)}</div>}

      <ProductGrid items={data.items} />
    </section>
  );
}
