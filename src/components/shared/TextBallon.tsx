export default function TextBallon({ children }: { children: string }) {
  return (
    <div
      className="relative px-10 py-6 bg-primary rounded-10 text-white w-fit
        after:content-[''] after:absolute after:block after:w-0 after:z-[1] after:-bottom-7 after:left-38
        after:border-solid after:border-t-[7px] after:border-r-[7px] after:border-b-0 after:border-l-[7px] after:border-[var(--primary)_transparent]">
      {children}
    </div>
  )
}
