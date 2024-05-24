

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div className='h-full w-full relative'>
        {children}
      </div>
  );
}
