//Global Imports
import { cn } from "@/lib/utils";
import { TinyLine } from "@/components/TinyLine";

export const TitleWithDesc = ({
  title,
  desc,
  alignItems = "items-center",
}: {
  title: string;
  desc: string;
  alignItems?: "items-center" | "items-start";
}) => {
  return (
    <div className={cn("flex flex-col justify-center gap-1", alignItems)}>
      <p className="text-2xl font-bold text-(--action-primary-light-text)">
        {title}
      </p>
      <TinyLine />
      <p className="text-center text-base text-(--landing-section-little-text)">
        {desc}
      </p>
    </div>
  );
};
