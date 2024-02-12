import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'

export default function UserPage() {
    const dispatch = useDispatch()

    const user = useSelector(state => state.userReducer)
    const {isDark} = useSelector(state => state.themeReducer)
    console.log(isDark);
  return (
    <div className={`appBlock ${isDark ? "dark" : "light"}`}>
        <h1>UserPage</h1>
        <Link to="/">form page</Link>
        <button onClick={()=>{dispatch({type: "CHANGE_THEME"})}} >change theme</button>

        <div>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
        </div>
    </div>
  )
}
