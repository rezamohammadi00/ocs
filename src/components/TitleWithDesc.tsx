import { cn } from "@/lib/utils";

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
      <span className="block h-1 w-6 rounded-full bg-linear-to-r from-[#F0A510]/0 to-[#F0A510]"></span>
      <p className="text-center text-base text-(--landing-section-little-text)">
        {desc}
      </p>
    </div>
  );
};
