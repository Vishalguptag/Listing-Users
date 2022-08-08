// Packages
import React, { useState } from 'react'

// React-bootstrap Components
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

// React Icon
import { RiDeleteBin6Line } from 'react-icons/ri'

// Service
import { deleteParticularUser } from '../../Services/User'

// Css File
import './index.css'

/**
 * Modal is use For Confirmation to delete Particular User
 * @param {array} props
 * @returns
 */
const ConfirmModalForDelete = (props) => {
  // States
  const [show, setShow] = useState(false)
  const [deleteUserId, setDeleteUserId] = useState(0)

  // desstruring props and Validating
  const { deleteId, userData, onUserUpdate } = props || {}

  // Methods use to Handel the Modal
  const handleClose = () => setShow(false)
  const handleShow = () => {
    setShow(true)
    setDeleteUserId(deleteId)
  }
  /**
   * Method use for  Delete Particular user
   */
  const handelDeleteUser = async () => {
    const respnonseResult = await deleteParticularUser(deleteId, userData)
    onUserUpdate(respnonseResult)
    setShow(false)
  }
  return (
    <>
      <RiDeleteBin6Line
        onClick={handleShow}
        className="float-right cursor-pointer"
      />

      <Modal show={show} onHide={handleClose} animation={false} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>You are about to delete this user ? Click Proceed to Confirm</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              // Calling Method to Delete Particular User
              handelDeleteUser(deleteUserId)
            }}
            className="proceedBtn"
          >
            PROCEED
          </Button>
          <Button
            variant="secondary"
            onClick={handleClose}
            className="cancelBtn"
          >
            CANCEL
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ConfirmModalForDelete
