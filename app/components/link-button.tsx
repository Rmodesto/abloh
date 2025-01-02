import { LinkButtonProps } from "../types";

export const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  children,
  className = "",
}) => {
  return (
    <a
      href={href}
      className={`block w-full px-6 text-center py-3 mb-4 text-gray-600/60 border  border-blue rounded-lg 
      hover:bg-blue-500/10 transition-colors duration-200 ${className}`}
    >
      {children}
    </a>
  );
};
