import React from 'react'
import {useEffect} from 'react'
import {useNavigate } from 'react-router-dom'

function Signin() {

  const nav=useNavigate()
    const [name,setName]=React.useState("")
    const [email,setEmail]=React.useState("")
    const [adnum,setAdnum]=React.useState("")
    const [dob,setDob]=React.useState("")
    const [pw,setPw]=React.useState("")
    const [cpw,setCpw]=React.useState("")
    
  const[val,setVal]=React.useState("email is mandatory")
  const[pass,setPass]=React.useState("")
  
    const [users,setUsers]=React.useState()
    let user
    
    function handleclick(e){
      e.preventDefault()
      if(val===""){

        if(pw===cpw){
          //  setKey(key+1)
        console.log(adnum)
        setUsers(users+1)
        if(user<999){
        setAdnum(()=> `UN-${(((users+1)+1000)+"").substring(1)}` )
        }
        if(user>=999){
          setAdnum(()=> `UN-${(users+1)}`)
        }
  
        let id=adnum
        let access="user"
         user={id,name,email,dob,pw,access}
        console.log(user) 
      
  
    //code connecting to springboot
    
        fetch("http://localhost:8080/create",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(user)
        }).then(() => {
          console.log("added")
    
          // http://localhost:8080/
          setName("")
          setDob("")
          setEmail("")
          setPw("")
      
          nav("/login")
    
        })
      }
      if(pw!==cpw){
        alert("password conformation failed")
      }

      }
    
    }
      
   function checkemail(){
    fetch(`http://localhost:8080/checkemail/${email}`)
    .then(res=>res.text())
           .then((result)=>{console.log(result);
            if (result===null){ValidateEmail()}
            if (result==="mail is already used"){setVal(result)}
          })
  
   }


  
    useEffect(()=> {
      fetch("http://localhost:8080/list")
      .then(res=>res.json())
      .then((result)=>{
        setUsers(result)
        setAdnum(()=> `UN-${(((result+1)+1000)+"").substring(1)}` )
        console.log( result)
        console.log(`UN-${(((result+1)+1000)+"").substring(1)}`)
      })
    },[])


    function ValidateEmail(inputText)
    {
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email.match(mailformat))
    {
    setVal("");
    return true;
    }
    else
   {
    setVal("You have entered an invalid email address!");
    return false;
    }
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
          <input type="text" className="form-control" id="n" placeholder="Enter name" name="name" value={name} onChange={(e) => setName(e.target.value.replace(/[^a-z]/gi, ''))} required/>
        </div>
      
        <div className="mb-3 mt-3 m-4" >
          <label  className="form-label">Email:</label>
          <input type="email" className="form-control" id="email" placeholder="Enter email" name="name" value={email} onChange={(e) =>{ setEmail(e.target.value);ValidateEmail();}} onBlur={checkemail} required />
          <p style={{color:"red"}}>{val}</p>
        </div>
      
        <div className="mb-3 m-4">
          <label  className="form-label">date of birth:</label>
          <input type="date" className="form-control" id="dob"  name="dob" value={dob} onChange={(e) => setDob(e.target.value)}/>
        </div>
      
      
        <div className="mb-3 mt-3 m-4" >
          <label  className="form-label">Password:</label>
          <input type="text" className="form-control" id="n" placeholder="Enter password" name="name" value={pw} onChange={(e) => setPw(e.target.value.replace())} required/>
          <p style={{color:"red"}}>{pass}</p>
        </div>
        <div className="mb-3 mt-3 m-4" >
          <label  className="form-label">Conform Password:</label>
          <input type="password" className="form-control" id="n" placeholder="Enter password" name="name" value={cpw} onChange={(e) => setCpw(e.target.value.replace())} required />
          <p style={{color:"red"}}>{pass}</p>
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

export default Signin
