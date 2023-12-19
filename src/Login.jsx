import { Link } from "react-router-dom";
export default function Login(params) {

    function HandleSubmit(e) {
        e.preventDefault();
        const contentArray = Array.from(e.target.elements)
        let content = contentArray.filter(
            content => {
                if (content.type !== "submit") {
                    return content
                }
            }
        ).map((content) => [content.id, content.value])

        content = Object.fromEntries(content);

    }

    return (
        <form className="h-screen flex items-center justify-center" autoComplete="off" onSubmit={HandleSubmit}>
            <div className="border shadow-blue-300 shadow rounded-md h-80 w-80 pt-12 px-4 space-y-6 relative">
                <div className="flex flex-col gap-1">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="rounded-md" className="text-slate-900 rounded" placeholder="Enter Username" id="username" />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="rounded-md" className="text-slate-900 rounded" placeholder="Enter Password" id="password" />
                </div>
                <button className="border py-2 px-4 ms-[198px] bg-slate-800 text-slate-100 shadow-sm shadow-blue-50 font-bold rounded">Login</button>
                <Link to="/" className="text-red-400 hover:text-red-600 absolute top-[290px] left-0">Need to create an account</Link>
            </div>
        </form>
    )
}

