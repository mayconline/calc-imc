import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input({ label, name, ...props }: InputProps) {
  return (
    <label htmlFor={name} className="flex flex-col gap-3">
      <strong>{label}</strong>
      <input
        className="h-12 p-3 rounded-sm bg-gray-800 placeholder:text-gray-400 outline-none focus-within:ring-2 ring-cyan-300"
        id={name}
        {...props}
      />
    </label>
  );
}
