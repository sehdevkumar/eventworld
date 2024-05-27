import FooterPage from "../components/Footer";
import NavBarPage from "../components/Navbar";
import { ApplicationProvider } from "../context/Context";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div className="grid overflow-hidden grid-rows-[max-content,minmax(0,1fr),max-content] h-dvh w-dvw">
        <NavBarPage/>
        <div className="p-[20px] h-[calc(100dvh-var(--nav-height)-var(--footer-height))] overflow-auto relative">
          <ApplicationProvider>
             {children}
          </ApplicationProvider>
          </div>
        <FooterPage/>
      </div>
  );
}
