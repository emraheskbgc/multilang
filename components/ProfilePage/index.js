"use client"
import React,{useState} from 'react'
import { FaPlus } from "react-icons/fa";

function ProfilePage() {
  const [isEdit, setIsEdit] = useState(false)
  const [user, setUser] = useState({
    name: 'Emrah',
    surname: 'Eskibağcı',
    email: 'emrah@example.com',
    phone: '555-555-5555',
  });

  const handleEdit = () => {
    setIsEdit(true);
  };
  const handleSave = () => {
    setIsEdit(false);
    // Burada sunucuya kaydetme işlemleri yapılacaktır.
    // Eğer bir backend ve veritabanınız varsa, bu kısmı uygun şekilde güncelleyin.
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  return (
    <div className='flex flex-col justify-center items-center text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-900 h-[100vh]'>
      <div className='mb-5 relative'>
        <img src="/assets/images/emrah.jpg" alt="avatar" className=' rounded-full h-36 w-36' />
         <div className='absolute bottom-0 right-5 bg-blue-500 p-1 cursor-pointer rounded-full'>
       <FaPlus/>
      </div>
      </div>
     
      <div className="ml-8">
        <h2 className="text-2xl font-bold mb-4">{`${user.name} ${user.surname}`}</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 dark:text-gray-300">
              Email
            </label>
            <input
              type="text"
              name="email"
              value={user.email}
              onChange={handleChange}
              disabled={!isEdit}
              className="border-2 border-gray-300 p-2 rounded-md w-64"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 dark:text-gray-300">
              Cep Telefon
            </label>
            <input
              type="text"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              disabled={!isEdit}
              className="border-2 border-gray-300 p-2 rounded-md w-64"
            />
          </div>
          {isEdit ? (
            <button
              type="button"
              onClick={handleSave}
              className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
            >
              Kaydet
            </button>
          ) : (
            <button
              type="button"
              onClick={handleEdit}
              className="bg-yellow-500 text-white px-4 py-2 rounded-md mr-2"
            >
              Düzenle
            </button>
          )}
        </form>
      </div>
    </div>
  )
}

export default ProfilePage