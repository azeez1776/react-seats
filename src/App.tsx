import React from "react";
import Chair from "./components/Seat";

// import "./styles.css";

function App() {
  const seats = [
    {
      id: 1,
      col: 0,
      row: 0,
      status: "available"
    },
    {
      id: 2,
      col: 1,
      row: 0,
      status: "available"
    },
    {
      id: 3,
      col: 2,
      row: 0,
      status: "available"
    },
    {
      id: 4,
      col: 0,
      row: 1,
      status: "available"
    },
    {
      id: 5,
      col: 1,
      row: 1,
      status: "available"
    },
    {
      id: 6,
      col: 2,
      row: 1,
      status: "available"
    },
    {
      id: 7,
      col: 0,
      row: 2,
      status: "available"
    },
    {
      id: 8,
      col: 1,
      row: 2,
      status: "available"
    },
    {
      id: 9,
      col: 2,
      row: 2,
      status: "available"
    },
    {
      id: 10,
      col: 0,
      row: 3,
      status: "available"
    },
    {
      id: 11,
      col: 1,
      row: 3,
      status: "available"
    },
    {
      id: 12,
      col: 2,
      row: 3,
      status: "available"
    },
    {
      id: 13,
      col: 0,
      row: 4,
      status: "available"
    },
    {
      id: 14,
      col: 1,
      row: 4,
      status: "available"
    },
    {
      id: 15,
      col: 2,
      row: 4,
      status: "available"
    },
    {
      id: 16,
      col: 0,
      row: 5,
      status: "available"
    },
    {
      id: 17,
      col: 1,
      row: 5,
      status: "available"
    },
    {
      id: 18,
      col: 2,
      row: 5,
      status: "available"
    },
    {
      id: 19,
      col: 0,
      row: 6,
      status: "available"
    },
    {
      id: 20,
      col: 1,
      row: 6,
      status: "available"
    },
    {
      id: 21,
      col: 2,
      row: 6,
      status: "available"
    },
    {
      id: 22,
      col: 0,
      row: 7,
      status: "selected"
    },
    {
      id: 23,
      col: 1,
      row: 7,
      status: "available"
    },
    {
      id: 24,
      col: 2,
      row: 7,
      status: "available"
    },
    {
      id: 25,
      col: 5,
      row: 0,
      status: "available"
    },
    {
      id: 26,
      col: 6,
      row: 0,
      status: "available"
    },
    {
      id: 27,
      col: 7,
      row: 0,
      status: "available"
    },
    {
      id: 28,
      col: 5,
      row: 1,
      status: "available"
    },
    {
      id: 29,
      col: 6,
      row: 1,
      status: "available"
    },
    {
      id: 30,
      col: 7,
      row: 1,
      status: "available"
    },
    {
      id: 31,
      col: 5,
      row: 2,
      status: "available"
    },
    {
      id: 32,
      col: 6,
      row: 2,
      status: "available"
    },
    {
      id: 33,
      col: 7,
      row: 2,
      status: "available"
    },
    {
      id: 34,
      col: 5,
      row: 3,
      status: "available"
    },
    {
      id: 35,
      col: 6,
      row: 3,
      status: "available"
    },
    {
      id: 36,
      col: 7,
      row: 3,
      status: "available"
    },
    {
      id: 37,
      col: 5,
      row: 4,
      status: "available"
    },
    {
      id: 38,
      col: 6,
      row: 4,
      status: "selected"
    },
    {
      id: 39,
      col: 7,
      row: 4,
      status: "booked"
    },
    {
      id: 40,
      col: 5,
      row: 5,
      status: "available"
    },
    {
      id: 41,
      col: 6,
      row: 5,
      status: "available"
    },
    {
      id: 42,
      col: 7,
      row: 5,
      status: "selected"
    },
    {
      id: 43,
      col: 5,
      row: 6,
      status: "available"
    },
    {
      id: 44,
      col: 6,
      row: 6,
      status: "available"
    },
    {
      id: 45,
      col: 7,
      row: 6,
      status: "available"
    },
    {
      id: 46,
      col: 5,
      row: 7,
      status: "selected"
    },
    {
      id: 47,
      col: 6,
      row: 7,
      status: "available"
    },
    {
      id: 48,
      col: 7,
      row: 7,
      status: "available"
    }
  ];

  return (
    <div className="App">
      {seats.map((seat) => {
        return (
          <Chair
            status={seat.status}
            col={seat.col}
            row={seat.row}
            id={seat.id}
          />
        );
      })}
    </div>
  );
}

export default App;