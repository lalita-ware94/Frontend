import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { MyContext } from '../component/UseVariables'
import { useNavigate } from 'react-router-dom'

function UsersList() {

    const navigate = useNavigate()

    const { base_path, user, setUser, setUid } = useContext(MyContext)

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line
    }, [])

    function fetchData(){
        axios.get(`${base_path}/findall`)
        .then(res => {
            console.log(res.data);
            setUser(res.data)
        })
    }

    function handleDelete(userID){
        const confirmed = window.confirm("Are you sure you want to delete this user's data")
        confirmed ? 
        axios.delete(`${base_path}/delete/${userID}`)
        .then(res => {
            console.log(res.data);
            fetchData()
        }).catch(err => console.log(err)):alert("User still exists")
    }

    return (
        <div className='container-fluid'>
            <table className='table table-info'>
                <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        {/* <th>ID</th> */}
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((a, index) => {
                        return(
                            <tr key={a._id}>
                                <td>{index+1}</td>
                                <td>{a.fName}</td>
                                <td>{a.lName}</td>
                                <td>{a.email}</td>
                                <td>{a.contact}</td>
                                {/* <td>{a._id}</td> */}
                                <td>
                                    <button type="button" className='btn btn-warning'
                                    onClick={() => {
                                        navigate('/update')
                                        setUid(a._id)
                                    }}>Update</button>
                                    <button type="button" className='btn btn-danger ms-2'
                                    onClick={() => handleDelete(a._id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default UsersList