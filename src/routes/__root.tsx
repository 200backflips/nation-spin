import { Outlet, createRootRoute } from "@tanstack/react-router";
import { MoonIcon, SunIcon } from "lucide-react";
import GameInstructions from "@/components/game-instructions";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";

const currentYear = new Date().getFullYear();

export const Route = createRootRoute({
  component: RootComponent,
});

function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  return (
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
  );
}

function RootComponent() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-center" />
      <div className="p-6 h-screen flex flex-col gap-8 bg-background">
        <div className="flex items-center justify-between">
          <GameInstructions />
          <h2 className="text-center">Nation Spin</h2>
          <ThemeToggle />
        </div>
        <Outlet />
        <p className="text-gray-400 text-xs text-center">
          © {currentYear} Bunny Jones Worldwide Gaming Initiative
        </p>
      </div>
    </QueryClientProvider>
  );
}
