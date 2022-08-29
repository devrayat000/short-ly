import { clsx } from "clsx";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  pill?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  secondary?: boolean;
  variant?: "text" | "filled";
};

const Button: React.FC<ButtonProps> = ({
  disabled,
  loading,
  fullWidth,
  secondary,
  variant,
  pill,
  className,
  ...rest
}) => {
  return (
    <button
      className={clsx(
        "inline-block text-white px-7 py-2 font-medium transition duration-150 ease-in-out",
        className,
        variant === "text" &&
          "bg-transparent focus-visible:bg-slate-100/20 active:bg-slate-100/20",
        variant === "filled" &&
          "bg-primary focus-visible:bg-primary/90 active:bg-primary/90 shadow-sm active:shadow",
        {
          "rounded-full": pill,
          rounded: !pill,
          "bg-primary-bg": secondary,
          "w-full": fullWidth,
        }
      )}
      disabled={loading || disabled}
      type="button"
      {...rest}
    />
  );
};

Button.defaultProps = {
  pill: false,
  loading: false,
  fullWidth: false,
  secondary: false,
  variant: "filled",
};

export default Button;
