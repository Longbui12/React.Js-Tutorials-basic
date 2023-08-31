import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

class About extends Component {
  render() {
    return (
      <div className="section-share section-about">
        <div className="section-about-header">
          Truyền thông nói gì về Long Bùi &#8595;
        </div>
        <div className="section-about-content">
          <div className="content-left">
            <iframe
              width="100%"
              height="400px"
              src="https://www.youtube.com/embed/A-tX5PI3V0o"
              title="Andree Right Hand - Chơi Như Tụi Mỹ | Official MV"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="content-right">
            <p>
              Về mặt ngữ nghĩa, dân chơi là cụm từ dùng để chỉ những người sành
              sỏi trong các món ăn chơi nói chung. Ví dụ như trong giới sành đồ
              cổ, một người có kiến thức rộng, có khả năng phân biệt tuổi của đồ
              cổ cũng như định giá chính xác món đồ thì sẽ được những người khác
              coi như một dân chơi thứ thiệt, dân chơi xịn. Hay như trong giới
              chơi siêu xe, một người chịu vung tiền ra để sở hữu những phiên
              bản xe hạn chế với mức giá cao cũng được coi là dân chơi trong xã
              hội này.
              <br />
              Đối với giới trẻ, dân chơi cũng có nghĩa tương tự. Dân chơi là
              những người chịu đi chơi, chịu vung tiền ra để chơi. Ví dụ, trong
              một nhóm bạn, một người thường xuyên mua sắm được những món đồ giá
              cao, chịu bỏ tiền ra để chơi bời, có khả năng bao các chầu ăn chơi
              thì sẽ được giới trẻ tôn là dân chơi.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
