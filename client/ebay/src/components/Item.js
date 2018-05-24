import React, { PureComponent } from 'react'
import {connect} from 'react-redux'

export class Item extends PureComponent {
render() {
    return (
        <div>
            <h2>Title:</h2>
            <h2>Price:</h2>
            <h2>more</h2>
        </div>
    )
}
}