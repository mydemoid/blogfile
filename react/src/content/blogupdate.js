import React from 'react'
import data from '../data'

function Blogupdate() {

  let user=localStorage.getItem("user")
    user=JSON.parse(user)

    const [heading,setHeading]=React.useState(data.blog.heading)
    const [readme,setReadme]=React.useState(data.blog.readme)
    const [content,setContent]=React.useState(data.blog.content)
    const [creator,setCreator]=React.useState(user.name)
    const [creatorid,setCreatorid]=React.useState(user.id)
    const [like,setLike]=React.useState(0)

    
       
          // setContent("")
          // setHeading("")
          // setReadme("")
      
      
      let time = new Date();
    //   var hours = now.getHours() 
   
   let blogdata={creatorid,creator,heading,readme,content,time}
function updateblog(e){
  e.preventDefault()
    
        fetch(`http://localhost:8080/updateblog/${data.blog.id}`, {
    method: "PUT", // or "PUT" with the url changed to, e.g "https://reqres.in/api/users/2"
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(blogdata)
})
.then(res => res.text())
.then((data) =>{ console.log(data);alert("updated")})

// data.heading=heading
// data.readme=readme
// data.content=content

// nav("/profile")
    
}

  return (
    <div>
          <div  style={{color:"white",backgroundColor:"#1F2937"}}>
        <div className='container p-2'>
      <div className='row'>
        <div className='col-md m-2'>
         
        <form action="/action_page.php" className='bg-dark p-2' style={{borderRadius:"20px"}} autoComplete="off">
          
    <h3 style={{textAlign:"center",color:"#61dbfb",padding:"10px"}} >blog space</h3>

  <div className="mb-3 mt-3 m-4" >
    <label  className="form-label">headline:</label>
    <textarea type="text" className="form-control" id="n" placeholder="Enter name" name="heading" value={heading} style={{width:"40%",height:""}}  onChange={(e) => setHeading(e.target.value)}/>
  </div>
  <div className="mb-3 mt-3 m-4" >
    <label  className="form-label">readme:</label>
    <textarea type="text" className="form-control" id="n" placeholder="Enter name" name="heading" value={readme} style={{width:"40%",height:""}}  onChange={(e) => setReadme(e.target.value)}/>
  </div>
  <div className="mb-3 mt-3 m-4" >
    <label  className="form-label">content:</label>
    <textarea type="text" className="form-control" id="n" name="content" value={content} style={{height:"300px"}}  onChange={(e) => setContent(e.target.value)} />
  </div>
  
  <center><button type="submit" className="btn m-4" style={{backgroundColor:"#61dbfb"}}  onClick={updateblog} ><b>update</b></button></center>

  <div className="m-5" >
    
  </div>
  {/* <div className="mb-3 mt-3 m-4" > */}
    {/* <label  className="form-label">adnum:</label> */}
    {/* <input type="hidden" className="form-control " id="a" placeholder="Enter address" name="adnum" value={adnum} onChange={(e) => setAdnum(e.target.value)} /> */}
  {/* </div>  */}
 
 </form>
</div> 
</div>
    </div>
    </div>
    </div>
  )
}

export default Blogupdate
