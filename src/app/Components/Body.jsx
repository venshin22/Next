import {
  MonitorSmartphone,
  CircleUser,
  SendHorizonal,
  ListFilter,
  Ellipsis,
  Sparkles,
  ChevronsLeftRight,
  Wrench,
  MoveRight
} from "lucide-react";

function Body() {
  return (

    
    <div className="flex h-full py-5">

      <aside className="w-84 shrink h-content justify-between px-6 py-8 border-r-1 border-gray-200">
        <div className="flex w-full justify-between items-center">
          <ul className="flex w-full items-center justify-between mt-6">
            <span className="text-sm font-semibold">Top repositories</span>
            <button className="flex items-center bg-green-600 w-16 rounded-md p-1 hover:cursor-pointer text-white text-xs hover:bg-green-700">
              <MonitorSmartphone size={20} className="mx-1" />
              New
            </button>
          </ul>
        </div>
        <input
          type="text"
          placeholder="Find a repository"
          className="text-sm mt-2 px-2 py-1 rounded-md w-full border border-gray-400 bg-gray-100"
        ></input>
        <ul className="mt-4 space-y-2">
          <li className="flex items-center text-sm text-black hover:underline">
            <CircleUser className="mr-1" strokeWidth={1.5} size={20} />
            <a>User/repo1</a>
          </li>
          <li className="flex items-center text-sm text-black hover:underline">
            <CircleUser className="mr-1" strokeWidth={1.5} size={20} />
            <a>User/repo2</a>
          </li>
          <li className="flex items-center text-sm text-black hover:underline">
            <CircleUser className="mr-1" strokeWidth={1.5} size={20} />
            <a>User/repo3</a>
          </li>
        </ul>
      </aside>

      <div className="flex shrink-0 pl-38.5 py-5 flex-col h-full">
        <div className="flex shrink my-6 border border-gray-300 rounded-xl h-auto">
          <input
            type="text"
            placeholder="Ask Copilot"
            className="w-215 h-11 font-serif bg-white text-sm rounded-s-xl text-black py-3 px-4"
          ></input>

          <div className="flex justify-center items-center h-11 rounded-e-xl">
            <button className=" p-1 mr-2 rounded-md hover:cursor-pointer hover:bg-gray-100">
              <SendHorizonal color="gray" size={18} />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Home</h1>
          <button className="flex items-center justify-between text-sm bg-gray-100 w-20 h-8 px-2.5 rounded-md border border-gray-400 hover:bg-gray-200 hover:cursor-pointer">
            <ListFilter className="space-x-1.5" color="black" size={16} />{" "}
            Filter{" "}
          </button>
        </div>

        <div className="flex items-center justify-between pt-4 pb-1.5">
          <p className="flex items-center text-md text-gray-600">
            {" "}
            <Sparkles
              className="bg-gray-200 rounded-full mr-1"
              color="black"
              strokeWidth={1}
              size={20}
            />
            Learn with a tutorial project
          </p>
          <button className="p-1 hover:cursor-pointer hover:bg-gray-200 rounded-md">
            <Ellipsis />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div className="border border-gray-400 rounded-md p-4 w-110 mr-2 h-24 shadow-md hover:underline">
            <span className="text-blue-500">Introduction to Github</span>
            <p className="text-sm text-gray-600">
              Get started using GitHub in less than an hour.
            </p>
          </div>

          <div className="border border-gray-400 rounded-md p-4 w-110 ml-2 h-24 shadow-md hover:underline">
            <span className="text-blue-500">GitHub Pages</span>
            <p className="text-sm text-gray-600">
              Create a site or blog from your GitHub repositories with GitHub
              Pages.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="border border-gray-400 rounded-md p-4 w-110 mr-2 h-24 shadow-md hover:underline">
            <span className="text-blue-500">Code with Copilot</span>
            <p className="text-sm text-gray-600">
              Develop with AI-powered code suggestions using GitHub Copilot,
              Codespaces, and VS Code.
            </p>
          </div>

          <div className="border border-gray-400 rounded-md p-4 w-110 ml-2 h-24 shadow-md hover:underline">
            <span className="text-blue-500">Hello GitHub Actions</span>
            <p className="text-sm text-gray-600">
              Create a GitHub Action and use it in a workflor.
            </p>
          </div>
        </div>

        <p className="mt-4 text-sm text-blue-600 hover:underline">
          See more tutorial projects
        </p>

        <div className="flex items-center justify-between pt-4 pb-1.5">
          <p className="flex items-center text-md text-gray-600">
            {" "}
            <ChevronsLeftRight
              className="bg-gray-200 rounded-full mr-1"
              color="black"
              strokeWidth={1}
              size={20}
            />
            Start writing code
          </p>
          <button className="p-1 hover:cursor-pointer hover:bg-gray-200 rounded-md">
            <Ellipsis />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-col border border-gray-400 rounded-md p-4 w-110 mr-2 h-84 shadow-md text-sm space-y-2">
            <span className="text-black font-semibold">
              Start a new repository for User
            </span>
            <p className=" text-gray-600">
              A repository contains all of your projec's files, revision
              history, and collaborator discussion.
            </p>
            <span className="font-semibold">Repository name *</span>
            <input
              className="border border-gray-400 p-1 max-w-full rounded-md"
              type="text"
              placeholder="name your new repository..."
            ></input>
            <div className="mt-1">
              <input type="radio" value="" ></input>
              <label className="px-2">Public</label>
            </div>
            <div>
              <input type="radio" value=""></input>
              <label className="px-2">Private</label>
            </div>
            <button className="bg-green-700 text-white p-1 rounded-md w-45 my-4 hover:cursor-pointer hover:bg-green-800">
              Create a new repository
            </button>
          </div>

          <div className="flex flex-col border border-gray-400 rounded-md p-4 w-110 ml-2 h-84 shadow-md text-sm space-y-2">
            <span className="text-black font-semibold">
              Introduce yourself with a profile README
            </span>
            <p className="text-gray-600">
              Share information about yourself by creating a profile README,
              which appears at the top of your profile page.
            </p>

            <div className="flex flex-col bg-gray-100  border border-gray-300 rounded-lg m-2">
              <div className="bg-white flex items-center justify-between p-2 h-10">
                <p>User / README.md</p>
                <button className="bg-green-700 text-white p-1 rounded-md w-16 my-4 hover:cursor-pointer hover:bg-green-800">
                  Create
                </button>
              </div>

              <div className="py-2 ml-8 border border-t-gray-300">
                <ul className="list-decimal bg-gray-100">
                  <li>Hi, I'm Raven</li>
                  <li>I'm interested in ...</li>
                  <li>I'm currently learning React and Tailwind CSS</li>
                  <li>I'm looking to collaborate on ...</li>
                  <li>How to reach me ...</li>
                  <li>Pronouns: ...</li>
                  <li>Fun fact: ...</li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 pb-1.5">
          <p className="flex items-center text-md text-gray-600">
            {" "}
            <Wrench
              className="bg-gray-200 rounded-full mr-1"
              color="black"
              strokeWidth={1}
              size={20}
            />
            Use tools of the trade
          </p>
          <button className="p-1 hover:cursor-pointer hover:bg-gray-200 rounded-md">
            <Ellipsis />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div className="border border-gray-400 rounded-md p-4 w-110 mr-2 h-24 shadow-md space-y-2.5">
            <span className="text-black">Manage projects for developers</span>
            <p className="text-sm text-gray-600">
              Get started using GitHub in less than an hour.
            </p>
          </div>

          <div className="border border-gray-400 rounded-md p-4 w-110 ml-2 h-24 shadow-md space-y-2.5">
            <span className="text-bluack">Write code in your web browser</span>
            <p className="text-sm text-gray-600">
              Use the github.dev web-based editor from your repository or pull
              request to create and commit changes.
            </p>
          </div>
        </div>
      </div> 

        
        <div className="flex flex-col ">
            <div className="border border-gray-300 rounded-md p-4 w-90 ml-8 mt-11 h-95 shadow-md">
            <span className="text-black text-sm font-semibold">
              Latest changes
            </span>
            <div className="pl-8 pt-4 items-center justify-center">
                <p className="text-xs text-gray-400 mt-1">Yesterday</p>
                <span className="text-sm text-gray-800 mb-2.5">JetBrians Copilot code referencing support is generally avalable</span>

                <p className="text-xs text-gray-400 mt-2">3 days ago</p>
                <span className="text-sm text-gray-800 mb-2.5">Copilot Workspace: Showing quota limits, issues in dashboard, and UX improvements</span>

                <p className="text-xs text-gray-400 mt-2">3 days ago</p>
                <span className="text-sm text-gray-800 mb-2.5">Mobile monthly: February's general availability and more</span>

                <p className="text-xs text-gray-400 mt-2">4 days ago</p>
                <span className="text-sm text-gray-800 mb-2.5">Java, CSRF, Go 1.24 nad C# 13 language features support available in CodeQL 2.20.5</span>
                
                <div className="flex items-center text-xs text-gray-400 mt-2 hover:underline hover:text-blue-600">
                <p >View change log  </p>
                <MoveRight className="ml-2" size={15}/>
                </div>
            </div>
            </div>

            <div className="border border-gray-300 rounded-md p-4 w-90 ml-8 mt-6 h-95 shadow-md">
            <span className="text-black text-sm font-semibold">
              Explore repositories
            </span>
            <div className="pl-8 pt-4 items-center justify-center">
                <p className="text-xs text-gray-400 mt-1">Yesterday</p>
                <span className="text-sm text-gray-800 mb-2.5">JetBrians Copilot code referencing support is generally avalable</span>

                <p className="text-xs text-gray-400 mt-2">3 days ago</p>
                <span className="text-sm text-gray-800 mb-2.5">Copilot Workspace: Showing quota limits, issues in dashboard, and UX improvements</span>

                <p className="text-xs text-gray-400 mt-2">3 days ago</p>
                <span className="text-sm text-gray-800 mb-2.5">Mobile monthly: February's general availability and more</span>

                <p className="text-xs text-gray-400 mt-2">4 days ago</p>
                <span className="text-sm text-gray-800 mb-2.5">Java, CSRF, Go 1.24 nad C# 13 language features support available in CodeQL 2.20.5</span>
                
                <div className="flex items-center text-xs text-blue-400 mt-2 hover:underline hover:text-blue-600">
                <p >Explore more  </p>
                <MoveRight className="ml-2" size={15}/>
                </div>
            </div>
            </div>

        </div>
    </div> //Emd of Whole Page

  );
}
export default Body;
