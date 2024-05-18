import { cn } from "../../utils/helpers";

export default function Button({
  disabled = false,
  className,
  children,
  onClick,
  ...restProps
} ) {
  let defaultClassName = cn(
    `font-medium cursor-pointer bg-primary text-white ${disabled && " opacity-70 cursor-none "}`,
  );

  return (
    <button
      className={
      cn(defaultClassName, className)
      }
      disabled={disabled}
      onClick={onClick}
      {...restProps}
    >
      {children}
    </button>
  );
}
