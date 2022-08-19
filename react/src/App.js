import logo from './logo.svg';
import './App.css';
import Home from './home/home';
import Login from './log/login';
import Signin from './log/signin';
import Show from './content/show';
import Showadmin from './content/showadmin';
import Addblog from './content/addblog';
import Profile from './log/profile';
import Read from './content/read';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';  
import Updateuser from './log/updateuser';
import Blogupdate from './content/blogupdate';


function App() {
  return (
<div >
    <Router>

    <Routes>  
    
    <Route exact path='/HOME' element={<Home/>}></Route> 
    <Route exact path='/login' element={<Login/>}></Route> 
    <Route exact path='/' element={<Signin/>}></Route>    
    <Route exact path='/show' element={<Show/>}></Route> 
    <Route exact path='/showadmin' element={<Showadmin/>}></Route> 
    <Route exact path='/addblog' element={<Addblog/>}></Route>
    <Route exact path='/profile' element={<Profile/>}></Route> 
    <Route exact path='/read' element={<Read/>}></Route> 
    <Route exact path='/blogupdate' element={<Blogupdate/>}></Route> 
    <Route exact path='/updateuser' element={<Updateuser/>}></Route> 
</Routes>  

</Router>
    
      
    </div>
  );
}

export default App;
