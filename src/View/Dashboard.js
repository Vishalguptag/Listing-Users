// Packages
import React, { useEffect, useState } from 'react'
import axios from 'axios'

// Components
import Navbar from '../Components/Navigation/HeaderNav'
import ShowUsersInTable from './TableData'

/**
 * Dashboard Page use to Display Different Components
 * @returns Node
 */
const ShowUser = () => {
  // State
  const [resUserData, setResUserData] = useState([])

  /**
   * Method is use for get the List of Users
   */
  const getUserInfo = () => {
    axios.get('http://localhost:8000/users').then((res) => {
      setResUserData(res.data)
    })
  }
  // use to Call Method Once
  useEffect(() => {
    getUserInfo()
  }, [])
  return (
    <>
      {/* Passing Data as Props to NavBar Components */}
      <Navbar userData={resUserData} userUpdate={setResUserData} />

      {/* Passing Data as props to Table Components so Display No of Users */}
      <ShowUsersInTable userData={resUserData} userUpdate={setResUserData} />
    </>
  )
}

export default ShowUser
