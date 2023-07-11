import React, { useContext, useEffect } from 'react'
import { MyContext } from '../component/UseVariables'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function UpdateForm() {

    const navigate = useNavigate()

    const { base_path, fname, setFname, lname, setLname, contact, setContact, email,
        setEmail, password, setPassword, uid, setUid } = useContext(MyContext)

    console.log('uid in update form', uid);

    useEffect(() => {
        fetchUser()
    }, [])


    function fetchUser(){
        axios.get(`${base_path}/find/${uid}`)
        .then(res => {
            console.log(res.data);
            setFname(res.data.fName)
            setLname(res.data.lName)
            setContact(res.data.contact)
            setEmail(res.data.email)
            setPassword(res.data.password)
        }).catch(err => console.log(err))
    }

    const handleUpdate = (e) => {
        e.preventDefault()
    
        let newData = {fName:fname, lName:lname, email, password, contact}
        axios.put(`${base_path}/update/${uid}`, newData)
        .then(res => {
          console.log(res.data);
          alert(res.data.msg)
          setUid("")
          navigate('/login')
        }).catch(err => {
          console.log(err);
        })
    
        setFname("")
        setLname("")
        setContact("")
        setEmail("")
        setPassword("")
      }

    return (
        <div className='container'>
            <form onSubmit={handleUpdate}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="fname" aria-describedby="name"
                        onChange={(e) => setFname(e.target.value)} value={fname} />
                    <div id="name" className="form-text">Enter Your first Name</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="lname" aria-describedby="name"
                        onChange={(e) => setLname(e.target.value)} value={lname} />
                    <div id="name" className="form-text">Enter Your last Name</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="number" className="form-label">Contact Number</label>
                    <input type="number" className="form-control" id="number" aria-describedby="number"
                        onChange={(e) => setContact(e.target.value)} value={contact} />
                    <div id="number" className="form-text">Enter Your Mobile Number</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        onChange={(e) => setEmail(e.target.value)} value={email} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"
                        onChange={(e) => setPassword(e.target.value)} value={password} readOnly/>
                </div>
                <button type="submit" className="btn btn-primary">Update Data</button>
            </form>
        </div>
    )
}

export default UpdateForm