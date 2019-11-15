import React, { Component } from 'react'
import {withRouter} from 'react-router';

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
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>$1,000.00</td>
                  <td>mark@gmail.com</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>$1,000.00</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>$1,000.00</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
            </div>
        )
    }
}

export default withRouter(InHouse)
