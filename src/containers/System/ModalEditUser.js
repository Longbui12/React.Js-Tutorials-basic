import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { emitter } from "../../utils/emitter";
import _ from "lodash";
class ModalEditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      email: "",
      passWord: "",
      firstName: "",
      lastName: "",
      address: "",
      phonenumber: "",
      gender: "",
      roleId: "",
    };
  }

  componentDidMount() {
    let user = this.props.currentUser;
    if (user && !_.isEmpty(user)) {
      this.setState({
        id: user.id,
        email: user.email,
        passWord: "hardCode",
        firstName: user.firstName,
        lastName: user.lastName,
        address: user.address,
        phonenumber: user.phonenumber,
        gender: user.gender,
        roleId: user.roleId,
      });
    }
  }

  toggle = () => {
    this.props.toggleFromParent();
  };

  handleOnchangeInput = (event, id) => {
    let copyState = { ...this.state };
    copyState[id] = event.target.value;
    this.setState({
      ...copyState,
    });
  };

  checkValidateInput = () => {
    let isValid = true;
    let arrInput = [
      "email",
      "passWord",
      "firstName",
      "lastName",
      "address",
      "phonenumber",
      "gender",
      "roleId",
    ];
    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state[arrInput[i]] && arrInput[i] !== "gender") {
        isValid = false;
        alert("Missing parameter :" + arrInput[i]);
        break;
      }
    }
    return isValid;
  };

  handleSaveUser = () => {
    let isValid = this.checkValidateInput();
    if (isValid === true) {
      // call API Edit user Modal

      this.props.editUser(this.state);
    }
  };
  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={() => {
          this.toggle();
        }}
        className="modal-user-container"
        size="lg"
      >
        <ModalHeader
          toggle={() => {
            this.toggle();
          }}
        >
          Edit a new user
        </ModalHeader>
        <ModalBody>
          <div className="modal-user-body">
            <div className="input-container">
              <label>Email</label>
              <input
                type="email"
                onChange={(event) => {
                  this.handleOnchangeInput(event, "email");
                }}
                value={this.state.email}
                disabled
              />
            </div>
            <div className="input-container">
              <label>Password</label>
              <input
                type="password"
                onChange={(event) =>
                  this.handleOnchangeInput(event, "passWord")
                }
                value={this.state.passWord}
                disabled
              />
            </div>
            <div className="input-container">
              <label>First name</label>
              <input
                type="text"
                onChange={(event) =>
                  this.handleOnchangeInput(event, "firstName")
                }
                value={this.state.firstName}
              />
            </div>
            <div className="input-container">
              <label>Last name</label>
              <input
                type="text"
                onChange={(event) =>
                  this.handleOnchangeInput(event, "lastName")
                }
                value={this.state.lastName}
              />
            </div>
            <div className="input-container max-width-input">
              <label>Address</label>
              <input
                type="text"
                onChange={(event) => this.handleOnchangeInput(event, "address")}
                value={this.state.address}
              />
            </div>
            <div className="input-container">
              <label>Phone number</label>
              <input
                type="text"
                onChange={(event) =>
                  this.handleOnchangeInput(event, "phonenumber")
                }
                value={this.state.phonenumber}
              />
            </div>
            <div className="select-container">
              <label>Gender</label>
              <select
                //name="gender"
                onChange={(event) => this.handleOnchangeInput(event, "gender")}
                value={this.state.gender}
              >
                <option value=""></option>
                <option value="1">Male</option>
                <option value="0">Female</option>
              </select>
            </div>
            <div className="select-container">
              <label>Role</label>
              <select
                //name="roleId"
                onChange={(event) => this.handleOnchangeInput(event, "roleId")}
                value={this.state.roleId}
              >
                <option>Admin</option>
                <option>Doctor</option>
                <option>Patient</option>
              </select>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            className="px-3"
            color="primary"
            onClick={() => {
              this.handleSaveUser();
            }}
          >
            Save changes
          </Button>{" "}
          <Button
            className="px-3"
            color="secondary"
            onClick={() => {
              this.toggle();
            }}
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);
