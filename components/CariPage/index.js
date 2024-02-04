import React from 'react'

function CariPage() {
  return (
    <div className=' text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-900 h-[100vh]'>

    <h1>Cari Sayfası</h1>
    
    <div className="overflow-x-auto">
    <table className="min-w-full bg-white dark:bg-gray-900 border border-gray-300">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b">Firma Adı / Cari Hesap Adı</th>
          <th className="py-2 px-4 border-b">Vergi Kimlik Numarası (VKN)</th>
          <th className="py-2 px-4 border-b">Vergi Dairesi</th>
          <th className="py-2 px-4 border-b">Borç</th>
          <th className="py-2 px-4 border-b">Alacak</th>
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
            <td className="py-2 px-7">2000</td>
            <td className="py-2 px-7">1231312</td>
            <td className="py-2 px-7"></td>
          </tr>
      
      </tbody>
    </table>
  </div>
    </div>
  )
}

export default CariPage