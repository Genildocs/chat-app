import { FaSearch } from 'react-icons/fa';
import { BiPlus } from 'react-icons/bi';
import { BiMinus } from 'react-icons/bi';
import { useState } from 'react';
export default function ChatList() {
  const [active, setActive] = useState(true);
  return (
    <div>
      <div className="flex items-center gap-5 p-5">
        <div className="flex items-center flex-1 bg-[rgba(17,25,40,0.75)] p-3 rounded-md gap-2">
          <FaSearch className="w-[20px] h-[20px]" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent w-full outline-none "
          />
        </div>
        <div className="flex bg-[rgba(17,25,40,0.75)] rounded-md p-2">
          {active ? (
            <BiPlus
              className="w-[32px] h-[32px] cursor-pointer"
              onClick={() => setActive(!active)}
            />
          ) : (
            <BiMinus
              className="w-[32px] h-[32px] cursor-pointer"
              onClick={() => setActive(!active)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
