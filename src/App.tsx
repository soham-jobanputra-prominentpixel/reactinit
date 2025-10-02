import { ThemeProvider } from "./components/theme-provider.tsx";
import { ModeToggle } from "./components/mode-toggle.tsx";
import { Button } from "./components/ui/button.tsx";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
        <div className="flex flex-col items-center space-y-6">
          {/* Header Text */}
          <h1 className="text-4xl font-extrabold tracking-tight">
            🚀 My <span className="text-indigo-500">Startup</span> Template
          </h1>
          <p className="text-lg text-muted-foreground">
            A minimal Vite + Tailwind + Shadcn UI setup
          </p>

          {/* Mode Toggle */}
          <div className="mt-4">
            <ModeToggle />
          </div>

          {/* Counter */}
          <div className="flex items-center space-x-4 mt-6">
            <Button
              className="hover:cursor-pointer"
              onClick={() => setCounter(counter + 1)}
            >
              Increment
            </Button>
            <span className="text-2xl font-semibold">{counter}</span>
          </div>

          {/* Color Showcase */}
          <div className="flex space-x-3 mt-8">
            <span className="h-6 w-6 rounded-full bg-red-500"></span>
            <span className="h-6 w-6 rounded-full bg-green-500"></span>
            <span className="h-6 w-6 rounded-full bg-blue-500"></span>
            <span className="h-6 w-6 rounded-full bg-yellow-500"></span>
            <span className="h-6 w-6 rounded-full bg-purple-500"></span>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
