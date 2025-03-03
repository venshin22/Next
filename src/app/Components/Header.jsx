import { Plus, CircleDot, GitPullRequestArrow, Inbox, CircleUser } from "lucide-react";
import { HamburgerMenuIcon, TriangleDownIcon } from "@radix-ui/react-icons";

function Header() {
  return (
    <header className="flex justify-between items-center bg-gray-100 border border-gray-300 h-16 px-4 py-2">
      <div className="flex items-center">
        <button className="border border-gray-300 hover:bg-gray-200 rounded-md px-2 py-2">
        <HamburgerMenuIcon color="gray" strokeWidth={2} size={2}/>
        </button>
        <img src="/assets/github-logo.png" className="h-8 px-4"/>
        <span className="text-sm font-semibold">Dashboard</span>
      </div>

      <div>
        <ul className="flex space-x-2.5">
            <input type="text" placeholder="Search...." className="ring ring-gray-400/20 p-1 rounded-md"></input>
            <button className="flex items-center border border-gray-300 rounded-md px-1.5 hover:bg-gray-200"><Plus strokeWidth={1.5} size={15}/> <TriangleDownIcon color="gray"/></button>
            <button className="flex items-center border border-gray-300 rounded-md px-1.5 hover:bg-gray-200"><CircleDot strokeWidth={1.5} size={15}/> </button>
            <button className="flex items-center border border-gray-300 rounded-md px-1.5 hover:bg-gray-200"><GitPullRequestArrow strokeWidth={1.5} size={15}/> </button>
            <button className="flex items-center border border-gray-300 rounded-md px-1.5 hover:bg-gray-200"><Inbox strokeWidth={1.5} size={15}/> </button>
            <button className="flex items-center bg-transparent rounded-md px-1.5 hover:bg-gray-200"><CircleUser strokeWidth={1.5} size={30}/> </button>
        </ul>
      </div>
    </header>
  );
}
export default Header;
