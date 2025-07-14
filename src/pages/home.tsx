function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50">
      <div className="mb-8">
        <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-400 text-white text-lg font-semibold shadow-lg hover:from-blue-700 hover:to-blue-500 transition">
          Create Room
        </button>
      </div>
      <div className="flex items-center gap-3">
        <label className="font-medium text-base">Enter Room ID:</label>
        <input
          type="text"
          className="px-4 py-2 rounded-lg border border-blue-200 shadow focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          placeholder="Room ID"
        />
      </div>  
    </div>
  );
}

export default HomePage;