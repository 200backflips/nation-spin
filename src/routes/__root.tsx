import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { MoonIcon } from "lucide-react";
import GameInstructions from "@/components/game-instructions";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <div className="p-6 h-screen flex flex-col gap-6 bg-background">
        <div className="flex items-center justify-between">
          <GameInstructions />
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
