import { ReactNode } from "react";

export const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-7xl mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
      {children}
    </div>
  );
};
