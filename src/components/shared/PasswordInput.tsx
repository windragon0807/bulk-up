import {
  ChangeEvent,
  HTMLInputAutoCompleteAttribute,
  MouseEvent,
  useState,
} from 'react'

import HiddenEyeIcon from '@icons/HiddenEyeIcon'
import ShownEyeIcon from '@icons/ShownEyeIcon'

export default function PasswordInput({
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
  const [isShow, setShow] = useState(false)
  const [isDirty, setDirty] = useState(false)

  const handleEyeClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (isDirty === false) setDirty(true)
    setShow(prev => !prev)
  }

  return (
    <div className="relative w-full">
      <input
        className={`w-full h-50 rounded-10 pl-15 focus:outline-none focus:border-2 focus:border-gray-500 tracking-[1px] ${className}`}
        type={isShow ? 'text' : 'password'}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
      />
      <button
        className="absolute right-15 bottom-[50%] translate-y-1/2"
        onClick={handleEyeClick}>
        {isShow ? (
          <ShownEyeIcon
            className={
              isDirty
                ? 'fill-primary'
                : 'fill-gray-200 hover:fill-primary focus:fill-primary'
            }
          />
        ) : (
          <HiddenEyeIcon
            className={
              isDirty
                ? 'fill-primary'
                : 'fill-gray-200 hover:fill-primary focus:fill-primary'
            }
          />
        )}
      </button>
    </div>
  )
}
