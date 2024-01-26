import { ButtonHTMLAttributes } from 'react';

export type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  icon?: React.ReactNode;
  color?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;
