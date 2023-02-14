
const Login = () => {
    return (
        <section className="h-full gradient-form bg-gray-200 h-screen">
        <div className="w-[40%] max-auto mx-auto p-4">
            <div className="container py-2 px-6 h-full"></div>
            <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800"></div>
            <div className="p-4 bg-white shadow-md border rounded px-8 pt-6 pb-8 mb-4 mt-4">
            <div className= "block text-gray-700 text-sm font-bold mb-2 p-4" for="Username"> Username </div> 
                <form>
                    <div className="p-2">
                    <input className="shadow appearance-none border rounded w-full p-4 leading-tight" type="text" placeholder="Enter username" required />
                    </div>
                    <div className="p-2">
                    <div className = "block text-gray-800 text-sm font-bold mb-2 p-4" for="Password"> Password </div>
                    <input className="shadow appearance-none border rounded w-full p-4 leading-tight w-full p-4" type="password" placeholder="Enter password" required />
                    </div>
                    <div className="p-4"></div>
                    <div className="flex items-center justify-between">
                        <button className= "bg-blue-500 hover:bg-blue-700  w-[60%] mx-auto text-white font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline" type="button"> login </button>
                    </div>
                </form>
            </div>
        </div>
        </section>
    )
}

export default Login;