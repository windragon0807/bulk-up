export default function Spacing({
  size,
  direction = 'vertical',
  className,
}: {
  size: number
  direction?: 'horizontal' | 'vertical'
  className?: HTMLDivElement['className']
}) {
  return direction === 'vertical' ? (
    <div className={className} style={{ height: size }} />
  ) : (
    <div className={className} style={{ width: size }} />
  )
}
