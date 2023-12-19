import { useLocation } from "react-router-dom"
import plannerSvgUrl from './Assets/svg/plan-list-svgrepo-com.svg'

export default function Home(params) {
    let { state } = useLocation()
    state.loginState = state.loginState ?? false;

    return (
        <div className="h-screen bg-white text-slate-800">
            <header className="flex w-full justify-between px-10 py-5 bg-slate-700   text-white mb-5 items-center">
                <h1 className="font-serif font-bold text-2xl italic">{state.username ?? "Favour"} Daily Plan</h1>
                <button className="font-sans py-2 px-6 bg-blue-700 rounded-md text-slate-50">Plan Your Day</button>
            </header>
            <section className="flex justify-center items-center h-96 flex-col">
                {/* <form className="w-[400px] flex flex-col gap-7">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="PlanName" className="text-lg font-bold">Plan Name</label>
                        <input type="text" name="" id="Plan Name" className="rounded" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="Deadline" className="font-bold text-lg">Deadline</label>
                        <input type="datetime-local" name="" id="Deadline" className="rounded" />
                    </div>
                    <div className="flex justify-end">
                        <button className="bg-blue-800 text-white px-4 py-2 rounded">Commit</button>
                    </div>
                </form> */}
                <img src={plannerSvgUrl} alt="lovely Blue Planner Image" className="block mt-96 mb-0" />
                <p className="relative bottom-12 font-bold text-xl">Make A Play Today</p>
            </section>
        </div>
    )
}