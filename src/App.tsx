import React from "react";
import Chair from "./components/Seat";

import "./styles.css";

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