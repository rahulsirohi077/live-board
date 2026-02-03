import { OrgSidebar } from "./_components/OrgSidebar";
import { SideBar } from "./_components/sidebar";
import {Navbar} from "@/app/(dashboard)/_components/navbar";

interface DashboardLayoutProps {
    children: React.ReactNode
}

const DashboardLayout = ({
    children
}: DashboardLayoutProps) => {
    return (
        <main className="h-full">
            <SideBar/>
            <div className="pl-15 h-full">
                <div className="flex gap-x-3 h-full">
                    <OrgSidebar />
                    <div className="h-full flex-1">
                        <Navbar/>
                        {children}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default DashboardLayout;