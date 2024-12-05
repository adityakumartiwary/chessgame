

const Chessboard = () => {
  const rows = [8, 7, 6, 5, 4, 3, 2, 1]; // Row labels (1-8)
  const cols = ["A", "B", "C", "D", "E", "F", "G", "H"]; // Column labels (A-H)

  return (
    <div className="flex flex-col items-center">
      {/* Chessboard Container */}
      <div className="relative">
        {/* Column Labels (Top) */}
        <div className="flex justify-center mb-2">
          {cols.map((col, i) => (
            <div
              key={i}
              className="w-12 h-12 flex items-center justify-center font-semibold"
            >
              {col}
            </div>
          ))}
        </div>

        {/* Chessboard Squares */}
        <div className="grid grid-cols-8 grid-rows-8 border-4 border-black">
          {rows.map((row) =>
            cols.map((col, index) => {
              const isDark = (row + index) % 2 === 1; // Alternating colors
              return (
                <div
                  key={`${row}-${col}`}
                  className={`w-12 h-12 ${
                    isDark ? "bg-[#b58863]" : "bg-[#f0d9b5]"
                  }`}
                ></div>
              );
            })
          )}
        </div>

        {/* Row Labels (Left) */}
        <div className="absolute left-0 top-0 flex flex-col h-full justify-between">
          {rows.map((row, i) => (
            <div
              key={i}
              className="w-12 h-12 flex items-center justify-center font-semibold"
            >
              {row}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chessboard;
