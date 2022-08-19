import React from 'react'

function Read() {
  let readmode=localStorage.getItem("blogread")
  readmode=JSON.parse(readmode);
  
  return (
    <div className='container-fluid' style={{height:"",backgroundColor:"",color:"white",padding:"50px"}}>
      <p style={{textAlign:"right",color:"grey"}}>creator : {readmode.creator}</p>
      <h2>{readmode.heading}</h2>
      
      <p style={{padding:"20px",borderBottom:"2px solid white"}}><b>readme : </b> {readmode.readme}</p>
      
      <p style={{padding:"20px"}}>{readmode.content}</p>
      <p style={{textAlign:"right"}}>&#9829;{readmode.like}</p>
    </div>
  )
}

export default Read
