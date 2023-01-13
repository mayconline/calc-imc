import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="py-3 px-4 mt-4 rounded font-semibold text-sm w-full bg-cyan-500 text-gray-800 hover:bg-cyan-300 ring-white transition-colors focus:ring-2"
      {...props}
    >
      {children}
    </button>
  );
}
