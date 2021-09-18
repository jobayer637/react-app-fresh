import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { RootContextProvider } from '../context-provider/RootContextProvider'
import AuthGurd from '../protected-route/AuthGurd'

import Navigation from './Navigation'
import Home from './Home'
import Blog from './Blog'
import About from './About'
import Contact from './Contact'
import Login from './Login'

function Root() {
    return (
        <div>
            <RootContextProvider>
                <BrowserRouter>
                    <Navigation />
                    <Switch>
                        <AuthGurd exact path="/" component={Home} />
                        <AuthGurd exact path="/blog" component={Blog} />
                        <AuthGurd exact path="/about" component={About} />
                        <AuthGurd exact path="/contact" component={Contact} />
                        <Route exact path="/login" component={Login} />
                    </Switch>
                </BrowserRouter>
            </RootContextProvider>
        </div>
    )
}

export default Root

