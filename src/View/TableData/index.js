// Packages
import React, { useState } from 'react'

// React-bootstrap Component
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

// Components
import ConfirmModalForDelete from '../DeleteModal/ConfirmModalForDelete'

/**
 * Display List of Users using React-bootstrap table
 * @returns Node Elements
 */
const ShowUsersInTable = (props) => {
  // Destructring props with Validating
  const { userData, userUpdate } = props || []
  // states
  const [userLimit, setUserLimit] = useState(10)
  const slicedData = userData.slice(0, userLimit)

  /**
   * Use to Handel Load More Button
   */
  const HandelLoadMoreBtn = () => {
    setUserLimit(userLimit + 10)
  }
  return (
    <>
      <Table hover className="text-center">
        <thead className="table-light border-none bg-light">
          <tr>
            <th scope="col">S.no</th>
            <th scope="col">USER</th>
            <th scope="col">JOIN AT</th>
            <th scope="col">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {/* Checking userData is Null or Not */}
          {slicedData ? (
            slicedData.map((item) => (
              // Passing The Data  as Props to Child Component
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.date}</td>
                <td>
                  {/* Pasing Data as Props to Child Components */}
                  <ConfirmModalForDelete
                    deleteId={item.id}
                    userData={userData}
                    userUpdate={userUpdate}
                  />
                </td>
              </tr>
            ))
          ) : (
            <h1>Data Not Found</h1>
          )}
        </tbody>
      </Table>
      <div className="d-flex flex-row justify-content-center sticky-bottom bg-light p-2">
        <Button
          variant="primary"
          onClick={HandelLoadMoreBtn}
          className="bg-sky-600"
        >
          Load More
        </Button>
      </div>
    </>
  )
}

export default ShowUsersInTable
