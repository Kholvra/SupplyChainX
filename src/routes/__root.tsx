import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
    component: ()=>{
        return(
            <div className="relative">
                <h1 className="absolute left-10 top-10 text-white text-3xl font-bold">SUPPLYCHAINX</h1>
                <Outlet/>
            </div>
        )
    }
    
})