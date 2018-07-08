import React, { Component } from "react";

class Modal extends Component {
  closeModal() {
    document.querySelector(".modal-window").classList.remove("show");

    setTimeout(() => {
      document.querySelector(".modal-overlay").classList.remove("show");
    }, 100);
  }

  render() {
    return (
      <div>
        <div className="modal-overlay" onClick={this.closeModal} />
        <div className="modal-window">
          <div className="modal-inner">
            <div className="modal-display-data" />
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
