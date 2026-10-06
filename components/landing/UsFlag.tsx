// Bandera de EEUU en SVG: el emoji 🇺🇸 no se renderiza en Windows (se ve "US").
export default function UsFlag({ height = 16, className }: { height?: number; className?: string }) {
  const stars: [number, number][] = [];
  for (let r = 0; r < 5; r++) for (let c = 0; c < 6; c++) stars.push([4 + c * 6.4, 3.4 + r * 5.4]);
  for (let r = 0; r < 4; r++) for (let c = 0; c < 5; c++) stars.push([7.2 + c * 6.4, 6.1 + r * 5.4]);
  return (
    <svg
      className={className}
      viewBox="0 0 76 40"
      height={height}
      width={(height * 76) / 40}
      role="img"
      aria-label="Estados Unidos"
      style={{ display: 'inline-block', verticalAlign: '-0.12em', borderRadius: 2 }}
    >
      <rect width="76" height="40" fill="#fff" />
      {Array.from({ length: 7 }).map((_, i) => (
        <rect key={i} y={i * (40 / 13) * 2} width="76" height={40 / 13} fill="#B22234" />
      ))}
      <rect width="32" height={(40 / 13) * 7} fill="#3C3B6E" />
      {stars.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="0.95" fill="#fff" />
      ))}
    </svg>
  );
}
