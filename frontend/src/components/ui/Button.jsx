import { cva } from "class-variance-authority";

const button = cva("button", {
  variants: {
    intent: {
      primary: [
        "bg-primary",
        "text-white",
        "rounded-full",
        "transition",
        "ease-in",
        "duration-300",
        "hover:bg-black",
      ],
      secondary: [
        "bg-white",
        "text-primary",
        "border-primary",
        "rounded-full",
        "transition",
        "ease-in",
        "duration-300",
        "hover:text-white",
        "hover:bg-primary",
      ],
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"],
    },
  },
  compoundVariants: [{ intent: "primary", size: "medium", class: "uppercase" }],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

const Button = ({ className, intent, size, ...props }) => (
  <button className={button({ intent, size, className })} {...props} />
);

export default Button;