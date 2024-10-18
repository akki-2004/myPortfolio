import React from 'react'

export default function Resume() {
    const center={
        height:"40vh",
        border:"8px solid green"
    }
    const center1={
        padding:"2%",
        textAlign:"center"
    }
    const btn={
        
        backgroundColor:"red"
    }
  return (
    <div style={center}>
      <p style={center1}>Do you Want to hire me?</p>
      <button style={btn}>Check</button>

    </div>
  )
}
