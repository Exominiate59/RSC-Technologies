import { createContext, useContext, useState, useMemo } from "react";

type Mode = "rsc" | "portfolio";
type Ctx = { mode: Mode; setMode: (m: Mode) => void };

const ModeCtx = createContext<Ctx | null>(null);

export const ModeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<Mode>("rsc");
  const value = useMemo(() => ({ mode, setMode }), [mode]);
  return <ModeCtx.Provider value={value}>{children}</ModeCtx.Provider>;
};

export const useMode = () => {
  const ctx = useContext(ModeCtx);
  if (!ctx) throw new Error("useMode must be used inside ModeProvider");
  return ctx;
};