import { CSSProperties, ReactNode } from 'react'

export default function Flex({
  align,
  justify,
  direction,
  className,
  children,
}: {
  align?: CSSProperties['alignItems']
  justify?: CSSProperties['justifyContent']
  direction?: CSSProperties['flexDirection']
  className?: HTMLDivElement['className']
  children?: ReactNode
}) {
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
      }}>
      {children}
    </div>
  )
}
