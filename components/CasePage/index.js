import React from 'react'

function CasePage() {
  return (
    <div className=' text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-900 h-[100vh]'>

    <h1>Kasa Sayfası</h1>
    
    <div className="overflow-x-auto">
    <table className="min-w-full bg-white dark:bg-gray-900 border border-gray-300">
      <thead>
        <tr>
        <th className="py-2 px-4 border-b">Kasa Adı</th>
        <th className="py-2 px-4 border-b">Toplam Giriş</th>
        <th className="py-2 px-4 border-b">Toplam Çıkış</th>
        <th className="py-2 px-4 border-b">Net Bakiye</th>
        <th className="py-2 px-4 border-b">Son Güncelleme Tarihi</th>
        </tr>
      </thead>
      <tbody>
       
          <tr>
            <td className="py-2 px-7">Espa</td>
            <td className="py-2 px-7">123456789</td>
            <td className="py-2 px-7">dikimevi</td>
            <td className="py-2 px-7">1000</td>
            <td className="py-2 px-7"></td>
          </tr>
      
      </tbody>
    </table>
  </div>
    </div>
  )
}

export default CasePage