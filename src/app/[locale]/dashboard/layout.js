
import Header from '@/components/Header'
import React from 'react'
import SearchBar from '@/components/SearchBar'



function DashboardLayout({children}) {
    
  return (
    <div className='flex h-full bg-slate-100 '>
      <header>
    <Header />

    </header>
    <div className='flex flex-col flex-1  w-full'>
    <SearchBar/>
    <main className='h-full overflow-y-auto '>
    {children}
    </main>
    </div>
    </div>
  
  )
}

export default DashboardLayout