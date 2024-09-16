import { ReactNode } from 'react'

export default function FullSizeButton({
  children,
  onClick,
}: {
  children: ReactNode
  onClick?: () => void
}) {
  return (
    <button
      className="w-full horizontal-center bg-primary rounded-10 px-12 py-12 text-white"
      onClick={onClick}>
      {children}
    </button>
  )
}
