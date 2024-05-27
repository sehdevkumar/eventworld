"use client";

import NavActionsComponet from "./NavbarAction"
import { DashboardPathEnum } from "../typings/platform"
import { Button } from "./ChakraUI";
import { useRouter } from "next/navigation";


const NavBarPage =  ()=> {    

  const router = useRouter()

  const handleNavigation  = ()=> {
     router.push(DashboardPathEnum.HOME);
     router.refresh()
  }

    return (
      <div className="flex h-[var(--nav-height)] w-full items-center justify-between bg-[var(--nav-bg)] px-[10px] shadow-sm shadow-slate-200">
        <div>
          <Button bg={"transparent"} onClick={handleNavigation}>
            EventWorld
          </Button>
        </div>
        <div className="flex gap-x-[10px]">
          <NavActionsComponet />
        </div>
      </div>
    );
}


export default NavBarPage