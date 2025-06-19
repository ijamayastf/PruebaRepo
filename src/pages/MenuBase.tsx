import { AppNavbar } from "@/components/app-navbar"
import { AppSidebar } from "@/components/app-sidebar"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { Outlet } from "react-router-dom"
import { Dashboard } from "./dashboard"
import { useStore } from "@/store/useStore"
import { LoginPage } from "./LoginPage"
import { NotFoundPage } from "./NotFoundPage"

export const MenuBase = () => {

    const activeContent = useStore((state) => state.optionSelect);


    return (
        <SidebarProvider>
            <div className="fixed top-0 left-0 right-0 z-40" style={{ border: 'solid 0px red' }}>
                <AppNavbar />
            </div>
            <AppSidebar />
            <SidebarInset className="pt-1" style={{ border: 'solid 1px red' }}>
                <header className="flex h-12 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                    {/* <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div> */}
                </header>

                <main>
                    {activeContent === "principal" && <NotFoundPage />}
                    {activeContent === "dashboard" && <Dashboard />}
                    {activeContent === "login" && <LoginPage />}
                    {/* agrega otros componentes aquí */}
                </main>
               



                {/* <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                    <div className="grid auto-rows-min gap-4 md:grid-cols-4">
                        <div className="bg-muted/50 aspect-video rounded-xl" />
                        <div className="bg-muted/50 aspect-video rounded-xl" />
                        <div className="bg-muted/50 aspect-video rounded-xl" />
                    </div>
                    <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" >
                    dddd
                    
                    
                    </div>
                </div> */}



            </SidebarInset>
        </SidebarProvider>
    )
}
