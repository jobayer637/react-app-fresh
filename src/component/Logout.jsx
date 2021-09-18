import React, {useContext} from 'react'
import { RootContext } from '../context-provider/RootContextProvider'
import { Redirect } from 'react-router-dom'
import {Nav} from 'react-bootstrap'

function Logout() {
    const {vAuth} = useContext(RootContext)
    const [auth, setAuth] = vAuth

    const btn = {
        cursor: 'pointer'
    }
    const navStyle ={
        color: 'white',
        textDecoration: 'none',
        margin: '0px 10px',
        border: '1px solid black',
        padding: '5px 10px',
        backgroundColor: 'indigo'
    }

    const handleLogout = () => {
        setAuth({
            isAuth: false
        })
    }

    if(!auth.isAuth) {
        return <Redirect to='/login' />
    }

    return (
        <div>
            
            <Nav style={navStyle}>
                <a onClick={handleLogout} style={btn}>Logout</a>
            </Nav>
        </div>
    )
}

export default Logout
