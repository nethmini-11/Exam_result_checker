import React, { Component } from "react";
import ResultDataService from "../services/result-service";
import "../App.css";
export default class AddResult extends Component {
  constructor(props) {
    super(props);
    
    this.saveResult = this.saveResult.bind(this);
    this.newResult = this.newResult.bind(this);

    this.state = {
      id: null,
      name: "",
      index: "", 
      maths:"",
      science:"",
      english:"",
      it:"",
      finalized: false,
    };
  }

  onInputValueChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
}


  saveResult() {
    var data = {
      name: this.state.name,
      index: this.state.index,
      maths:this.state.maths,
      science:this.state.science,
      english:this.state.english,
      it:this.state.it,
    };

    ResultDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          index: response.data.index,
          maths: response.data.maths,
          science: response.data.science,
          english: response.data.english,
          it: response.data.it,
          finalized: response.data.finalized,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newResult() {
    this.setState({
      id: null,
      name: "",
      index: "", 
      maths:"",
      science:"",
      english:"",
      it:"",
      finalized: false,

      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>result Added Successfully</h4>
            <button className="btn btn-success" onClick={this.newResult}>
              Add Result
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={this.state.name}
                name="name"
                onChange={(e) => this.onInputValueChange(e)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="index">Index</label>
              <input
                type="text"
                className="form-control"
                id="index"
                required
                value={this.state.index}
                name="index"
                onChange={(e) => this.onInputValueChange(e)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="maths">Grade Obtained For Maths</label>
              <input
                type="text"
                className="form-control"
                id="maths"
                required
                value={this.state.maths}
                name="maths"
                onChange={(e) => this.onInputValueChange(e)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="science">Grade Obtained For Science</label>
              <input
                type="text"
                className="form-control"
                id="science"
                required
                value={this.state.science}
                name="science"
                onChange={(e) => this.onInputValueChange(e)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="english">Grade Obtained For English</label>
              <input
                type="text"
                className="form-control"
                id="english"
                required
                value={this.state.english}
                name="english"
                onChange={(e) => this.onInputValueChange(e)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="it">Grade Obtained For English</label>
              <input
                type="text"
                className="form-control"
                id="it"
                required
                value={this.state.it}
                name="it"
                onChange={(e) => this.onInputValueChange(e)}
              />
            </div>


            <button onClick={this.saveResult} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
