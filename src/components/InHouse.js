import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";

class InHouse extends Component {
  render() {
    return (
      <div>
        INHOUSE
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
              <th scope="col">Email</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {this.props.quotes.map((quote, i) => {
              return (
                <tr>
                  <th scope="row">{i+1}</th>
                  <td>{quote.name}</td>
                  <td>{quote.desc}</td>
                  <td>${quote.price}</td>
                  <td>{quote.email}</td>
                  <td>{quote.completed ? 'Sanctioned' : 'Unresolved' }</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    quotes: state.quoteReducer.quotes
  };
}

export default connect(mapStateToProps)(InHouse);
