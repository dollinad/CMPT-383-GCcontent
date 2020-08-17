import React, { Component } from 'react'
import axios from "axios"
import { API_URL } from "./constants/index.js"
import { Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";


import GCInput from "./GCInput"
import { render } from '@testing-library/react'
import { Row, Container } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

class GCOutput extends React.Component {
    state = {
        sequences: [],
        dataBar: {
            labels: ["A", "C", "G", "T"],
            datasets: [
              {
                label: "Number of nucleotides",
                data: [1,2,3,4],
                backgroundColor: [
                  "rgba(255, 134,159,0.4)",
                  "rgba(98,  182, 239,0.4)",
                  "rgba(255, 218, 128,0.4)",
                  "rgba(113, 205, 205,0.4)",
                ],
                borderWidth: 2,
                borderColor: [
                  "rgba(255, 134, 159, 1)",
                  "rgba(98,  182, 239, 1)",
                  "rgba(255, 218, 128, 1)",
                  "rgba(113, 205, 205, 1)",
                ]
              }
            ]
          },
          barChartOptions: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              xAxes: [
                {
                  barPercentage: 1,
                  gridLines: {
                    display: true,
                    color: "rgba(0, 0, 0, 0.1)"
                  }
                }
              ],
              yAxes: [
                {
                  gridLines: {
                    display: true,
                    color: "rgba(0, 0, 0, 0.1)"
                  },
                  ticks: {
                    beginAtZero: true
                  }
                }
              ]
            }
          }
        }


    componentDidMount() {
        axios.get(API_URL)
            .then(res => {this.setState({sequences: [res.data]})
            console.log("COMING", res.data)
            console.log("SEquences", this.state.sequences)
        })
    }

    render() {
        axios.get(API_URL)
            .then(res => {this.setState({sequences: [res.data]})})
            .then(this.state.sequences.map((value) => {
                //this.setState({dataBar.datasets[0].data: [value.a, value.c, value.g, value.t]})
                this.state.dataBar.datasets[0].data = [Number(value.a), Number(value.c), Number(value.g), Number(value.t)]
            }))
        return (
            <div>
                <Row>
                    {this.state.sequences.map((value)=> {
                        return (
                            <div key={value.id}>
                                <Col>GC%: <textarea value={value.gc}/></Col>
                            </div>
                        )
                    })}
                </Row>
                <Row>
                    <MDBContainer>
                        <h3 className="mt-5">Plot</h3>
                        <Bar data={this.state.dataBar} options={this.state.barChartOptions} />
                    </MDBContainer>
                </Row>
            </div>   
        )
    }
}
        


export default GCOutput;