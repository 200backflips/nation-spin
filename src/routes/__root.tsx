import { Outlet, createRootRoute } from "@tanstack/react-router";
import GameInstructions from "@/components/game-instructions";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";
import ThemeToggle from "@/components/ui/theme-toggle";

const currentYear = new Date().getFullYear();

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function NotFoundComponent() {
  return <div>404 - Page not found. Please check the url and try again.</div>;
}

function RootComponent() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-center" />
      <div className="w-screen md:py-4">
        <div className="h-dvh md:h-[calc(100dvh-2rem)] md:max-w-xl mx-auto flex flex-col gap-6 p-6 bg-background md:rounded-md md:shadow-sm">
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
      </div>
    </QueryClientProvider>
  );
}
