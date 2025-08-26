export default function Pagination({
  page = 1,
  total = 1,
  onChange,
}: {
  page?: number;
  total?: number;
  onChange?: (p: number) => void;
}) {
  return (
    <div>
      <button
        onClick={() => onChange?.(Math.max(1, page - 1))}
        disabled={page <= 1}>
        Prev
      </button>
      <span style={{ margin: '0 8px' }}>
        {page} / {total}
      </span>
      <button
        onClick={() => onChange?.(Math.min(total, page + 1))}
        disabled={page >= total}>
        Next
      </button>
    </div>
  );
}
