import { List } from "./list"
import NewButton from "./NewButton"


export const SideBar = ()=>{
    return (
        <aside className="fixed z-1 left-0 bg-blue-950 h-full w-15 flex p-3 flex-col gap-y-4 text-white">
            <List/>
            <NewButton />
        </aside>
    )
}