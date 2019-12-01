import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import pencil from '../images/pencil.png';

class InHouse extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedQuote: {}
    }
  }

  changeSelectedQuote(quote) {
    this.setState({
      selectedQuote: quote
    })
  }

  valueChange(e, type) {

    console.log(e.target.checked);

    this.setState({
      selectedQuote: {
        ...this.state.selectedQuote,
        [type]: type === 'price' ? parseFloat(e.target.value) : (type === "complete" ? e.target.checked : e.target.value)
      }
    })
  }

  saveChanges() {
    let test = false;
    Object.keys(this.state.selectedQuote).map((key, index) => {

      if (this.state.selectedQuote[key] === "" || (key === 'price' && isNaN(this.state.selectedQuote[key]))) {
        console.log(this.state.selectedQuote[key])
        test = true;
      }

    });

    if (test) {
      window.alert('Error Changing Quote.')
      return
    }

    this.props.dispatch({
      type: "EDIT_QUOTE",
      payload: this.state.selectedQuote
    });

    this.setState({
      selectedQuote: {}
    })

  }



  render() {

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-center"> 

        <h2 className="mt-3">Retrieve, Edit, and Sanction Quotes</h2>

        <table class="table table-striped mt-5">
          <thead class="thead-light">
            <tr>
              <th scope="col">Edit</th>
              <th scope="col">Name</th>
              <th scope="col">Desc.</th>
              <th scope="col">Price</th>
              <th scope="col">Email</th>
              <th scope="col">Complete</th>
            </tr>
          </thead>
          <tbody>
            {this.props.quotes.map((quote, i) => {
              console.log(quote.custid);
              
              return (
                <tr >
            <th className="truncate" scope="row">#{quote.id} {!quote.complete && <img data-toggle="modal" data-target="#exampleModal" onClick={() => this.changeSelectedQuote(quote)} style={{ width: '20px' }} src={pencil} /> }</th>
                  <td className="truncate">{quote.name}</td>
                  <td className="truncate">{quote.desc}</td>
                  <td className="truncate">${(quote.price).toFixed(2)}</td>
                  <td className="truncate">{quote.email}</td>
                  <td className="truncate">{quote.complete ? 'Yes' : 'No'}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Edit Quote</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div className="mb-2 ml-2">
                  Name: <input onChange={(e) => this.valueChange(e, 'name')} type="text" value={this.state.selectedQuote.name} />
                </div>

                <div className="mb-2 ml-2">
                  Price: <input onChange={(e) => this.valueChange(e, 'price')} type="number" value={this.state.selectedQuote.price} />
                </div>
                <div className="mb-2 ml-2">
                  Desc: <input onChange={(e) => this.valueChange(e, 'desc')} type="text" value={this.state.selectedQuote.desc} />
                </div>

                <div class="form-check ml-2">
                  <input class="form-check-input" onChange={(e) => this.valueChange(e, 'complete')} type="checkbox" value="" id="sanctionCheck" />
                  <label class="form-check-label" for="defaultCheck1">
                    Sanction Quote
                  </label>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button onClick={() => this.saveChanges()} data-dismiss="modal" type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>

      </div>
      </div>
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
