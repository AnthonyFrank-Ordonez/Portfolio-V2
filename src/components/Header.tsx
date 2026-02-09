export function Header() {
  return (
    <header className="w-full px-2 py-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <img src="/img/Logo.png" alt="Logo" className="h-12 w-12" />
          <span className="font-rubik text-lg font-bold">Tony.Dev</span>
        </div>
      </div>
    </header>
  )
}
