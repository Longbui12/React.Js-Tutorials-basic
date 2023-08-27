import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import * as actions from "../../store/actions";

import "./Login.scss";
import { handleLoginApi } from "../../services/userService";
// import { FormattedMessage } from "react-intl";
// import { divide } from "lodash";
// import logger from "redux-logger";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      passWord: "",
      isShowPassword: false,
      errMessage: "",
    };
  }

  handleOnchangeUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handleOnchangePassword = (event) => {
    this.setState({
      passWord: event.target.value,
    });
  };

  // cach gop ca username va password (nho la phai them name vao trong phan input neu dung cach 2 nay):
  //   handleOnchangeUsername = (event) => {
  //     this.setState({
  //       [event.target.name]: event.target.value,
  //     });
  //     console.log(event.target.value);
  //   };

  handleLogin = async () => {
    this.setState({
      errMessage: "",
    });
    // console.log(
    //   "Username : ",
    //   this.state.username,
    //   "PassWord : ",
    //   this.state.passWord
    // );
    // console.log("all state :", this.state);
    try {
      let data = await handleLoginApi(this.state.username, this.state.passWord);
      if (data && data.errCode !== 0) {
        this.setState({
          errMessage: data.message,
        });
      }
      if (data && data.errCode === 0) {
        this.props.userLoginSuccess(data.user);
        console.log("login succeeds");
      }
    } catch (error) {
      if (error.response) {
        if (error.response.data) {
          this.setState({
            errMessage: error.response.data.message,
          });
        }
      }
      //console.log(e);
      console.log("toilalong : ", error.response);
    }
  };

  handleShowHidePassword = () => {
    this.setState({
      isShowPassword: !this.state.isShowPassword,
    });
  };
  render() {
    return (
      <div className="login-background">
        <div className="login-container">
          <div className="login-content row">
            <div className="col-12 text-login">Login</div>
            <div className="col-12 form-group login-input">
              <label>Username :</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter your username"
                value={this.state.username}
                onChange={(event) => {
                  this.handleOnchangeUsername(event);
                }}
                //name="username"
              />
            </div>
            <div className="col-12 form-group login-input">
              <label>Password :</label>
              <div className="custom-input-password">
                <input
                  className="form-control"
                  type={this.state.isShowPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={this.state.passWord}
                  //name="password"
                  onChange={(event) => {
                    this.handleOnchangePassword(event);
                  }}
                />
                <span
                  onClick={() => {
                    this.handleShowHidePassword();
                  }}
                >
                  <i
                    className={
                      this.state.isShowPassword
                        ? "far fa-eye"
                        : "fas fa-eye-slash"
                    }
                  ></i>
                </span>
              </div>
            </div>
            <div className="col-12" style={{ color: "red" }}>
              {this.state.errMessage}
            </div>
            <div className="col-12 ">
              <button
                className="btn-login"
                onClick={() => {
                  this.handleLogin();
                }}
              >
                Login
              </button>
            </div>
            <div className="col-12">
              <span className="forgot-password">Forgot your password ? </span>
            </div>
            <div className="col-12 text-center mt-3">
              <span className="text-other-login">Or Login with :</span>
            </div>
            <div className="col-12 social-login">
              <i className="fab fa-google-plus-g google"></i>
              <i className="fab fa-facebook-f facebook"></i>
              <i className="fab fa-instagram instagram"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),

    //userLoginFail: () => dispatch(actions.adminLoginFail()),
    userLoginSuccess: (userInfo) =>
      dispatch(actions.userLoginSuccess(userInfo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
