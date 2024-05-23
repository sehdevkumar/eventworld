export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="bg-[var(--app-bg-color)] w-full h-dvh overflow-hidden grid">{children}</div>;
}
