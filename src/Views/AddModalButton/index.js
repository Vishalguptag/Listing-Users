// Packages
import React, { useState } from 'react'

// React-bootstrap Components
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

// Service
import { addNewUser } from '../../Services/User'

// Css file
import './index.css'

/**
 * Modal Button use For Addig New User
 * @returns Node Elements
 */
const AddModalButton = (props) => {
  // Destructing with Validating
  const { userData, onUserUpdate } = props || []

  // States
  const [show, setShow] = useState(false)
  const [userDataForm, setUserDataForm] = useState({
    name: '',
    date: '',
  })

  // Methods For Handel Model
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  /**
   * Set the State Value using method
   * @param {*} event
   */
  const handelUserInput = (event) => {
    // constant to get Current Date
    const currentDate = new Date().toLocaleDateString()

    // Converting into string
    const stringDate = currentDate.toString()

    // Updating the State
    setUserDataForm({ name: event.target.value, date: stringDate })
  }
  /**
   * Use to add New User
   */
  const handelAddNewUser = async () => {
    const respnonseResult = await addNewUser(userDataForm)
    onUserUpdate([...userData, respnonseResult])
    setShow(false)
  }
  return (
    <>
      <Button variant="primary" onClick={handleShow} className="addModal mx-3">
        Add New User
      </Button>

      <Modal show={show} onHide={handleClose} animation={false} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Input field for the New User */}
          <input
            type="text"
            className="form-control"
            onChange={handelUserInput}
            placeholder="Enter New User"
          />
        </Modal.Body>
        <Modal.Footer>
          {/* A button for register new User */}
          <Button
            variant="primary"
            onClick={handelAddNewUser}
            className="SaveBtn"
          >
            SAVE
          </Button>
          <Button
            variant="secondary"
            onClick={handleClose}
            className="closeBtn"
          >
            CLOSE
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddModalButton
