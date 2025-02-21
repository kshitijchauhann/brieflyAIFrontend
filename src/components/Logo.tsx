import { Link } from "react-router-dom";

interface LogoProps {
  size?: "small" | "medium" | "large";
  className?: string;
}

export default function Logo({ size = "medium", className = "" }: LogoProps) {
  const sizes = {
    small: "text-xl",
    medium: "text-2xl",
    large: "text-4xl",
  };

  return (
    <Link
      to="/"
      className={`inline-flex items-center ${className}`}
    >
      <span className={`font-bold ${sizes[size]}`}>
        Briefly<span className="text-primary">AI</span>
      </span>
    </Link>
  );
}