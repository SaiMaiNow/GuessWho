import React, { useState } from 'react'

function HomePage() {
  const [roomId, setRoomId] = useState('')

  const handleCreateRoom = () => {
    alert('สร้างห้องใหม่!')
  }

  const handleJoinRoom = () => {
    if (roomId.trim() === '') {
      alert('กรุณากรอก Room ID')
      return
    }
    alert(`เข้าห้อง: ${roomId}`)
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
      <div className="bg-white rounded-2xl shadow-2xl px-10 py-12 flex flex-col items-center w-full max-w-md">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-6 drop-shadow">Guess Who?</h1>
        <button
          className="w-full mb-8 px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-400 text-white text-lg font-semibold shadow-lg hover:from-blue-700 hover:to-blue-500 transition"
          onClick={handleCreateRoom}
        >
          Create a new room
        </button>
        <div className="w-full flex flex-col items-center gap-3">
          <input
            type="text"
            value={roomId}
            onChange={e => setRoomId(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-blue-200 shadow focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            placeholder="Enter Room ID"
          />
          <button
            className="w-full mt-2 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition font-semibold"
            onClick={handleJoinRoom}
          >
            Join room
          </button>
        </div>
      </div>
      <p className="mt-8 text-gray-500 text-sm">Create a new room or join a room with Room ID</p>
    </div>
  )
}

export default HomePage;