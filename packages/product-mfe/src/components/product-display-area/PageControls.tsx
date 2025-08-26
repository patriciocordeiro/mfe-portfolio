import React from 'react';

export default function PageControls({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 12,
      }}>
      {children}
    </div>
  );
}
