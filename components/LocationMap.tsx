export default function LocationMap({
  query,
  label
}: {
  query: string;
  label: string;
}) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
  return (
    <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden border border-white/10">
      <iframe
        title={`Map — ${label}`}
        src={src}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 w-full h-full grayscale contrast-125"
      />
    </div>
  );
}
