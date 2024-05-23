
export default function DashboardLayout({
  children,
  gallery,
  liveactivity,
  reports
}: {
  children: React.ReactNode,
  gallery: React.ReactNode,
  liveactivity: React.ReactNode,
  reports: React.ReactNode

}) {
  return (
     <>
        {children}
        {reports}
        {gallery}
        {liveactivity}
     </>
  );
}
