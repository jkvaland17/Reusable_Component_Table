import React, { useState } from "react";
import { Modal } from "antd";

const Popup = ({passing}) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState();

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setOpen(false);
    setConfirmLoading(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handelcheckbox = (e) => {
    const id = e.target.value;
    passing(id)
  };
  return (
    <>
      <i
        className="fa-solid fa-filter"
        style={{ marginLeft: "1rem", cursor: "pointer" }}
        onClick={showModal}
      ></i>
      <Modal
        title="Filter"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <div onChange={handelcheckbox}>
          <input type="radio" value="A" name="jk"></input>
          <span style={{ marginLeft: "1rem" }}>A</span>
          <br></br>
          <input type="radio" value="B" name="jk"></input>
          <span style={{ marginLeft: "1rem" }}>B</span>
        </div>
      </Modal>
    </>
  );
};

export default Popup;
