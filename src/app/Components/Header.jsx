import {
  Plus,
  CircleDot,
  GitPullRequestArrow,
  Inbox,
  CircleUser,
} from "lucide-react";
import { HamburgerMenuIcon, TriangleDownIcon } from "@radix-ui/react-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function Header() {
  return (
    <header className="flex justify-between items-center bg-gray-100 border border-gray-300 h-16 px-4 py-2">
      <div className="flex items-center">
        <button className="border border-gray-300 hover:bg-gray-200 rounded-md px-2 py-2 hover:cursor-pointer">
          <HamburgerMenuIcon color="gray" strokeWidth={4} size={2} />
        </button>
        <img src="/assets/github-logo.png" className="h-8 px-4" />
        <span className="text-sm font-semibold hover:bg-gray-200 p-2 rounded-md  hover:cursor-pointer">
          Dashboard
        </span>
      </div>

      <div className="py-2">
        <ul className="flex space-x-2.5">
          <input
            type="text"
            placeholder="Search...."
            className="ring ring-gray-300 p-1 rounded-md"
          ></input>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div
                  className="flex items-center border border-gray-300 rounded-md p-2 hover:bg-gray-200 hover:cursor-pointer"
                  aria-label="Add New ..."
                >
                  <Plus strokeWidth={1.5} size={15} />{" "}
                  <TriangleDownIcon color="gray" />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add New...</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger>
                <div
                  className="flex items-center border border-gray-300 rounded-md p-2 hover:bg-gray-200 hover:cursor-pointer"
                  aria-label="Your Issues"
                >
                  <CircleDot strokeWidth={1.5} size={15} />{" "}
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Your Issues</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger>
                <div
                  className="flex items-center border border-gray-300 rounded-md p-2 hover:bg-gray-200 hover:cursor-pointer"
                  aria-label="Your pull requests"
                >
                  <GitPullRequestArrow strokeWidth={1.5} size={15} />{" "}
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Your pull requests</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger>
                <div
                  className="flex items-center border border-gray-300 rounded-md p-2 hover:bg-gray-200 hover:cursor-pointer"
                  aria-label="Notifications"
                >
                  <Inbox strokeWidth={1.5} size={15} />{" "}
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Notifications</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <button className="flex items-center bg-transparent rounded-md px-1.5 hover:bg-gray-200 hover:cursor-pointer">
            <CircleUser strokeWidth={1.5} size={30} />{" "}
          </button>
        </ul>
      </div>
    </header>
  );
}
export default Header;
