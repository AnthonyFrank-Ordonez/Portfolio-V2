import type React from 'react'

interface Layout {
  children: React.ReactNode
}

export function Layout({ children }: Layout) {
  return (
    <div className="mx-auto grid w-full grid-cols-1 px-4 md:max-w-2xl lg:max-w-6xl lg:grid-cols-12">
      {children}
    </div>
  )
}
