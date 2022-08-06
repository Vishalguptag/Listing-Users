// Packages
import React from 'react'

// React icon
import { MdKeyboardArrowLeft } from 'react-icons/md'

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
    <Navbar className="border-y-2">
      <Navbar expand="lg" variant="light">
        <MdKeyboardArrowLeft className="font-extrabold text-3xl text-gray-700 mx-1" />
        {/* Title of the App */}
        <h1 className="mx-1 text-2xl font-sans">{NavBarTitle}</h1>
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
