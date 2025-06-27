type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
};

export const Button = ({ onClick, children, className }: ButtonProps) => (
  <button onClick={onClick} className={className}>
    {children}
  </button>
);