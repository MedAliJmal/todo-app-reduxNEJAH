import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { taskEdit } from "../../redux/action";

const EditTask = ({ taskedit }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //___________________________________________________________
  //   console.log(taskedit);
  const [etext, setEtext] = useState(taskedit.action);
  const dispatch = useDispatch();
  const handleEdit = (e) => {
    e.preventDefault();
    const editedTask = {
      id: taskedit.id,
      action: etext,
      isDone: taskedit.isDone,
    };
    dispatch(taskEdit(editedTask));
    handleClose();
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="" onSubmit={handleEdit}>
            <input
              type="text"
              value={etext}
              onChange={(e) => setEtext(e.target.value)}
            />
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EditTask;
