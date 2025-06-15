import React from 'react'
import { useNavigate } from 'react-router-dom'

function Main() {
  const navigate = useNavigate()

  return (
    <div className="mainscreen">
      <div className="mainarea">
        <div className="logo">
          <h1>L</h1>
        </div>

        <div className="gamemode">
          <div className="firstbox">
            <p>Rastgele Harf</p>
            <p id="spaciel-one">➤</p>
          </div>

          <div className="secondbox" onClick={() => navigate('/harf-sec')}>
            <p>Harf Seç</p>
            <p id="spaciel-two">★</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
