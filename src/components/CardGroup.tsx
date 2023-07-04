export function CardGroup({ children }: { children: React.ReactNode; }) {
  return (
    <div style={{
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      padding: '1rem 0 1rem 0'
    }}>
      {children}
    </div>
  );
}
