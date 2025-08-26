import React from 'react';

export default function FilterGroup({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div style={{ marginBottom: 16 }}>
      <h4>{title}</h4>
      <div>{children}</div>
    </div>
  );
}
