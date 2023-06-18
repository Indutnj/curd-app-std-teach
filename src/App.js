import Sidebar from './component/Sidebar';
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import StudCreateUser from './component/StudCreateUser';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import StudDel from './component/StudDel';
import StudEdit from './component/StudEdit';
import TeachCreateUser from './component/TeachCreateUser';
import TeachDel from './component/TeachDel';
import TeachEdit from './component/TeachEdit';
import TeachPage from './component/TeachPage';
import Home from './component/Home';
import StudPage from './component/StudPage';



function App() {
  let [users,setUsers]=useState([
    {
    
      name:"Ravi M",
      gender:"Male",
      dob:"1992-07-05",
      mobile:"9685961256",
      email:"ravi25@gmail.com"
    },
    {
    
      name:"Divya S",
      gender:"Female",
      dob:"1992-06-01",
      mobile:"9485624747",
      email:"divya88@gmail.com"
    },
    {
     
      name:"Kannan A",
      gender:"Male",
      dob:"1998-09-03",
      mobile:"7894562589",
      email:"kannan95@gmail.com"
    }
  ]);
  let [teach,setTeach]=useState([
    {
    
      name:"Swaminathan L",
      gender:"Male",
      dob:"1982-07-05",
      mobile:"9685961256",
      email:"swaminathan@gmail.com"
    },
    {
    
      name:"Ramesh K",
      gender:"Female",
      dob:"1991-06-01",
      mobile:"9485624747",
      email:"ramesh68@gmail.com"
    },
    {
     
      name:"Senthil Kumar",
      gender:"Male",
      dob:"1970-09-03",
      mobile:"7894562589",
      email:"senthilkumar95@gmail.com"
    }
  ]);
  return (
    <>
      <BrowserRouter>
        <div class="d-flex" id="wrapper">
          <Sidebar/>
         {/* <Page/>*/}
            <Routes>
              <Route path="/std-page"  element={<StudPage users={users} setUsers={setUsers}/>}/>
              <Route path="/std-create-user" element={<StudCreateUser users={users} setUsers={setUsers}/>}/>
              <Route path="/std-edit" element={<StudEdit users={users} setUsers={setUsers}/>}/>
              <Route path="/std-del" element={<StudDel users={users} setUsers={setUsers}/>}/>
              <Route path="/std-edit-user/:id" element={<StudCreateUser users={users} setUsers={setUsers}/>}/>

              <Route path="/teach-page"  element={<TeachPage teach={teach} setTeach={setTeach}/>}/>
              <Route path="/teach-create-user" element={<TeachCreateUser teach={teach} setTeach={setTeach}/>}/>
              <Route path="/teach-edit" element={<TeachEdit teach={teach} setTeach={setTeach}/>}/>
              <Route path="/teach-del" element={<TeachDel teach={teach} setTeach={setTeach}/>}/>
              <Route path="/teach-edit-user/:id" element={<TeachCreateUser teach={teach} setTeach={setTeach}/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="*" element={<Navigate to='/home'/>}/>
            </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;