import React, { useContext } from 'react'
import { MyContext } from '../component/UseVariables'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Login() {

  const navigate = useNavigate()

  const { base_path, email, setEmail, password, setPassword } = useContext(MyContext)

  const handleSubmit = (e) => {
    e.preventDefault()

    let newData = { email, password }
    axios.post(`${base_path}/login`, newData)
      .then(res => {
        console.log(res.data);
        console.log(typeof(res.data.token));
        localStorage.setItem('token', res.data.token)
        // navigate('/list')
      }).catch(err => console.log(err))

      setEmail("")
      setPassword("")
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)} value={email} />
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1"
            onChange={(e) => setPassword(e.target.value)} value={password} />
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
