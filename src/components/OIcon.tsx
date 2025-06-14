interface OIconProps {
  size?: number;
  className?: string;
  strokeWidth?: number;
  animate?: boolean;
}

const OIcon = ({
  size = 48,
  className = "",
  strokeWidth = 4,
  animate = true,
}: OIconProps) => {
  const circleStyle = animate
    ? {
        animation: "drawCircle 0.6s ease-in-out",
        strokeDasharray: "113.1",
        strokeDashoffset: "0",
      }
    : {};

  return (
    <>
      {animate && (
        <style>
          {`
            @keyframes drawCircle {
              from {
                stroke-dasharray: 113.1;
                stroke-dashoffset: 113.1;
              }
              to {
                stroke-dasharray: 113.1;
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
        <circle
          cx="24"
          cy="24"
          r="18"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          className="drop-shadow-sm"
          style={circleStyle}
        />
        {/* Agregar un gradiente sutil */}
        <defs>
          <radialGradient id="circleGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle
          cx="24"
          cy="24"
          r="18"
          fill="url(#circleGlow)"
          className="opacity-50"
        />
      </svg>
    </>
  );
};

export default OIcon;
