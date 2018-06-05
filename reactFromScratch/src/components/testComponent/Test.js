import React, {Component} from 'react';
import ThisTest from './Testing';
class Test extends Component {
    constructor(props) {
        super(props)
        console.log(props);
    }
    render() {
        return (
            <ul>
            {this.props.name.map(names => {return <li key={names.name}>{names.name}</li>})}
            <ThisTest />
            </ul>
        // <li>{this.props.name}</li>
        )
    }
}
export {Test};