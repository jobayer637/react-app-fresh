import React, { Component, useContext } from 'react'
import { RootContext } from '../context-provider/RootContextProvider'

export class Blog extends Component {
    static contextType = RootContext
    render() {
        const { vAuth } = this.context
        const [auth, setAuth] = vAuth
        console.log(auth)
        return (
            <div>
                Blog page
            </div>
        )
    }
}

export default Blog
