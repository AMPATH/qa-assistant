
const Login = () => {
    return (
        <div>
            <h1>QA assistant</h1>
            <div>
                <form>
                    <div>
                    <input type="text" placeholder="Enter username" required />
                    </div>
                    <div>
                    <input type="password" placeholder="Enter password" required />
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