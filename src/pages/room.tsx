import React from 'react'

import { useSearchParams, useNavigate } from 'react-router-dom';

function RoomPage() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const code = searchParams.get('code');

    React.useEffect(() => {
        if (!code) {
            navigate('/error');
        }
    }, [code, navigate]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50">
            <div className="bg-white rounded-2xl shadow-xl px-10 py-8 flex flex-col items-center w-full max-w-md">
                <h1 className="text-3xl font-bold text-blue-700 mb-4">Room</h1>
                <p className="text-gray-600 mb-6">Share this room ID with your friends to join:</p>
                <div className="flex items-center gap-2 mb-8">
                    <span className="font-mono text-lg bg-blue-100 text-blue-700 px-4 py-2 rounded-lg select-all">{code}</span>
                    <button className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-sm">
                        Copy
                    </button>
                </div>
                <div className="w-full">
                    <h2 className="text-xl font-semibold mb-2 text-blue-600">Players</h2>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                            <span className="text-gray-800">Player 1 (You)</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                            <span className="text-gray-800">Waiting for player...</span>
                        </li>
                    </ul>
                </div>
                <button className="mt-8 w-full py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-xl font-semibold shadow-lg hover:from-blue-700 hover:to-blue-500 transition">
                    Start Game
                </button>
            </div>
        </div>
    )
}

export default RoomPage

