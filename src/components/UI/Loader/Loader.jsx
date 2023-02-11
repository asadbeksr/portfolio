import React from 'react'

export default function Loader() {
  return (
    <div
    style={{
        position: 'absolute',
        height: '100vh',
        width: '100%', 
        zIndex: 11, 
        backgroundColor: "#123e4e",
        display: 'flex',
        alignItems: 'center', 
        justifyContent: 'center'
    }}
    >
        <h1 className='h1-animated'>Loading</h1>
    </div>
  )
}
