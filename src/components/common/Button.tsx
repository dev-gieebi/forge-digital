import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'

interface ButtonProps {
  children: ReactNode
  to?: string
  href?: string
  type?: 'button' | 'submit'
  variant?: 'primary' | 'outline' | 'white'
  withArrow?: boolean
  className?: string
  onClick?: () => void
  disabled?: boolean
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold transition-all duration-300 ease-out'

const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-forge-blue text-white shadow-lg shadow-forge-blue/30 hover:bg-forge-blue-dark hover:-translate-y-0.5',
  outline:
    'border-2 border-forge-navy/15 bg-white text-forge-navy hover:border-forge-blue hover:text-forge-blue hover:-translate-y-0.5',
  white:
    'bg-white text-forge-navy shadow-lg shadow-black/10 hover:-translate-y-0.5 hover:shadow-xl',
}

export default function Button({
  children,
  to,
  href,
  type = 'button',
  variant = 'primary',
  withArrow = false,
  className,
  onClick,
  disabled,
}: ButtonProps) {
  const classes = cn(base, variants[variant], disabled && 'opacity-60 cursor-not-allowed', className)
  const content = (
    <>
      {children}
      {withArrow && <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={cn(classes, 'group')} onClick={onClick}>
        {content}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={cn(classes, 'group')} onClick={onClick}>
        {content}
      </a>
    )
  }
  return (
    <button type={type} className={cn(classes, 'group')} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  )
}
