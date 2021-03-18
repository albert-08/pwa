import React from 'react'
import { render } from 'react-dom'

export default class IfOffline extends React.Component {

    constructor(props) {
        super(props)
        this.state = { onLine: navigator ? navigator.onLine: true}
    }

    componentDidMount() {
        if( ! window ) return
        window.addEventListener('online', this.goOnLine)
        window.addEventListener('offline', this.goOffLine)
    }

    componentWillUnmount() {
        window.removeEventListener('online', this.goOnLine)
        window.removeEventListener('offline', this.goOffLine)
    }

    goOnLine = () => this.setState({ onLine: true })
    goOffLine = () => this.setState({ onLine: false })

    render() {
        const { children } = this.props
        const { onLine } = this.state

        if(onLine) return null
        return <span>{ children }</span>
    }
}