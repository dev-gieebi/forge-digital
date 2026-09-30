import type { LucideIcon } from 'lucide-react'
import { useCountUp } from '../../hooks/useCountUp'

interface StatCardProps {
  icon: LucideIcon
  value: number | null
  prefix?: string
  suffix?: string
  label: string
  sublabel?: string
}

export default function StatCard({ icon: Icon, value, prefix = '', suffix = '', label, sublabel }: StatCardProps) {
  const { ref, value: count } = useCountUp(value ?? 0)

  return (
    <div className="flex items-center gap-4">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10">
        <Icon className="h-5 w-5 text-white" />
      </span>
      <div>
        <p className="text-xl font-extrabold text-white sm:text-2xl">
          <span ref={ref}>
            {value === null ? label : `${prefix}${count}${suffix}`}
          </span>
        </p>
        <p className="text-xs text-white/70 sm:text-sm">
          {value === null ? sublabel : label}
          {value !== null && sublabel ? ` ${sublabel}` : ''}
        </p>
      </div>
    </div>
  )
}
