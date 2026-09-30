import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'

interface SectionTitleProps {
  label?: string
  title: ReactNode
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionTitle({
  label,
  title,
  description,
  align = 'left',
  className,
}: SectionTitleProps) {
  return (
    <div className={cn(align === 'center' && 'text-center', className)}>
      {label && (
        <p
          className={cn(
            'mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-forge-blue',
            align === 'center' && 'justify-center',
          )}
        >
          {label}
          <span className="h-px w-14 bg-forge-blue" aria-hidden="true" />
        </p>
      )}
      <h2 className="text-3xl font-extrabold leading-tight text-forge-navy sm:text-4xl lg:text-[2.6rem]">
        {title}
      </h2>
      {description && (
        <p className={cn('mt-4 max-w-xl text-sm leading-relaxed text-forge-muted sm:text-base', align === 'center' && 'mx-auto')}>
          {description}
        </p>
      )}
    </div>
  )
}
