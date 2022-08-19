import React from 'react'
import data from '../data';
import {useNavigate } from 'react-router-dom'

function Updateuser() {

  let edit=localStorage.getItem("user")
  edit=JSON.parse(edit)

    const nav=useNavigate()
    const [name,setName]=React.useState(edit.name)
    const [email,setEmail]=React.useState(edit.email)
    const [adnum,setAdnum]=React.useState(edit.id)
    const [dob,setDob]=React.useState(edit.dob)
    const [pw,setPw]=React.useState(edit.pw)
    
    let id=adnum
   let user={name,email,dob,pw}
   console.log(user)
    function handleclick(){
        fetch(`http://localhost:8080/updateuser/${id}`, {
    method: "PUT", // or "PUT" with the url changed to, e.g "https://reqres.in/api/users/2"
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(user)
})
.then(res => res.json())
.then(data => localStorage.setItem("user",JSON.stringify(data)))

edit.name=name
edit.email=email
edit.dob=dob
edit.pw=pw
nav("/profile")
    }

  return (
    <div className='container'>
    <div className='forms'>
        {/* <div className='forms' > */}
            {/* <h1 style={{color:"white"}}>{adnum}</h1> */}
        <form action="/action_page.php"  style={{borderRadius:"20px",width:"400px",backgroundColor:"#1F2937"}} autoComplete="off">
      
      <h3 style={{textAlign:"center",color:"#61dbfb",padding:"10px"}} >Fill Details</h3>
  
    <div className="mb-3 mt-3 m-4" >
      <label  className="form-label">Name:</label>
      <input type="text" className="form-control" id="n" placeholder="Enter name" name="name" value={name} onChange={(e) => setName(e.target.value.replace(/[^a-z]/gi, ''))} />
    </div>
  
    <div className="mb-3 mt-3 m-4" >
      <label  className="form-label">Email:</label>
      <input type="email" className="form-control" id="email" placeholder="Enter email" name="name" value={email} onChange={(e) =>{ setEmail(e.target.value);}} />
      <p style={{color:"red"}}>{}</p>
    </div>
  
    <div className="mb-3 m-4">
      <label  className="form-label">date of birth:</label>
      <input type="date" className="form-control" id="dob"  name="dob" value={dob} onChange={(e) => setDob(e.target.value)}/>
    </div>
  
  
    <div className="mb-3 mt-3 m-4" >
      <label  className="form-label">Password:</label>
      <input type="text" className="form-control" id="n" placeholder="Enter password" name="name" value={pw} onChange={(e) => setPw(e.target.value.replace())} />
      <p style={{color:"red"}}>{}</p>
    </div>
  
    {/* <div className="mb-3 mt-3 m-4" > */}
      {/* <label  className="form-label">adnum:</label> */}
      {/* <input type="hidden" className="form-control " id="a" placeholder="Enter address" name="adnum" value={adnum} onChange={(e) => setAdnum(e.target.value)} /> */}
    {/* </div>  */}
   
    
  
  <center>
    <span><button type="submit" className="btn m-4" style={{backgroundColor:"#61dbfb"}} onClick={handleclick} ><b>Submit</b></button></span>
    <span><button type="reset" className="btn m-4" style={{backgroundColor:"#61dbfb"}}><b>reset</b></button></span>
    </center>
    <center><p style={{color:"white"}}>already have an account??..<a href='/login' style={{color:"#61dafb"}}> login</a></p></center> 
    <div className='m-2' style={{paddingTop:"20px"}}> </div>
  </form> 
           
        </div>
    </div>
  )
}

export default Updateuser
