// Packages
import React, { useEffect, useState } from 'react'

// Components
import Navbar from '../Components/Navigation/HeaderNav'
import ShowUsersInTable from './TableData'

// Service
import { fetchUserList } from '../Services/User'

/**
 * Dashboard Page use to Display Different Components
 * @returns Node
 */
const UserList = () => {
  // State
  const [resUserData, setResUserData] = useState([])

  /**
   * Method is use for get the List of Users
   */
  const getUserList = async () => {
    const respnonseResult = await fetchUserList()
    setResUserData(respnonseResult)
  }

  // Component will mount
  useEffect(() => {
    // Method to call user list
    getUserList()
  }, [])
  return (
    <>
      {/* Passing Data as Props to NavBar Components */}
      <Navbar userData={resUserData} onUserUpdate={setResUserData} />

      {/* Passing Data as props to Table Components so Display No of Users */}
      <ShowUsersInTable userData={resUserData} onUserUpdate={setResUserData} />
    </>
  )
}

export default UserList
