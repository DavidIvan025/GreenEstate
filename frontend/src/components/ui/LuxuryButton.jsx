import { cva } from "class-variance-authority";

const luxuryButton = cva("button", {
  variants: {
    intent: {
      primary: ["cc-Button", "drop-shadow-sm"],
    },
    position: {
      left: ["absolute", "left-0", "-translate-x-8"],
      right: ["absolute", "right-0", "translate-x-8"],
    },
  },
  compoundVariants: [{ intent: "primary" }],
  defaultVariants: {
    intent: "primary",
  },
});

const LuxuryButton = ({
  className,
  intent,
  position,
  direction,
  actionOnClick,
  ...props
}) => {
  return (
    <button
      className={luxuryButton({ intent, position, className })}
      {...props}
      onClick={actionOnClick}
    >
      <svg
        className="size-6 stroke-2"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {direction === "left" ? (
            <path
              d="M15 7L10 12L15 17"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          ) : (
            <path
              d="M10 7L15 12L10 17"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          )}
        </g>
      </svg>
    </button>
  );
};

export default LuxuryButton;
