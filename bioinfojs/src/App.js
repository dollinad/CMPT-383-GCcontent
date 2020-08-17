//for commit
import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import video from './videos/dna5.gif'
import { Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import GCInput from './GCInput'
import GCOutput from './GCOutput'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Jumbotron>
          <h1>Bioinformatics Learning Tools 
              <img src={video} alt="gif"/>
          </h1>
          <Tabs defaultActiveKey="Description">
            <Tab eventKey="Description" title="Description">
              <p className="App-Description"> 
                <br/> This website aims to aid the understanding of fundamental concepts in Bioinformatics.
                      Some topics covered are: <br/> 1) Calculation of CG content in a given sequence <br/> 2) Transcription.
              </p>
            </Tab>
            <Tab eventKey="GC Content" title="GC Content">
              <p>
                <br/> The GC content in a genome is expressed as the propotion of guanine and cytosine bases in the DNA sequence. That is, it is the sum of guanine bases and cytosine bases 
                divided by the total number of bases in the sequence. This calculation does not only have deep ecological revelance but is also 
                one of the major factors that help in detection of mutations in the sequence.<br/>
              </p>
              <GCInput/>
            </Tab>
          </Tabs>
        </Jumbotron>
      </header>
    </div>
  );
}

export default App;
