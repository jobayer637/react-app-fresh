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


// import React, {useContext} from 'react'
// import { RootContext } from '../context-provider/RootContextProvider'
// import { Redirect } from 'react-router-dom'
// import {Nav} from 'react-bootstrap'

// function Logout() {
//     const {vAuth} = useContext(RootContext)
//     const [auth, setAuth] = vAuth

//     const btn = {
//         cursor: 'pointer'
//     }
//     const navStyle ={
//         color: 'white',
//         textDecoration: 'none',
//         margin: '0px 10px',
//         border: '1px solid black',
//         padding: '5px 10px',
//         backgroundColor: 'indigo'
//     }

//     const handleLogout = () => {
//         setAuth({
//             isAuth: true
//         })
//     }

//     if(auth.isAuth) {
//         return <Redirect to='/login' />
//     }

//     return (
//         <div>
            
//             <Nav style={navStyle}>
//                 <a onClick={handleLogout} style={btn}>Login</a>
//             </Nav>
//         </div>
//     )
// }

// export default Logout