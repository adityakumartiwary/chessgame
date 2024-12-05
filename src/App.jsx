import Chessboard from "./components/chessboard";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-5">React Chessboard</h1>
      <Chessboard />
    </div>
  );
}

export default App;
