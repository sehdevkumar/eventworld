import Link from "next/link"
import NavActionsComponet from "./NavbarAction"
import { DashboardPathEnum } from "../typings/platform"





const NavBarPage = ()=> {


    
    return (
        <div className="flex w-full shadow-sm shadow-slate-200 items-center px-[10px] justify-between h-[var(--nav-height)] bg-[var(--nav-bg)]">
            
            <div >
                <Link href={DashboardPathEnum.HOME}>
                  EventWorld
                </Link>
            </div>
            <div className="flex gap-x-[10px]">
              <NavActionsComponet/>
            </div>
        </div>
    )
}


export default NavBarPage