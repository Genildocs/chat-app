import { IoVideocamSharp } from 'react-icons/io5';
import { FaRegEdit } from 'react-icons/fa';
import { RxBorderDotted } from 'react-icons/rx';
export default function UserInfor() {
  let name = 'Paulo Silveira';
  return (
    <div className=" p-5 flex items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <div className="e-avatar e-avatar-large rounded-full w-[50px] h-[50px] object-cover"></div>
        <h2 className="text-sm font-semibold">{name}</h2>
      </div>
      <div className="flex gap-5">
        <RxBorderDotted className="w-[1.5rem] h-[1.5rem] cursor-pointer" />
        <IoVideocamSharp className="w-[1.5rem] h-[1.5rem] cursor-pointer" />
        <FaRegEdit className="w-[1.5rem] h-[1.5rem] cursor-pointer" />
      </div>
    </div>
  );
}
