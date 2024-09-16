import { ReactNode } from 'react'

import Spacing from '@shared/Spacing'

export default function LabeledInput({
  label,
  children,
}: {
  label: string
  children: ReactNode
}) {
  return (
    <div className="w-full">
      <p className="pl-10 self-start text-gray-500 font-semibold">{label}</p>
      <Spacing size={10} />
      {children}
    </div>
  )
}
