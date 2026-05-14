import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { MoonIcon, SunIcon } from "lucide-react";
import GameInstructions from "@/components/game-instructions";
import { useState } from "react";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <div className="p-6 h-screen flex flex-col gap-8 bg-background">
        <div className="flex items-center justify-between">
          <GameInstructions />
          <h2 className="text-center">Nation Spin</h2>
          <button
            onClick={() => {
              document.documentElement.classList.toggle("dark");
              setTheme(theme === "dark" ? "light" : "dark");
            }}
          >
            {theme === "dark" ? (
              <MoonIcon className="size-5" />
            ) : (
              <SunIcon className="size-5" />
            )}
          </button>
        </div>
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  );
}
