import { Link, useNavigate } from "react-router-dom";

export default function Register(params) {

    const navigate = useNavigate();

    const HandleSubmit = async (e) => {
        e.preventDefault();
        const { password, username } = e.target.elements;

        const User = {
            password: password.value,
            username: username.value
        }

        const url = 'http://localhost:4000/register';

        const customHeaders = {
            "Content-Type": "application/json",
        }

        const response = await fetch(url, {
            method: "POST",
            headers: customHeaders,
            body: JSON.stringify(User),
        });

        const json = await response.json();

        if (json.loginState) {
            navigate("/home", { state: json });
        }
    }


    return (
        <form className="h-screen flex items-center justify-center" autoComplete="off" onSubmit={HandleSubmit} >
            <div className="border shadow-blue-300 shadow rounded-md h-80 w-80 pt-12 px-4 space-y-6 relative">
                <div className="flex flex-col gap-1">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="rounded-md" className="text-slate-900 rounded" placeholder="Enter Username" id="username" />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="rounded-md" className="text-slate-900 rounded" placeholder="Enter Password" id="password" />
                </div>
                <button className="border py-2 px-4 ms-48 bg-slate-800 text-slate-100 shadow-sm shadow-blue-50 font-bold rounded">Register</button>
                <Link to="/Login" className="text-red-400 hover:text-red-600 absolute top-[305px] left-0">Already have an account</Link>
            </div>
        </form>
    )
}