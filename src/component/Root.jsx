import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Navigation from './Navigation'
import Home from './Home'
import Blog from './Blog'
import About from './About'
import Contact from './Contact'

function Root() {
    return (
        <div>
            <BrowserRouter>
                <Navigation />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/blog" component={Blog} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Root

