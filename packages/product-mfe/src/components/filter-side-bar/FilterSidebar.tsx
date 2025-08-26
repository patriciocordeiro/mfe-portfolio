import FilterGroup from './FilterGroup';
import PriceRangeFilter from './PriceRangeFilter';

export default function FilterSidebar() {
  return (
    <aside style={{ width: 280, padding: 16, borderRight: '1px solid #eee' }}>
      <FilterGroup title='Price'>
        <PriceRangeFilter />
      </FilterGroup>
      <FilterGroup title='Category'>(categories...)</FilterGroup>
    </aside>
  );
}
