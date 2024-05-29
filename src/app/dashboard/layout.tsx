
import { ApplicationProvider } from "../context/Context";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ApplicationProvider>{children}</ApplicationProvider>
    </>
  );
}
