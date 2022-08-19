import React from 'react'
import {useNavigate } from 'react-router-dom'
import data from '../data'

function Blogboxadmin(props) {

  let use=localStorage.getItem("user")
  use=JSON.parse(use)

    const [a,setA]=React.useState(false)
    const [likes,setLikes]=React.useState(false)
    const [sty,setSty]=React.useState("grey")
  let nav=useNavigate()

  function color(){
    if( props.list.likedusers!=null && props.list.likedusers.includes(use.id) ===false){
        setSty("gey")
     }
     if( props.list.likedusers!=null && props.list.likedusers.includes(use.id) ===true){
       setSty("rgb(36, 244, 91)")
    }
  }

  React.useEffect(()=> {
    color()
},[])


  let list=props.list
  let index=props.index
console.log(props.list.creator)

let user=use.id
console.log(props.list.id)
console.log(props.list.likedusers)

//  let a=props.list.likedusers.includes(data.id)

  function like(event){

   

    // event.currentTarget.disabled=true
    //   if(likes===false){setLikes(true)}
    //   else{setLikes(false)}
    //   let s= likes ===true ? 'grey' : 'rgb(36, 244, 91)';
    //   setSty(s)

        let creatorid=list.creatorid
        let creator=list.creator
        let heading=list.heading 
        let readme=list.readme
        let content=list.content
        let like=list.like

           let send={creatorid,creator,heading,readme,content,like,user}
           


           if( props.list.likedusers!=null && props.list.likedusers.includes(use.id) ===false){

            // alert("likeing")
            setSty("rgb(36, 244, 91)")

            fetch(`http://localhost:8080/updatelike/${list.id}`, {
                method: "PUT", // or "PUT" with the url changed to, e.g "https://reqres.in/api/users/2"
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(send)
            })
            .then(res => res.text())
            .then((data) => {console.log(data);props.reload()})
        }
    }
     
    function deleteblog(){
        const url=`http://localhost:8080/deleteblog/${list.id}`
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
     
      localStorage.setItem("blogread",JSON.stringify(list))
      nav("/read")

    }


  return (
    
            
      


   
<div class="container" key={index}>
<div class="row">

<div class="col"  style={{padding: "10px",justifyContent: "center",margin: "10px"}}>

    <div class="container" style={{width:"90%",backgroundColor:"#1F2937",padding: "30px",borderRadius: "20px"}}>
    
           <div class="row">
        <div class="col">
            <p style={{color: "grey",fontSize: "15px"}}><b style={{color: "white",fontSize: "20px",}}>" </b>{props.list.creator}</p>
       
        </div>
        <div class="col">
            <p style={{color: "grey",fontSize: "15px",textAlign: "right",paddingRight: "30px",}}>{props.list.time}</p>
        </div>
            
      </div>
       <h3 style={{color: "white",padding: "px",fontSize: "20px"}}><b>{props.list.heading}</b></h3>
       <p style={{color: "white",padding: "px"}}>{props.list.readme}</p>

           <div class="row">
        <div class="col">
            <button style={{backgroundColor:"#1F2937",color:"blue",border:"0px solid #1F2937"}}onClick={read}>Learn More&gt;&gt;</button>
        </div>
        <div class="col" align="right">
            <button style={{color: sty,fontSize: "20px",paddingRight: "30px",backgroundColor:"#1F2937",border:"0px solid #1F2937"}} onClick={like}><b>&hearts;</b>{list.like}</button>
        </div>
           
    </div>
    <div style={{padding:"10px"}}><button style={{backgroundColor: "#1F2937",color:"white",padding: "2px",borderRadius: "6px"}} onClick={deleteblog} >delete</button>
                </div>

    </div> </div> </div>
    
   
    </div>

    
  )
}

export default Blogboxadmin
