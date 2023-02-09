
const Login = () => {
    return (
        <div className="w-[40%] max-auto mx-auto p-4">
            <h1 className="text-2xl text-center">QA ASSISTANT</h1>
            <div className="p-4 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className = "block text-gray-700 text-sm font-bold mb-2 p-4" for="Username"> Username </div>
                <form>
                    <div className="p-2">
                    <input className="shadow appearance-none border-rounded w-full p-4 leading-tight" type="text" placeholder="Enter username" required />
                    </div>
                    <div className="p-2">
                    <div className = "block text-gray-800 text-sm font-bold mb-2 p-4" for="Password"> Password </div>
                    <input className="shadow appearance-none border-rounded w-full p-4 leading-tight w-full p-4" type="password" placeholder="Enter password" required />
                    </div>
                    <div>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;