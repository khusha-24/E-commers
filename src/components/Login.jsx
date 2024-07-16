import React from 'react'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../Firebase'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate();

  const formclick = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);

    console.log(result);

    navigate('/blogs');
    
  }
  return (
    <>
      <div className="Login d-flex bg-dark" style={{
        height: "100vh"
      }}>
        <div className='box'
          style={{
            width: '30%',
            height: '50%',
            backgroundColor: 'whitesmoke',
            position: 'absolute',
            top: '30%',
            left: '35%',
            color: 'black',
            borderRadius: '10px',
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center"
          }}>

          <img style={{
            width: '200px',
            borderRadius: '100%',
            marginBottom:"10px"

          }}
            src="data:image/jpeg;base64,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" alt="" />
          <form action="#" className='d-flex flex-column gap-3 w-75'>
            <input type="text" placeholder='Enter Your Name'  />
            <input type="Number" placeholder='Enter Your Contact' />
          </form>
          <button onClick={formclick} style={{
            padding: '10px 30px',
            backgroundColor: 'green',
            border: '1px solid green',
            color: 'whitesmoke',
            fontWeight: '700',
            borderRadius: '5px',
            width: '190px',
            marginRight: '20px',
            marginTop:"20px"
          }}>Login</button>
        </div>
      </div>
    </>
  )
}

export default Login