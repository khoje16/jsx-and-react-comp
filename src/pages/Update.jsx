import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from '../redux/userSlice';

const Update = () => {
    const users = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {id} = useParams()

    const existingUser = users.filter((user) => user.id==id)
    const {name, email} = existingUser[0]

    const [updateName, setUpdateName] = useState(name);
    const [updateEmail, setUpdateEmail] = useState(email);


    const julianahUpdate = (event) => {
        event.preventDefault()
        dispatch(updateUser({
            id, name:updateName, email:updateEmail
        }))
        navigate('/')
    }
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
        <div className="shadow w-50 bg-light p-5">
            <form onSubmit={julianahUpdate}>
                <h3> Update User </h3>
                <div>
                    <label> Name: </label>
                    <input value={updateName} onChange={(e) => setUpdateName(e.target.value)} type="text" className="form-control"/>
                </div>

                <div>
                    <label> Email: </label>
                    <input value={updateEmail} onChange={(e) => setUpdateEmail(e.target.value)} type="text" className="form-control"/>
                </div>
                <br/>
                <button className="btn btn-primary w-100 text-white"> Submit </button>

            </form>
        </div>
    </div>
  )
}

export default Update