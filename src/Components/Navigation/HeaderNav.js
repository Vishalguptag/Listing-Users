// Packages
import React from 'react'

// React-bootstrap Components
import Navbar from 'react-bootstrap/Navbar'
import ModalButton from '../../View/AddModal/ModalButton'

// Navbar Title Constant
import NavBarTitle from './Constants'

/**
 * Navbar of the App
 * @returns Node Elements
 */
const HeaderNav = (props) => {
  // Destsructring Data with Validating
  const { userData, userUpdate } = props || []
  return (
    <Navbar>
      <Navbar expand="lg" variant="light" bg="light">
        {/* Title of the App */}
        <h1 className="mx-3">{NavBarTitle}</h1>
      </Navbar>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          {/* Passing Data as Props */}
          <ModalButton userData={userData} userUpdate={userUpdate} />
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default HeaderNav
