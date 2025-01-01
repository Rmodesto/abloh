export interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export interface Project {
  id: string;
  label: string;
  href: string;
}
