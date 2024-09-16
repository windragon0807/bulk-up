export default function EmailInput({
  className,
  placeholder,
  value,
  onChange,
}: {
  className?: HTMLInputElement['className']
  placeholder?: HTMLInputElement['placeholder']
  value: HTMLInputElement['value']
  onChange: (value: string) => void
}) {
  return (
    <input
      className={`w-full h-50 rounded-10 pl-15 focus:outline-none focus:border-2 focus:border-gray-500 tracking-[1px] ${className}`}
      type="email"
      placeholder={placeholder}
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  )
}
