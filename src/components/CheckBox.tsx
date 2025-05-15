"use client"
import React from 'react'

export default function CheckBox() {
    const [isChecked, setIsChecked] = React.useState(Boolean)
    const handleCheck=(e)=>{
        console.log(e.target.checked)
        setIsChecked(!isChecked)
    }
  return (
    <div>
        <input type="checkbox" name="check" id="check" checked={isChecked} onChange={handleCheck}/>
    </div>
  )
}
