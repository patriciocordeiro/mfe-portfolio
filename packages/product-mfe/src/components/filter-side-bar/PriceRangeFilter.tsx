export default function PriceRangeFilter({
  min = 0,
  max = 1000,
  onChange,
}: {
  min?: number;
  max?: number;
  onChange?: (range: [number, number]) => void;
}) {
  return (
    <div>
      <label>
        Min
        <input
          type='number'
          defaultValue={min}
          onBlur={(e) => onChange?.([Number(e.currentTarget.value), max])}
        />
      </label>
      <label style={{ marginLeft: 8 }}>
        Max
        <input
          type='number'
          defaultValue={max}
          onBlur={(e) => onChange?.([min, Number(e.currentTarget.value)])}
        />
      </label>
    </div>
  );
}
