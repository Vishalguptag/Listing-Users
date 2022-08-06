// Packages
import axios from 'axios'
import React, { useState } from 'react'

// React-bootstrap Components
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

/**
 * Modal Button use For Addig New User
 * @returns Node Elements
 */
const AddModalButton = (props) => {
  const { userData, userUpdate } = props || []
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
  const postNewUser = async () => {
    setShow(false)
    await axios
      .post('http://localhost:8000/users', userDataForm)
      .then((res) => {
        userUpdate([...userData, res.data])
      })
      .catch(() => {})
  }
  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        className="bg-primary mx-3"
      >
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
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
            className="bg-black"
          >
            Close
          </Button>
          {/* A button for register new User */}
          <Button
            variant="primary"
            onClick={postNewUser}
            className="bg-primary"
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddModalButton
