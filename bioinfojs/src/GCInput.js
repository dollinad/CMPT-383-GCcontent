import React, { Component } from 'react'
import axios from "axios"
import { API_URL } from "./constants/index.js"
import { Row, Col, Container } from 'react-bootstrap';

import GCOutput from "./GCOutput"
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';

class GCInput extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: '',
            isVisible: false
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }


    handleSubmit = e => {
        this.setState({isVisible: true})
        e.preventDefault()
        console.log(this.state)
        axios.post(API_URL, this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
        
    }


    handleChange = e => {
        e.target.value = e.target.value.replace(/[^a,c,g,t,A,C,G,T]/g,'')
        this.setState({ value: e.target.value });
        this.setState({ isVisible: false})
    }

    handleKeyUp = e => {
        e.target.value = e.target.value.replace(/[^a,c,g,t,A,C,G,T]/g,'')
    }

    
    render() { 
        return (
            <div>
                <p> Please enter your input DNA sequence (an array of A, T, G and C)</p>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <textarea
                            type="text" 
                            name="value"
                            style={{width:'350px', height:'250px'}}
                            placeholder="DNA sequence comprising of A, T, G and C"
                            value={this.state.value}
                            onChange={this.handleChange} 
                            required
                            onKeyUp={this.handleKeyUp}
                            rows="3"
                        />
                        <p><button type ="submit">Submit</button></p>
                        {console.log(this.state.isVisible)}
                        { this.state.isVisible && <GCOutput/>  }
                    </div>
                </form>
                
            </div>
        )
    }
}
export default GCInput