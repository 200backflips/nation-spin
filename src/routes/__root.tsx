import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { CogIcon } from "lucide-react";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <div className="p-6 h-screen flex flex-col gap-6 bg-background">
        <div className="relative flex items-center justify-center">
          <Link to="/" className="absolute left-0">
            <CogIcon className="size-5" />
          </Link>
          <h2 className="text-center">Nation Spin</h2>
        </div>
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  );
}
