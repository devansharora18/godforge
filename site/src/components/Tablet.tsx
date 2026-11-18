import type { ReactNode } from 'react'

/**
 * The theme's signature: two brass rules 6px apart holding one command.
 * A frame, not an illustration, and the only place brass surrounds anything.
 */
export function Tablet({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`border border-brass/70 p-[5px] ${className}`}>
      <div className="border border-brass/30 bg-surface">{children}</div>
    </div>
  )
}
