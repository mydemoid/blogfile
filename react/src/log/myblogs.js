import React from 'react'
import {useNavigate } from 'react-router-dom'
import data from '../data'

function Myblogs(props) {

console.log(props.data.creator)
    const nav=useNavigate()
    const [out,setOut]=React.useState()
    console.log(props.data.id)
    function deleteblog(){
        const url=`http://localhost:8080/deleteblog/${props.data.id}`
        fetch(url,{
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }}).then(res=>res.text())
            .then((result)=>{
            console.log(result)
           alert(result)
           props.reload()
            })
            
    }
    function read(){
        // data.blog.heading=list.heading
        // data.blog.content=list.content
        // data.blog.time=list.time
        localStorage.setItem("blogread",JSON.stringify(props.data))
        nav("/read")
  
      }
    function blogupdate(){
        data.blog.id=props.data.id
        data.blog.heading=props.data.heading
        data.blog.readme=props.data.readme
        data.blog.content=props.data.content
        localStorage.setItem("blogupdate",JSON.stringify(props.data))
        nav("/blogupdate")
    }   

  return (
    <div  key={props.key}>
         <div class="container" style={{width:"90%",backgroundColor:"#1F2937",padding: "30px",borderRadius: "20px"}}>
            
            <div class="row">
         <div class="col">
             <p style={{color: "grey",fontSize: "15px"}}><b style={{color: "white",fontSize: "20px"}}>" </b>{props.data.creator}</p>
        
         </div>
         <div class="col">
             <p style={{color: "grey",fontSize:" 15px",textAlign: "right",paddingRight: "30px"}}>{props.data.time}</p>
         </div>
             </div>
       
        <h3 style={{color: "white",fontSize: "20px"}}><b>{props.data.heading}</b></h3>
        <p style={{color:"white"}}>{props.data.readme}</p>

            <div class="row">
         <div class="col">
             <a  style={{color: "#61dafb"}} onClick={read}>read More&gt;&gt;</a>
         </div>
         <div class="col">
             <p style={{color: "rgb(12, 179, 67)",fontSize: "20px",textAlign: "right",paddingRight: "30px"}}><b>&#9829;</b> {props.data.like}</p>
         </div>
             </div>
    <div class="row">
        <div className='col' align="right"><button style={{backgroundColor: "green",color:"white",padding: "8px",borderRadius: "6px"}} onClick={blogupdate}>update blog</button></div>
        <div className='col' align="left"><button style={{backgroundColor: "green",color:"white",padding: "8px",borderRadius: "6px"}} onClick={deleteblog} >delete blog</button></div>
     </div>

     </div> 
     
     <br/>
    </div>
  )
}

export default Myblogs
