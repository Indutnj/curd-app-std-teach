import React, { useState,useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';

function StudCreateUser({users,setUsers}) {

  let navigate = useNavigate()
  let params = useParams()

  let [name,setName] = useState("")
  let [email,setEmail] = useState("")
  let [mobile,setMobile] = useState("")
  let [dob,setDob] = useState("")

  let handleSubmit = ()=>{
    let newUser = { name,email,mobile,dob }
    let newArray = [...users]
    if(params.id!==undefined)
    {
      newArray.splice(params.id,1,newUser)
    }
    else
    {
      newArray.push(newUser)
    }
    setUsers(newArray)
    navigate('/std-edit')
  }

  // useEffect(()=>{
  //   console.log("Use Effect Triggered")
  // })//Triggered when a state changes

  // useEffect(()=>{
  //   console.log("Use Effect Triggered")
  // },[])//Triggered only for the first time when the component is loading

  // useEffect(()=>{
  //   console.log("Use Effect Triggered")
  // },[email,dob]) //Triggered when the mentioned state changes

  useEffect(()=>{
    if(params.id !== undefined)
    {
        setName(users[params.id].name)
        setEmail(users[params.id].email)
        setMobile(users[params.id].mobile)
        setDob(users[params.id].dob)
    }
  },[params.id,users])//dependancy array added to remove the warning. But not mandatory

  return <div className='container-fluid bg-dark' >
    <div className='container-fluid bg-dark' style={{color: 'white', width:"600px"}}>
      <br></br>
      <h3 style={{color: 'lightgreen', textAlign:"center"}}>Create Student</h3>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="text" placeholder="Enter mobile" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Date Of Birth</Form.Label>
        <Form.Control type="date" value={dob} onChange={(e)=>setDob(e.target.value)}/>
      </Form.Group>
      <div  style={{ textAlign:"center"}}>

      <Button variant="success" onClick={()=>handleSubmit()}>
        Submit
      </Button>

      </div>
      
    </Form>
    </div>
  </div>
}

export default StudCreateUser