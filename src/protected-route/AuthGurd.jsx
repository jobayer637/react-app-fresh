import React, {Component, useContext} from 'react'
import { Route, Redirect } from 'react-router-dom'
import { RootContext } from '../context-provider/RootContextProvider'

const AuthGurd = ({component: Component, ...rest}) => {
    const {vAuth} = useContext(RootContext)
    const [auth, setAuth] = vAuth

    return (
        <Route {...rest} render={(props) => {
            return auth.isAuth ? <Component {...props} /> : <Redirect to={{
                pathname: '/login',
                state: {from: props.location}
            }} />
        }} />
    )
}

export default AuthGurd
