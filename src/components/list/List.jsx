import ChatList from './chatlist/ChatList';
import UserInfor from './userinfo/UserInfor';

export default function List() {
  return (
    <div className="flex-1">
      <UserInfor />
      <ChatList />
    </div>
  );
}
