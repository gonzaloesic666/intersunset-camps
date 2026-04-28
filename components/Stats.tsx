const stats = [
  {
    value: '+1.500',
    label: 'españoles en campamentos cada verano',
    icon: '🏕️',
  },
  {
    value: '+238%',
    label: 'crecimiento del mercado en 6 años',
    icon: '📈',
  },
];

export default function Stats() {
  return (
    <section className="bg-orange py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          {stats.map(({ value, label, icon }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center md:border-r md:last:border-r-0 border-white/30 px-6"
            >
              <span className="text-4xl mb-3">{icon}</span>
              <span className="text-4xl md:text-5xl font-bold text-white mb-2">{value}</span>
              <p className="text-white/85 text-base font-medium leading-snug max-w-xs">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
