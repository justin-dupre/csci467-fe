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
    this.setState({
      selectedQuote: {
        ...this.state.selectedQuote,
        [type]: e.target.value
      }
    })
  }

  saveChanges(){
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
      <div>

        <table class="table table-striped mx-2">
          <thead>
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
              return (
                <tr >
                  <th className="truncate" scope="row">#{quote.id} <img data-toggle="modal" data-target="#exampleModal" onClick={() => this.changeSelectedQuote(quote)} style={{ width: '20px' }} src={pencil} /></th>
                  <td className="truncate">{quote.name}</td>
                  <td className="truncate">{quote.desc}</td>
                  <td className="truncate">${quote.price}</td>
                  <td className="truncate">{quote.email}</td>
                  <td className="truncate">{quote.completed ? 'Y' : 'N'}</td>
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
                <div>
                  Name: <input onChange={(e) => this.valueChange(e, 'name')} type="text" value={this.state.selectedQuote.name} />
                </div>

                <div>
                  Price: <input onChange={(e) => this.valueChange(e, 'price')} type="number" value={this.state.selectedQuote.price} />
                </div>
                <div>
                  Desc: <input onChange={(e) => this.valueChange(e, 'desc')} type="text" value={this.state.selectedQuote.desc} />
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
    );
  }
}

function mapStateToProps(state) {
  return {
    quotes: state.quoteReducer.quotes
  };
}

export default connect(mapStateToProps)(InHouse);
