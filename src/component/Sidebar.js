import React from 'react'
import { Link } from 'react-router-dom';

function Sidebar() {
   /* let navigate = useNavigate()*/
  return (
    <>
        <div className="border-end bg-black" id="sidebar-wrapper">
            <div className="sidebar-heading border-bottom bg-info">CURD Application</div>
            <div className="list-group list-group-flush">
            <Link to='/home'> 
                <a className="list-group-item list-group-item-action list-group-item-dark active p-3" href="javascript(void)">Home</a>
            </Link>
            <Link to='/std-page'> 
                <a className="list-group-item list-group-item-action list-group-item-dark active p-3" href="javascript(void)">Student List</a>
            </Link>
            <Link to='/std-create-user'>
                <a className="list-group-item list-group-item-action list-group-item-dark active p-3" href="javascript(void)">Create Student</a>
            </Link>
            <Link to='/std-edit'>
                <a className="list-group-item list-group-item-action list-group-item-dark active p-3" href="javascript(void)">Edit Student</a>
            </Link>
            <Link to='/std-del'>
                <a className="list-group-item list-group-item-action list-group-item-dark active p-3" href="javascript(void)">Delete Student</a>
            </Link>
            <Link to='/teach-page'> 
                <a className="list-group-item list-group-item-action list-group-item-dark active p-3" href="javascript(void)">Teachers List</a>
            </Link>
            <Link to='/teach-create-user'>
                <a className="list-group-item list-group-item-action list-group-item-dark active p-3" href="javascript(void)">Create Teacher</a>
            </Link>
            <Link to='/teach-edit'>
                <a className="list-group-item list-group-item-action list-group-item-dark active p-3" href="javascript(void)">Edit Teacher</a>
            </Link>
            <Link to='/teach-del'>
                <a className="list-group-item list-group-item-action list-group-item-dark active p-3" href="javascript(void)">Delete Teacher</a>
            </Link>
            </div>
        </div>
    </>
  )
}

export default Sidebar