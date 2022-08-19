import React from 'react'
import data from '../data'
import Myblogs from './myblogs'
import {useNavigate } from 'react-router-dom'

function Profile() {

  let user=localStorage.getItem("user")
  user=JSON.parse(user)


  const nav=useNavigate()
  const [a,setA]=React.useState([data.id,data.name,data.email,data.dob,data.pw])
  const [userd,setUserd]=React.useState(user)
  const [mylist,setMylist]=React.useState()
 
  console.log(a)

  function reload(){
    const url=`http://localhost:8080/mybloglist/${user.id}`
    fetch(url)
    .then(res=>res.json())
    .then((result)=>{
    
    console.log(result)

    setMylist(()=> result.map((data,index)=>{
        return <Myblogs data={data} reload={reload} key={index}/>
      //    console.log(data.creator)
        }))
    })
  }

 
  

console.log(data.name)
  React.useEffect(()=> {
    
   
    const url=`http://localhost:8080/mybloglist/${user.id}`
    fetch(url)
    .then(res=>res.json())
    .then((result)=>{
    
    console.log(result)

    setMylist(()=> result.map((data,index)=>{
        return <Myblogs data={data} reload={reload} key={index} />
      //    console.log(data.creator)
        }))
    })
  },[])

  let userr=localStorage.getItem("user")
  userr=JSON.parse(userr)

  function logout(){

    localStorage.removeItem("user");
     localStorage.clear("blogupdate");
     nav("/login")}
  
  return (
    <div>
         <div class="container-fluid">
        <div class="row">
            <div class="col-2 " style={{padding: "10px",justifyContent: "center",borderRadius: "20px",margin: "20px"}}>
            <div class="container" style={{position:"fixed",width:"250px",backgroundColor:""}}>
  
                <div  style={{color: "grey",padding: "10px"}}>id: {userd.id}</div>
                <div style={{color: "grey",padding: "10px"}}>name: {userd.name}</div>
                <div style={{color: "grey",padding: "10px"}}>email: {userd.email}</div>
                <div style={{color: "grey",padding: "10px"}}>dob: {userd.dob}</div>
                <br/><br/>
                <div ><button style={{backgroundColor: "green",color:"white",padding: "8px",borderRadius: "6px"}} onClick={()=>{nav("/addblog")}} >add blog</button>
                </div><br/>
                <div ><button style={{backgroundColor: "green",color:"white",padding: "10px",borderRadius: "6px"}} onClick={()=>{nav("/updateuser")}} >update</button>
                </div>
               <br/>
                <div ><button style={{backgroundColor: "green",color:"white",padding: "10px",borderRadius: "6px"}} onClick={logout} >logout</button>
                </div>
                <br/><br/>
            </div>
            
            </div>
            

     <div class="col"  style={{padding: "10px",justifyContent:" center",margin: "10px"}}>

        {mylist}
        
            

            </div>

            
           
            
        </div>
    </div>
    </div>
  )
}

export default Profile
