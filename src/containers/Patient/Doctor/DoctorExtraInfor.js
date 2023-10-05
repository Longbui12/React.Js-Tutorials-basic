import React, { Component } from "react";
import { connect } from "react-redux";
import "./DoctorExtraInfor.scss";
import { LANGUAGES } from "../../../utils";
import { getScheduleDoctorByDate } from "../../../services/userService";
import { FormattedMessage } from "react-intl";
class DoctorExtraInfor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowDetailInfor: false,
    };
  }

  async componentDidMount() {}

  async componentDidUpdate(prevProps, prevState, snapShot) {
    if (this.props.language !== prevProps.language) {
    }
  }

  showHideDetailInfor = (status) => {
    this.setState({
      isShowDetailInfor: status,
    });
  };
  render() {
    let { isShowDetailInfor } = this.state;
    return (
      <div className="doctor-extra-infor-container">
        <div className="content-up">
          <div className="text-address"> ĐỊA CHỈ KHÁM</div>
          <div className="name-clinic">
            Phòng khám Bệnh viện Đại học Y Dược 1
          </div>
          <div className="detail-address">
            20-22 Dương Quang Trung, Phường 12, Quận 10, Tp. HCM
          </div>
        </div>
        <div className="content-down">
          {isShowDetailInfor === false && (
            <div className="short-infor">
              GIÁ KHÁM: 300.000đ - 400.000đ .
              <span onClick={() => this.showHideDetailInfor(true)}>
                Xem chi tiết
              </span>{" "}
            </div>
          )}
          {isShowDetailInfor === true && (
            <>
              <div className="title-price">GIÁ KHÁM:</div>
              <div className="detail-infor">
                <div className="price">
                  <span className="left">Giá khám</span>
                  <span className="right"> 400.000đ</span>
                </div>
                <div className="note">
                  Giá khám đã bao gồm phí đặt lịch hẹn trước (Giá niêm yết của
                  phòng khám) Giá khám cho người nước ngoài 30 USD
                </div>
              </div>
              {/* ================================================ */}
              <div className="detail-infor">
                <div className="price">
                  <span className="left">Giá tái khám</span>
                  <span className="right">300.000đ</span>
                </div>
                <div className="note">Theo chỉ định của bác sĩ</div>
              </div>
              {/* ================================================ */}
              <div className="payment">
                Người bệnh có thể thanh toán chi phí bằng hình thức tiền mặt và
                quẹt thẻ
              </div>
              <div className="hide-price">
                <span onClick={() => this.showHideDetailInfor(false)}>
                  Ẩn bảng giá
                </span>{" "}
              </div>
            </>
          )}
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
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorExtraInfor);
