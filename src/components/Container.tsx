export default function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full ${className}`}
      style={{ maxWidth: 1200, paddingLeft: "clamp(1.5rem, 6vw, 5rem)", paddingRight: "clamp(1.5rem, 6vw, 5rem)" }}
    >
      {children}
    </div>
  );
}
