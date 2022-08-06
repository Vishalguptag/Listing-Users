// Packages
import axios from 'axios'
import React, { useState } from 'react'

// React-bootstrap Components
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

// React Icon
import { RiDeleteBin5Fill } from 'react-icons/ri'

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
  const { deleteId, userData, userUpdate } = props || {}

  // Methods use to Handel the Modal
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  /**
   * Method use for  Delete user
   */
  const deleteUser = async () => {
    await axios
      .delete(`http://localhost:8000/users/${deleteUserId}`)
      .then(() => {
        // filtering Data on the basis of deleted user
        const filteredData = userData.filter((item) => item.id !== deleteUserId)

        // Updating state with filered Data
        userUpdate(filteredData)
      })
    setShow(false)
  }
  return (
    <>
      <Button variant="" onClick={handleShow} className="text-black">
        <RiDeleteBin5Fill
          // Event to set the state with deleted user id
          onClick={() => {
            setDeleteUserId(deleteId)
          }}
        />
      </Button>

      <Modal show={show} onHide={handleClose} animation={false} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>You are about to delete this user ? Click Proceed to Confirm</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
            className="bg-black"
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              // Calling Method to Delete Particular User
              deleteUser(deleteUserId)
            }}
            className="bg-sky-400"
          >
            Proceed
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ConfirmModalForDelete
