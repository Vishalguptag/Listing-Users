// Package
import axios from 'axios'

// Error Massages Constants
import {
  errorAddNewUser,
  errorDeleteUser,
  errorLoadUserList,
} from '../../Masseges'

/**
 * Use to fetch the User List
 * @returns Response getting from url
 */
const fetchUserList = async () => {
  // A constant for Storing response
  let responseData
  await axios
    .get('http://localhost:8000/users')
    .then((res) => {
      // Assigning res to Constant
      responseData = res.data
    })
    .catch(() => {
      // Assinging Error if res is fail
      responseData = errorLoadUserList
    })
  // return response
  return responseData
}

/**
 * Use to Delete Particular User
 * @param {number} deleteUserId
 * @param {array} userData
 * @returns filtered Data
 */
const deleteParticularUser = async (deleteUserId, userData) => {
  let filteredData
  await axios
    .delete(`http://localhost:8000/users/${deleteUserId}`)
    .then(() => {
      // filtering Data on the basis of deleted user id
      filteredData = userData.filter((item) => item.id !== deleteUserId)
    })
    .catch(() => {
      filteredData = errorDeleteUser
    })
  return filteredData
}

const addNewUser = async (userDataForm) => {
  let responseAddNewUser
  await axios
    .post('http://localhost:8000/users', userDataForm)
    .then((res) => {
      responseAddNewUser = res.data
    })
    .catch(() => {
      responseAddNewUser = errorAddNewUser
    })
  return responseAddNewUser
}

export { fetchUserList, deleteParticularUser, addNewUser }
