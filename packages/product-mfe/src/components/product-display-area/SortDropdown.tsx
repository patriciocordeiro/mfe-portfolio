export default function SortDropdown({
  value,
  onChange,
}: {
  value?: string;
  onChange?: (v: string) => void;
}) {
  return (
    <select value={value} onChange={(e) => onChange?.(e.currentTarget.value)}>
      <option value=''>Default</option>
      <option value='price:asc'>Price: Low to High</option>
      <option value='price:desc'>Price: High to Low</option>
    </select>
  );
}
