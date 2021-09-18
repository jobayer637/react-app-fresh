import React, {useContext} from 'react'
import { RootContext } from '../context-provider/RootContextProvider'
import { Redirect } from 'react-router-dom'

const Login = (props) => {
    const {vAuth} = useContext(RootContext)
    const [auth, setAuth] = vAuth

    console.log(props)
    const prePath = props.location.state ? props.location.state.from.pathname : '/login'

    const handleLogin = () => {
        setAuth({
            isAuth: true
        })
    }

    if(auth.isAuth) {
        return <Redirect to={prePath} />
    }

    return (
        <div className="my-5">
            <button onClick={handleLogin} className="btn btn-outline-dark">Login</button>
        </div>
    )
}

export default Login
