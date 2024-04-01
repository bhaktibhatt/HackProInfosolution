import React from 'react'

const Registerationform = () => {
  return (
    <div>
      <h1>Register to get Details</h1>
      <div>
        <div className='flex flex-col'>
          <h3>Personal Details:</h3>
          <div className='flex'>
            <input type="text" value={"Full Name"} required/>
            <input type="email" value={"email"} required/>
          </div>
          <div className='flex'>
            <input type="text" value={"Contact"} required/>
            <input type="email" value={"Courses"} required/>
          </div>
        </div>
        <div>

        </div>
      </div>

    </div>
  )
}

export default Registerationform