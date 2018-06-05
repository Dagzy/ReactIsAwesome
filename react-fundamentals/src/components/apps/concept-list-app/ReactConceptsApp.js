import React, {Component} from 'react';
import _ from 'lodash';
import {concepts} from './concepts';
import ConceptList from './ConceptList'
export default class ReactConceptsApp extends Component {
    constructor() {
        super();
        this.state = {
            concepts: concepts
        }; 
    }
        createConcept(text) {
        let tempState = this.state.concepts
        tempState.push({
            text,
            done: false
        });
        this.setState({concepts: tempState});
    }
    render() {
        return (
            <div className="main">
                <div className="mainDiv">
                    <h1>Concept List App</h1>
                    <p>Use the list below to toggle concepts that you do or do not understand. Note that this will update when you refresh the page.</p>
                    <h2>General Concepts</h2>
                    {this.state.concepts}
                </div>
            </div>
        );
    }
}