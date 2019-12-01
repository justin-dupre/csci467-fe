import React, { Component } from 'react';
import { connect } from "react-redux";
import check from '../images/check.png';
import remove from '../images/remove.png'

class Admin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedAssociate: {}
        }
    }

    openModal(associate) {
        console.log(associate);
        
        this.setState({
            selectedAssociate: associate
        })
    }

    valueChange(e, type) {

        this.setState({
            selectedAssociate: {
                ...this.state.selectedAssociate,
                [type]: type === "admin" ?  e.target.checked : (type === "commission" ? parseFloat(e.target.value) : e.target.value)
            }
        }, console.log(this.state.selectedAssociate)
        )



    }


    saveChanges() {
        let test = false;
        Object.keys(this.state.selectedAssociate).map((key, index) => {

            if (this.state.selectedAssociate[key] === "" || (this.props.associateLoggedIn.id === this.state.selectedAssociate.id && this.props.associateLoggedIn.admin !== this.state.selectedAssociate.admin)) {
                test = true;
            }

        });

        if (test) {
            window.alert('Error Updating Associate Info. You either left a field empty or tried removing your own admin rights.')
            return
        }




        this.props.dispatch({
            type: "EDIT_ASSOCIATE",
            payload: this.state.selectedAssociate
        });

        this.setState({
            selectedAssociate: {}
        })

    }
    render() {

        
        

        if (this.props.associateLoggedIn.admin) {
            return (
                <React.Fragment>
                    <table class="table table-striped mt-5">
                        <thead class="thead-light">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Commission</th>
                                <th scope="col">Admin</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.associates.map((associate, i) => {
                                return (
                                    <tr className="myhover" data-toggle="modal" data-target="#exampleModal" onClick={() => this.openModal(associate)}>
                                        <th className="truncate" scope="row">{associate.id} </th>
                                        <td className="truncate">{associate.name}</td>
                                        <td className="truncate">${associate.commission.toFixed(2)}</td>
                                        <td className="truncate">{<img style={{ width: '25px' }} src={associate.admin ? check : remove} />}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>


                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Edit Info for {this.state.selectedAssociate.name}</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <form class="">

                                        <div className="mb-2 ml-2 form-group">
                                            Name: <input onChange={(e) => this.valueChange(e, 'name')} type="text" value={this.state.selectedAssociate.name} />
                                        </div>
                                        <div className="mb-2 ml-2 form-group">
                                            Password: <input onChange={(e) => this.valueChange(e, 'password')} type="text" value={this.state.selectedAssociate.password} />
                                        </div>

                                        <div className="mb-2 ml-2 form-group">
                                        Commission: <input onChange={(e) => this.valueChange(e, 'commission')} type="number" value={this.state.selectedAssociate.commission} />
                                        </div>

                                        <div class="form-check ml-2 form-group">
                                            <input class="form-check-input" onChange={(e) => this.valueChange(e, 'admin')} type="checkbox" value="" id="sanctionCheck" checked={this.state.selectedAssociate.admin} />
                                            <label class="form-check-label" for="defaultCheck1">
                                                Admin
                                        </label>
                                        </div>
                                    </form>

                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button onClick={() => this.saveChanges()} data-dismiss="modal" type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </React.Fragment>
            )
        } else {
            return (
                <div>Please login as an admin to view this page.</div>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        associates: state.associateReducer.associates,
        associateLoggedIn: state.authReducer.associateLoggedIn
    };
}

export default connect(mapStateToProps)(Admin);
