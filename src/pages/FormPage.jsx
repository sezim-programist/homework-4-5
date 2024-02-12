import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

export default function FormPage() {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("")
    const dispatch = useDispatch()
    const {isDark} = useSelector(state => state.themeReducer)

    const submit = (e) => {
        e.preventDefault()
        if (name === "" || age === "" || email === "") {
            alert("Fill the inputs!!")
            return
        }
        dispatch({
            type: "CHANGE_USER_INFO",
            payload: {name, age, email}
        })
        alert("Form is submitted!!")
    }

  return (
    <div className={`appBlock ${isDark ? "dark" : "light"}`}>
        <h1>FormPage</h1>
        <Link to="user">user page</Link>
        <button onClick={()=>{dispatch({type: "CHANGE_THEME"})}} >change theme</button>

        <form onSubmit={(e) => submit(e)}>
            <input onChange={(e)=>setName(e.target.value)} type="text" name="name" />
            <input onChange={(e)=>setAge(e.target.value)} type="number" name="age" />
            <input onChange={(e)=>setEmail(e.target.value)} type="text" name="email" />
            <button type="submit">submit</button>
        </form>
    </div>
  )
}
