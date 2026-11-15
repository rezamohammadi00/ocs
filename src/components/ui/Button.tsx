import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Figma: Test-Exam › Button (node 6:8691)
 * Variant matrix: Size × Type × Style × Icon × Light × State
 *
 * Figma prop        → Prop here
 * ─────────────────────────────────────────────
 * Type              → variant    (primary | secondary | destructive | white)
 * Style             → appearance (solid | outlined | text)
 * Light             → light      (boolean)
 * Size              → size       (xs | sm | md | lg | icon-*)
 * Icon=Left/Right   → startIcon / endIcon (logical, so RTL-safe)
 * Icon=Center       → size="icon-*" + icon as children
 * State=Hover       → hover: classes
 * State=De-active   → disabled
 * State=Loading     → loading
 *
 * Colors come from CSS variables, see button-tokens.css.
 */

const base =
  "group/button inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors outline-none select-none " +
  "focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px " +
  "disabled:pointer-events-none " +
  "aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 " +
  "data-[loading=true]:pointer-events-none data-[loading=true]:bg-(--action-primary-light-bg) data-[loading=true]:text-(color:--action-primary-solid-bg) " +
  "[&_svg]:pointer-events-none [&_svg]:shrink-0";

const types = {
  primary: {
    solid:
      "bg-(--action-primary-solid-bg) text-(color:--action-primary-solid-text) hover:bg-(--action-primary-solid-hover)",
    "solid-light":
      "bg-(--action-primary-light-bg) text-(color:--action-primary-light-text) hover:bg-(--action-primary-light-bg-hover)",
    outlined:
      "border-[0.5px] border-(color:--action-primary-outline-solid-border) text-(color:--action-primary-outline-solid-text) hover:bg-(--action-primary-outline-solid-border-hover) hover:text-(color:--action-primary-outline-solid-text-hover)",
    "outlined-light":
      "border-[0.5px] border-(color:--action-primary-outline-light-border) text-(color:--action-primary-outline-light-text) hover:bg-(--action-primary-outline-light-border-hover)",
    text: "text-(color:--action-primary-light-text) hover:border-b hover:border-(color:--border-info) hover:rounded-b-none",
  },
  secondary: {
    solid:
      "bg-(--action-secondary-solid-bg) text-(color:--action-secondary-solid-text) hover:bg-(--action-secondary-solid-hover)",
    "solid-light":
      "bg-(--action-secondary-light-bg) text-(color:--action-secondary-light-text) hover:bg-(--action-secondary-light-bg-hover)",
    outlined:
      "border-[0.5px] border-(color:--action-secondary-outline-solid-border) text-(color:--action-secondary-outline-solid-text) hover:bg-(--action-secondary-outline-solid-border-hover) hover:text-(color:--action-secondary-outline-solid-text-hover)",
    "outlined-light":
      "border-[0.5px] border-(color:--action-secondary-outline-light-border) text-(color:--action-secondary-outline-light-text) hover:bg-(--action-secondary-outline-light-border-hover)",
    text: "text-(color:--action-secondary-light-text) hover:border-b hover:border-(color:--border-info) hover:rounded-b-none",
  },
  destructive: {
    solid:
      "bg-(--action-destructive-solid-bg) text-(color:--action-destructive-solid-text) hover:bg-(--action-destructive-solid-hover)",
    "solid-light":
      "bg-(--action-destructive-light-bg) text-(color:--action-destructive-light-text) hover:bg-(--action-destructive-light-bg-hover)",
    outlined:
      "border-[0.5px] border-(color:--action-destructive-outline-solid-border) text-(color:--action-destructive-outline-solid-text) hover:bg-(--action-destructive-outline-solid-border-hover) hover:text-(color:--action-destructive-outline-solid-text-hover)",
    "outlined-light":
      "border-[0.5px] border-(color:--action-destructive-outline-light-border) text-(color:--action-destructive-outline-light-text) hover:bg-(--action-destructive-outline-light-border-hover) hover:text-(color:--action-destructive-outline-light-text-hover)",
    text: "text-(color:--action-destructive-light-text) hover:border-b hover:border-(color:--border-info) hover:rounded-b-none",
  },
  // "White" only exists as Solid / Outlined (no Light, no Text) in Figma.
  white: {
    solid:
      "bg-(--action-white-solid-bg) text-(color:--action-white-solid-text) hover:bg-(--action-white-solid-hover)",
    outlined:
      "border-[0.5px] border-(color:--action-white-outline-solid-border) text-(color:--action-white-outline-solid-text) hover:bg-(--action-white-outline-solid-border-hover) hover:border-(color:--action-white-outline-solid-border-hover) hover:text-(color:--action-white-outline-solid-text-hover)",
  },
} as const;

/** State=De-active */
const disabledStyles = {
  solid:
    "disabled:bg-(--action-disabled-bg) disabled:text-(color:--action-disabled-text)",
  outlined:
    "disabled:bg-transparent disabled:border-(color:--border-disabled) disabled:text-(color:--action-disabled-text)",
  text: "disabled:text-(color:--action-disabled-text)",
} as const;

const sizes = {
  xs: "h-7 px-2 rounded-[4px] text-xs leading-5 tracking-[-0.168px] [&_svg:not([class*='size-'])]:size-3",
  sm: "h-8 px-3 rounded-[6px] text-sm leading-[22px] tracking-[-0.196px] [&_svg:not([class*='size-'])]:size-4",
  md: "h-10 px-4 rounded-lg text-base leading-[26px] [&_svg:not([class*='size-'])]:size-5",
  // NOTE: lg radius is inferred (10px); everything else is read from Figma.
  lg: "h-12 px-6 rounded-[10px] text-lg leading-7 [&_svg:not([class*='size-'])]:size-6",
  default:
    "h-10 px-4 rounded-lg text-base leading-[26px] [&_svg:not([class*='size-'])]:size-5",
  icon: "size-10 p-0 rounded-lg text-base [&_svg:not([class*='size-'])]:size-5",
  "icon-xs":
    "size-7 p-0 rounded-[4px] text-xs [&_svg:not([class*='size-'])]:size-3",
  "icon-sm":
    "size-8 p-0 rounded-[6px] text-sm [&_svg:not([class*='size-'])]:size-4",
  "icon-md":
    "size-10 p-0 rounded-lg text-base [&_svg:not([class*='size-'])]:size-5",
  "icon-lg":
    "size-12 p-0 rounded-[10px] text-lg [&_svg:not([class*='size-'])]:size-6",
} as const;

export type ButtonVariant = keyof typeof types;
export type ButtonAppearance = "solid" | "outlined" | "text";
export type ButtonSize = keyof typeof sizes;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  appearance?: ButtonAppearance;
  /** Figma "Light=True": tinted background / light border */
  light?: boolean;
  size?: ButtonSize;
  /** Rendered before the label (right side in RTL) */
  startIcon?: React.ReactNode;
  /** Rendered after the label (left side in RTL) */
  endIcon?: React.ReactNode;
  /** Figma "State=Loading": shows a spinner instead of content */
  loading?: boolean;
}

function buttonVariants({
  variant = "primary",
  appearance = "solid",
  light = false,
  size = "default",
  className,
}: {
  variant?: ButtonVariant;
  appearance?: ButtonAppearance;
  light?: boolean;
  size?: ButtonSize;
  className?: string;
} = {}) {
  const group = types[variant] as Record<string, string>;
  const key =
    appearance === "text" ? "text" : light ? `${appearance}-light` : appearance;
  const style = group[key] ?? group[appearance] ?? group.solid;

  const isIconSize = size === "icon" || size.startsWith("icon-");

  return cn(
    base,
    sizes[size],
    style,
    disabledStyles[appearance],
    // Text style has no box: it hugs its content (and the icon, when icon-only)
    appearance === "text" && (isIconSize ? "size-auto" : "h-auto px-0"),
    className,
  );
}

function Spinner() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="animate-spin"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeOpacity="0.25"
        strokeWidth="3"
      />
      <path
        d="M21 12a9 9 0 0 0-9-9"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Button({
  className,
  variant = "primary",
  appearance = "solid",
  light = false,
  size = "default",
  type = "button",
  startIcon,
  endIcon,
  loading = false,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      data-slot="button"
      data-loading={loading || undefined}
      aria-busy={loading || undefined}
      type={type}
      dir="auto"
      className={buttonVariants({
        variant,
        appearance,
        light,
        size,
        className,
      })}
      {...props}
    >
      {loading ? (
        <Spinner />
      ) : (
        <>
          {startIcon}
          {children}
          {endIcon}
        </>
      )}
    </button>
  );
}

export { Button, buttonVariants };
