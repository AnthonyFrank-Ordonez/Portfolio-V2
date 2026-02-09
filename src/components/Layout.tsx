import type React from 'react'

interface Layout {
  children: React.ReactNode
}

export function Layout({ children }: Layout) {
  return (
    <div className="mx-auto grid w-full grid-cols-1 px-4 lg:max-w-7xl lg:grid-cols-12">
      {children}
    </div>
  )
}
