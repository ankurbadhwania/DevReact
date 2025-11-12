import React from 'react'
import EditProfile from './EditProfile'
import { useSelector } from 'react-redux'

const Profile = () => {
  const user = useSelector((store)=> store.user)
  return (
    <>
    {user && <EditProfile user = {user}/>}
    </>
    // <div className="flex justify-center my-10">
    //   <div className="fieldset bg-base-200 border-base-300 rounded-box w-xs  border p-4">
    //     <label className="label">Email </label>
    //     <input
    //       type="text"
    //       className="input"
    //       placeholder="Email"
    //       // value={emailId}
    //       // onChange={(e) => setEmailId(e.target.value)}
    //     />

    //     <label className="label">Password</label>
    //     <input
    //       type="text"
    //       className="input"
    //       placeholder="Password"
    //       // value={password}
    //       // onChange={(e) => setPassword(e.target.value)}
    //     />
    //     {/* <p className="text-red-500 font-semibold">{error}</p>   */}
    //     <button className="btn btn-neutral mt-4" >
    //       Login
    //     </button>
    //   </div>
    // </div>
  )
}

export default Profile