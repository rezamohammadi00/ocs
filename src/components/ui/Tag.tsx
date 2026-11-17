import type { HTMLAttributes, ReactNode } from "react";

/**
 * Tag
 * Variants from Figma ("Tag" frame, node 6:7927):
 *   Color: neutral | brand | success | warning | error | info | white (solid only)
 *   Style: soft | solid | onImage
 *   Size:  sm (20px high) | md (24px high)
 *   Icon:  left | right | none
 *
 * NOTE: exact hex values / font sizes could not be read from Figma, so the
 * Tailwind classes below are placeholders. Swap them for your design tokens.
 */

export type TagSize = "sm" | "md";
export type TagIconPosition = "left" | "right";
export type TagStatusColor =
  | "neutral"
  | "brand"
  | "success"
  | "warning"
  | "error"
  | "info";

type TagBaseProps = Omit<HTMLAttributes<HTMLSpanElement>, "color"> & {
  size?: TagSize;
  /** Optional icon (e.g. a 12px svg). Position set via `iconPosition`. */
  icon?: ReactNode;
  iconPosition?: TagIconPosition;
  children: ReactNode;
};

// "white" exists only in the Solid style in the design.
export type TagProps = TagBaseProps &
  (
    | { variant?: "soft" | "onImage"; color?: TagStatusColor }
    | { variant: "solid"; color?: TagStatusColor | "white" }
  );

const sizeClasses: Record<TagSize, string> = {
  sm: "h-5 px-2 text-xs gap-1",
  md: "h-6 px-2.5 text-sm gap-1",
};

const colorClasses: Record<
  "soft" | "solid" | "onImage",
  Record<TagStatusColor | "white", string>
> = {
  soft: {
    neutral: "bg-(--bg-solid-tag-neutral) text-(--text-inverse)",
    brand: "bg-indigo-50 text-indigo-700",
    success: "bg-green-50 text-green-700",
    warning: "bg-amber-50 text-amber-700",
    error: "bg-red-50 text-red-700",
    info: "bg-sky-50 text-sky-700",
    white: "bg-white text-gray-700", // not used in the design
  },
  solid: {
    neutral: "bg-gray-700 text-white",
    brand: "bg-indigo-600 text-white",
    success: "bg-green-600 text-white",
    warning: "bg-amber-500 text-white",
    error: "bg-red-600 text-white",
    info: "bg-sky-600 text-white",
    white: "bg-white text-gray-900",
  },
  // Sits on top of photos: translucent fill + blur + light text
  onImage: {
    neutral: "bg-gray-900/50 text-white backdrop-blur-sm",
    brand: "bg-indigo-600/60 text-white backdrop-blur-sm",
    success: "bg-green-600/60 text-white backdrop-blur-sm",
    warning: "bg-amber-500/60 text-white backdrop-blur-sm",
    error: "bg-red-600/60 text-white backdrop-blur-sm",
    info: "bg-sky-600/60 text-white backdrop-blur-sm",
    white: "bg-white/60 text-gray-900 backdrop-blur-sm", // not used in the design
  },
};

const cx = (...parts: Array<string | false | undefined>) =>
  parts.filter(Boolean).join(" ");

export function Tag({
  variant = "soft",
  color = "neutral",
  size = "md",
  icon,
  iconPosition = "left",
  className,
  children,
  ...rest
}: TagProps) {
  const iconNode = icon ? (
    <span
      aria-hidden="true"
      className="inline-flex size-3 shrink-0 items-center justify-center [&>svg]:size-full"
    >
      {icon}
    </span>
  ) : null;

  return (
    <span
      {...rest}
      className={cx(
        "inline-flex items-center whitespace-nowrap rounded-full font-medium leading-none",
        sizeClasses[size],
        colorClasses[variant][color],
        className,
      )}
    >
      {iconPosition === "left" && iconNode}
      <span>{children}</span>
      {iconPosition === "right" && iconNode}
    </span>
  );
}

export default Tag;

/* ---------------------------------------------------------------
 * Usage
 *
 * <Tag>Label</Tag>
 * <Tag variant="solid" color="brand" size="sm">New</Tag>
 * <Tag variant="soft" color="success" icon={<CheckIcon />}>Paid</Tag>
 * <Tag variant="onImage" color="error" icon={<XIcon />} iconPosition="right">
 *   Sold out
 * </Tag>
 * <Tag variant="solid" color="white">On dark bg</Tag>
 * --------------------------------------------------------------- */
