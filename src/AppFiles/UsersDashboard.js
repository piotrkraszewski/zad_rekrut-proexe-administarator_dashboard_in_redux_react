import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteNew } from '../redux'
import orderBy from 'lodash/orderBy'

import DeleteConfirmModal from './DeleteConfirmModal'

export default function UserContainer() {
  const reduxUsersData = useSelector(state => state.user.users)
  const dispatch = useDispatch()

  const [usersData, setUserData] = useState([])
  const [isDeleteConfirmModalOpen, setIsDeleteConfirmModalOpen] = useState(false)
  const [itemToDelete, setItemToDelete] = useState()
  const [sortOrder, setSortOrder] = useState('asc')
  const [selectedCol, setSelectedCol] = useState('')

  useEffect(() => {
    setUserData(reduxUsersData)
  }, [reduxUsersData])


  const openDeleteUserModal = (e, id) => {
    e.preventDefault()
    console.log(id)
    setItemToDelete(id)
    setIsDeleteConfirmModalOpen(true)
  }


  const deleteUser = () => {
    dispatch(deleteNew({id: itemToDelete}))
    setIsDeleteConfirmModalOpen(false)
  }

  const sort = (e) => {
    const colName = e.target.id
    let order

    if(selectedCol !== e.target.id)
      order = 'asc'
    else 
      sortOrder === 'asc' ? order = 'desc' : order = 'asc'
    
    setSortOrder(order)
    setSelectedCol(e.target.id)
    if(colName === 'address.city'){
      setUserData(orderBy(usersData, [user => user.address.city.toLowerCase() ], order))
    } else if (colName === 'id'){
      setUserData(orderBy(usersData, colName, order))
    } else {
      setUserData(orderBy(usersData, [user => user[colName].toLowerCase() ], order))
    }
  }

  return  (  
    <div className='UsersDashboardElement'>
      <div className='UsersDashboardConainer'>
        <h1>Dashboard</h1>
        <div className='tableContainer col-xl-2 col-md-3 col-4'>
          <div className='topTable'>
            <div className='userList'>
              <h3>User list</h3>
            </div>
            <div>
              <Link to='/additem' className='linkStyle'>
                <button className='addNew btn btn-primary'>Add new</button>
              </Link>
            </div>
          </div>

          <div className='resTable'>
          <table className="table">
            <thead className="thead">
              <tr>
                <th scope="col" id='id' className='sort' onClick={(e) => sort(e)}>Id</th>
                <th scope="col" id='name' className='sort' onClick={(e) => sort(e)}>Name</th>
                <th scope="col" id='username' className='sort' onClick={(e) => sort(e)}>Username</th>
                <th scope="col" id='email' className='sort' onClick={(e) => sort(e)}>Email</th>
                <th scope="col" id='address.city' className='sort' onClick={(e) => sort(e)}>City</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {usersData.length > 0 && usersData.map((item) => 
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.address.city}</td>
                  <td>
                    <button 
                      className='btn btn-warning'
                    >edit</button>
                  </td>
                  <td>
                    <button 
                      className='btn btn-danger'
                      onClick={e => openDeleteUserModal(e, item.id)}
                    >delete</button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          <div className='noUsers'>
            {!usersData.length && 'No users in database'}
          </div>

          </div>
        </div>
      </div>

      <DeleteConfirmModal 
        open={isDeleteConfirmModalOpen} 
        onClose={() => setIsDeleteConfirmModalOpen(false)} 
        deleteUser={deleteUser} 
      /> 

    </div>
  )
}