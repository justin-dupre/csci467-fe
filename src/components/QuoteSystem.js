import React, { Component } from "react";
import axios from "axios";

export default class QuoteSystem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customerName: "",
      description: "",
      price: "",
      customers: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/users")
      .then((response) =>  {
        this.setState({
          customers: response.data
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  nameChange(e) {
    this.setState({
      customerName: e.target.value
    });
  }

  descChange(e) {
    this.setState({
      description: e.target.value
    });
  }

  priceChange(e) {
    this.setState({
      price: e.target.value
    });
  }
  render() {
    return (
      <React.Fragment>
        <form className="d-md-block mx-sm-2 mx-md-5">
          <div className="form-group">
            <label for="exampleFormControlInput1">Customer Name</label>
            <select
              class="form-control"
              id="exampleFormControlSelect1"
              onChange={e => this.nameChange(e)}
            >
              {this.state.customers.map((value, index) => {
                return <option>{value.name}</option>;
              })}
            </select>
          </div>
          <div className="form-group">
            <label for="exampleFormControlInput1">Description</label>
            <textarea
              onChange={e => this.descChange(e)}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="1"
            ></textarea>
          </div>
          <div className="form-group">
            <label for="exampleFormControlInput1">Price</label>
            <input
              onChange={e => this.priceChange(e)}
              type="number"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="0"
            />
          </div>
        </form>
        <div>{"Name : " + this.state.customerName}</div>

        <div>{"Desc : " + this.state.description}</div>
        <div>{"Price : " + this.state.price}</div>
      </React.Fragment>
    );
  }
}
