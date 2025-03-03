import { MonitorSmartphone, CircleUser, SendHorizonal } from "lucide-react"
function Body(){
    return(
        <div className="flex h-full">
            <aside className="w-85 h-full justify-between px-6 py-8 border-r-1 border-gray-200">
                <div className="flex w-full justify-between items-center">
                    <ul className="flex w-full items-center justify-between mt-6">
                    <span className="text-sm font-semibold">Top repositories</span>
                    <button className="flex items-center bg-green-600 w-16 rounded-md p-1 text-white text-xs"><MonitorSmartphone size={20} className="mx-1"/>New</button>
                    </ul>
                </div>
                <input type="text" placeholder="Find a repository" className="text-sm mt-2 p-1 rounded-md w-full border border-gray-400 bg-gray-200"></input>
                <ul className="mt-4 space-y-2">
                    <li className="flex items-center text-sm text-black hover:underline"><CircleUser className="mr-1" strokeWidth={1.5} size={20}/><a>User/repo1</a></li>
                    <li className="flex items-center text-sm text-black hover:underline"><CircleUser className="mr-1" strokeWidth={1.5} size={20}/><a>User/repo2</a></li>
                    <li className="flex items-center text-sm text-black hover:underline"><CircleUser className="mr-1" strokeWidth={1.5} size={20}/><a>User/repo3</a></li>
                </ul>
            </aside>
            
            <div className="flex grow px-4">
                <div className="my-6 ml-35">
                    <input type="text" placeholder="Ask Copilot" className="w-215 font-serif bg-white text-sm rounded-xl border border-gray-300 text-black py-3 px-4"></input>
                    <SendHorizonal/>
                </div>
            </div>

            <div>

            </div>
        </div>
    )
}
export default Body