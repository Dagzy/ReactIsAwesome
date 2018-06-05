import React, {Component} from 'react'
import {Test} from './testComponent/Test'
import {tests as tests} from './testComponent/tests'
class App extends Component{
    constructor(props){
        super(props) 
        this.state = {tests: tests}
    }
    render(){
        return(
            <div>
                <Test name={this.state.tests}/>
            </div>
        )
    }
}
export default App;