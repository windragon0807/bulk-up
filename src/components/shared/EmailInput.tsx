import { ChangeEvent, HTMLInputAutoCompleteAttribute } from 'react'

export default function EmailInput({
  className,
  name,
  placeholder,
  autoComplete,
  value,
  onChange,
}: {
  className?: HTMLInputElement['className']
  name?: HTMLInputElement['name']
  placeholder?: HTMLInputElement['placeholder']
  autoComplete?: HTMLInputAutoCompleteAttribute
  value: HTMLInputElement['value']
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}) {
  return (
    <input
      className={`w-full h-50 rounded-10 pl-15 focus:outline-none focus:border-2 focus:border-gray-500 tracking-[1px] ${className}`}
      type="email"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      autoComplete={autoComplete}
    />
  )
}
