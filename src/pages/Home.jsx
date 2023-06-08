import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { deleteUser } from '../redux/userSlice'


const Home = () => {
   const users = useSelector((state) => state.users)
   const dispatch  = useDispatch()
   console.log(users)

   const handleDelete = (id) => {
        dispatch(deleteUser({id})) 
    } 
  return (
    <div className="container mt-5">
        <h2 className="text-center my-5 text-dark"> Crude Application using Redux Toolkit </h2>
        <Link to="/create" className="btn btn-success my-3"> Create + </Link>
        <table className="table bg-success">
            <thead>
                <tr>
                    <th> ID </th>
                    <th> NAME </th>
                    <th> EMAIL </th>
                    <th> ACTION </th>
                </tr>
            </thead>
            <tbody>
               {
                users.map((user, index)=>(
                    <tr className='table-danger' key={index}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <Link to={`/update/${user.id}`} className="btn btn-primary me-3" > Edit </Link>
                        <button className="btn btn-danger" onClick={()=>{handleDelete(user.id)}}> Delete </button>
                    </td>
                </tr>
                ))
               }
            </tbody>
        </table>
    </div>
  )
}

export default Home