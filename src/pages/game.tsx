import React from 'react'

interface GameProps {
  code: string;
}

const GamePage = ({ code }: GameProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-2xl flex flex-col">
        <div>
          <h1>Your Character:</h1>

        </div>
        <div>
          <h1>Your Choice:</h1>
          
        </div>
      </div>
    </div>
  )
}

export default GamePage