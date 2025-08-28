import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import { Toaster } from "./components/ui/toaster";
import { ModeProvider } from "./context/ModeContext";

function App() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <ModeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/portfolio" element={<Portfolio initialMode="portfolio" />} />
          </Routes>
          <Toaster />
        </BrowserRouter>
      </ModeProvider>
    </div>
  );
}

export default App;