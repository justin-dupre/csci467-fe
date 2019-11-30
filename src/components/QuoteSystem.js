import React, { Component } from "react";
import axios from "axios";
import { connect } from 'react-redux';

class QuoteSystem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customerName: "",
      description: "",
      price: "",
      customers: [],
      email: ""
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/users")
      .then(response => {
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

  emailChange(e) {
    this.setState({
      email: e.target.value
    });
  }

  addQuote() {
    this.props.dispatch({
      type: "ADD_QUOTE",
      payload: {
        name: this.state.customerName,
        desc: this.state.description,
        price: this.state.price,
        email: this.state.email
      }
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.customers !== this.state.customers) {
      this.setState({
        customerName: this.state.customers[0].name
      });
    }
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
              placeholder="Enter quote description"
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
          <div className="form-group">
            <label for="exampleFormControlInput1">Email</label>
            <input
              onChange={e => this.emailChange(e)}
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div onClick={() => {this.addQuote()}}>TESTST SLICK</div>
        </form>
        <div>{"Name : " + this.state.customerName}</div>

        <div>{"Desc : " + this.state.description}</div>
        <div>{"Price : " + this.state.price}</div>
        <div>{"Email : " + this.state.email}</div>
      </React.Fragment>
    );
  }
}


function mapStateToProps(state) {
  return {
    quotes: state.quoteReducer.quotes,
  };
}

export default connect(
  mapStateToProps
)(QuoteSystem);
