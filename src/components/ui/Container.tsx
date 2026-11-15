import { ReactNode } from "react";

export const Container = ({ children }: { children: ReactNode }) => {
  return <div className="w-full max-w-7xl">{children}</div>;
};
