"use client";

import NavActionsComponet from "./NavbarAction"
import { DashboardPathEnum } from "../typings/platform"
import { useRouter } from "next/navigation";
import { Button } from "../components/ChakraUI";
import MenuBar from "./Menubar";


const NavBarPage =  ()=> {    

  const router = useRouter()

  const handleNavigation  = ()=> {
     router.push(DashboardPathEnum.HOME);
     router.refresh()
  }

  

    return (
      <div className="flex flex-1 h-[var(--nav-height)] w-full items-center justify-between bg-[var(--nav-bg)] px-[10px] shadow-sm shadow-slate-200">
        <div className="mobile:block desktop:hidden tablet:hidden">
          <MenuBar/>
        </div>
        <div className="flex justify-start">
          <Button bg={"transparent"} onClick={handleNavigation}>
            EventWorld
          </Button>
        </div>
        <div className="flex gap-x-[10px] mobile:hidden desktop:flex tablet:flex">
          <NavActionsComponet />
        </div>
      </div>
    );
}


export default NavBarPage