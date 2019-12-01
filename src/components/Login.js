import React, { Component } from "react";
import { connect } from "react-redux";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      password: ""
    };
  }

  idChange(e) {
    this.setState({
      id: e.target.value
    });
  }

  passwordChange(e) {
    this.setState({
      password: e.target.value
    });
  }
  login() {
    let obj = this.props.associates.find(o => o.id === this.state.id);

    if (obj && obj.password === this.state.password) {
      this.props.dispatch({
        type: "SUCCESS"
      });
    }
  }
  render() {
      console.log(this.props.auth);
      
    return (
      <div>
        <h2>LOGIN TO ASSOCIATE ACCOUNT</h2>
        <form className="d-md-block mx-sm-2 mx-md-5" id="login">
          <div className="form-group">
            <label for="exampleFormControlInput1">ID</label>
            <select
              class="form-control"
              id="exampleFormControlSelect1"
              onChange={e => this.idChange(e)}
            >
              {this.props.associates.map((value, index) => {
                return <option>{value.id}</option>;
              })}
            </select>
          </div>
          <div className="form-group">
            <label for="exampleFormControlInput1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={e => this.passwordChange(e)}
            />
          </div>
        </form>

        <div className="submitButton" onClick={() => this.login()}>
          Login
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    associates: state.associateReducer.associates,
    auth: state.authReducer.auth
  };
}

export default connect(mapStateToProps)(Login);
