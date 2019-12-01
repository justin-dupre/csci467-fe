import React, { Component } from 'react'
import { connect } from "react-redux";

class Welcome extends Component {
    render() {
        return (
            <div text-center>
                Welcome, {this.props.user.name}
            </div>
        )
    }
}



function mapStateToProps(state) {
    return {
      user: state.authReducer.associateLoggedIn
    };
  }
  
  export default connect(
    mapStateToProps
  )(Welcome);
  
