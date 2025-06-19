
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { NavUser } from "@/components/nav-user"
import { cn } from "@/lib/utils"
const data = {
    user: {
      name: "shadcn",
      email: "m@example.com",
      avatar: "/avatars/shadcn.jpg",
    },
  
 
   
  }
export const AppNavbar = () => {
  return (
    <header className="w-full flex items-center justify-between px-4 py-2 border-b bg-background">
      <div className="flex items-center gap-2">
        {/* ✅ Este botón abre/cierra el sidebar */}
        <SidebarTrigger className="-ml-1 cursor-pointer" style={{ border: 'solid 1px red' }}>
        <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
             
            />
          {/* <Button variant="outline" size="icon" className="cursor-pointer">
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 5h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2z"
                clipRule="evenodd"
              />
            </svg>
          </Button> */}
        </SidebarTrigger>
        <span className="text-lg font-semibold">Mi App</span>
      </div>
{/* <div className={cn("flex flex-col gap-2 p-2")}>

      <NavUser user={data.user} />

</div> */}
      
    </header>
  )
}