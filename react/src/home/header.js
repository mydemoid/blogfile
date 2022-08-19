import React from 'react'

function Header() {
  return (
    <div className='container' style={{padding:"20px",}}>
        <div className='row'>
            <div className='col'>LOGO</div>
        
            <div className='col' align="right">
           <a href='/login'> <button>login</button></a>
           <a href='/signin'><button>signin</button></a>
          
            </div>
       
      
     
      </div>
    </div>
  )
}

export default Header
