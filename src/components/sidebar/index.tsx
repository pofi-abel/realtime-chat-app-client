import Conversations from "./coversations";
import LogoutButton from "./logout-button";
import SearchInput from "./search-input";

type Props = {};

const Index = (props: Props) => {
  return (
    <div className="border-r border-slate-500 p-5 flex flex-col">
      <SearchInput />
      <div className="divider px-3" />
      <Conversations />
      <LogoutButton />
    </div>
  );
};

export default Index;