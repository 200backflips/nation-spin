import { cn } from "@/lib/utils";

const buttonClasses =
  "flex items-center justify-center text-lg font-bold border rounded-full";

export default function CircularButton({
  onClick,
  children,
  className,
  size = "base",
}: {
  onClick: () => void;
  children: string;
  className?: string;
  size?: "base" | "lg" | "xl";
}) {
  return (
    <button
      className={cn(
        buttonClasses,
        {
          "size-9": size === "base",
          "size-12": size === "lg",
          "size-16": size === "xl",
        },
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
