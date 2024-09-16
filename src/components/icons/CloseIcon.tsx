import { IconType } from '@/types/icon'

export default function CloseIcon({ size = 24, color = '#333333' }: IconType) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.4843 4.92866C20.8748 4.53814 20.8748 3.90498 20.4843 3.51445C20.0938 3.12393 19.4606 3.12393 19.0701 3.51445L11.9989 10.5857L4.92781 3.5146C4.53729 3.12408 3.90412 3.12408 3.5136 3.5146C3.12307 3.90513 3.12307 4.53829 3.5136 4.92882L10.5847 11.9999L3.51374 19.0708C3.12321 19.4613 3.12321 20.0945 3.51374 20.485C3.90426 20.8755 4.53743 20.8755 4.92795 20.485L11.9989 13.4141L19.0699 20.4852C19.4605 20.8757 20.0936 20.8757 20.4842 20.4852C20.8747 20.0946 20.8747 19.4615 20.4842 19.071L13.4131 11.9999L20.4843 4.92866Z"
        fill={color}
      />
    </svg>
  )
}
