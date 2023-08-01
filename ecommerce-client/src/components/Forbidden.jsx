import React from 'react'
import ForbiddenImage from "../assets/images/403.svg"

export default function Forbidden() {
  return (
    <div className='container'>
        <img src={ForbiddenImage} alt="" />
    </div>
  )
}
