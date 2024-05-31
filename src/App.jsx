import Chat from './components/chat/Chat';
import Detail from './components/detail/Detail';
import List from './components/list/List';

export default function App() {
  return (
    <div className="w-[90vw] h-[90vh] bg-[rgba(17,25,40,0.75)] rounded-md backdrop-blur-lg backdrop-saturate-[180%] border-2 border-[rgba(255,255,255,0.125)] border-solid flex">
      <List />
      <Chat />
      <Detail />
    </div>
  );
}
