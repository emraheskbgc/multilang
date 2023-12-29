import React from "react";

import { usePathname, useRouter } from "@/src/navigation";
function LocaleSwitchers() {
  const pathname = usePathname();
const router = useRouter();
  const handleLocaleChange = (lang) => {
    router.replace(pathname, {locale: lang});
  };
  return (
    <div className="absolute top-full right-11 mt-2 bg-white rounded-lg shadow-lg z-50">
      <ul className="list-none">
       
          <li className="py-2 px-8  flex  items-center rounded-lg hover:bg-gray-200 cursor-pointer"  onClick={() => handleLocaleChange('tr')}>
            <img
              src="/assets/images/tr.png"
              alt="tr"
              className="w-5 h-3  mr-2"
            />
            <span>Turkish</span>
          </li>
        

        
          <li className="py-2 px-8 flex items-center rounded-lg hover:bg-gray-200 cursor-pointer"  onClick={() => handleLocaleChange('en')}>
            <img
              src="/assets/images/en.png"
              alt="tr"
              className="w-5 h-3 mr-2"
            />
            <span>English</span>
          </li>
      
      </ul>
    </div>
  );
}

export default LocaleSwitchers;
