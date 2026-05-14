import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { CircleQuestionMark, MoonIcon } from "lucide-react";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <div className="p-6 h-screen flex flex-col gap-6 bg-background">
        <div className="flex items-center justify-between">
          <Link to="/">
            <CircleQuestionMark className="size-5" />
          </Link>
          <h2 className="text-center">Nation Spin</h2>
          <button>
            <MoonIcon className="size-5" />
          </button>
        </div>
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  );
}
