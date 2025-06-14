interface XIconProps {
  size?: number;
  className?: string;
  strokeWidth?: number;
  animate?: boolean;
}

const XIcon = ({
  size = 48,
  className = "",
  strokeWidth = 4,
  animate = true,
}: XIconProps) => {
  const lineStyle = animate
    ? {
        animation: "drawLine 0.5s ease-in-out",
        strokeDasharray: "33.94",
        strokeDashoffset: "0",
      }
    : {};

  const secondLineStyle = animate
    ? {
        animation: "drawLine 0.5s ease-in-out 0.1s both",
        strokeDasharray: "33.94",
        strokeDashoffset: "0",
      }
    : {};

  return (
    <>
      {animate && (
        <style>
          {`
            @keyframes drawLine {
              from {
                stroke-dasharray: 33.94;
                stroke-dashoffset: 33.94;
              }
              to {
                stroke-dasharray: 33.94;
                stroke-dashoffset: 0;
              }
            }
          `}
        </style>
      )}
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        className={`${className} ${animate ? "animate-pulse" : ""}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 12L36 36"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="drop-shadow-sm"
          style={lineStyle}
        />
        <path
          d="M36 12L12 36"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="drop-shadow-sm"
          style={secondLineStyle}
        />
      </svg>
    </>
  );
};

export default XIcon;
