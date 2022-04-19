import React from "react";
import Seat from './Seats'


function BusSeats({
  status1,
  status2,
  status3,
  status4,
  status5,
  status6,
  status7,
  status8,
  status9,
  status10,
  status11,
  status12,
  status13,
  status14,
  status15,
  status16,
  status17,
  status18,
  status19,
  status20,
  status21,
  status22,
  status23,
  status24,
  status25,
  status26,
  status27,
  status28,
  status29,
  status30,
  status31,
  status32,
  status33,
  status34,
  status35,
  status36,
  status37,
  status38,
  status39,
  status40,
  status41,
  status42,
  status43,
  status44,
  status45,
  status46,
  status47,
  status48,
}:{
  status1:string,
  status2:string,
  status3:string,
  status4:string,
  status5:string,
  status6:string,
  status7:string,
  status8:string,
  status9:string,
  status10:string,
  status11:string,
  status12:string,
  status13:string,
  status14:string,
  status15:string,
  status16:string,
  status17:string,
  status18:string,
  status19:string,
  status20:string,
  status21:string,
  status22:string,
  status23:string,
  status24:string,
  status25:string,
  status26:string,
  status27:string,
  status28:string,
  status29:string,
  status30:string,
  status31:string,
  status32:string,
  status33:string,
  status34:string,
  status35:string,
  status36:string,
  status37:string,
  status38:string,
  status39:string,
  status40:string,
  status41:string,
  status42:string,
  status43:string,
  status44:string,
  status45:string,
  status46:string,
  status47:string,
  status48:string,
}) {

  const seats = [
    {
      id: '01',
      col: 0,
      row: 0,
      status: status1 || "available"
    },
    {
      id: '02',
      col: 1,
      row: 0,
      status: status2 || "available"
    },
    {
      id: '03',
      col: 2,
      row: 0,
      status: status3 || "available"
    },
    {
      id: '04',
      col: 0,
      row: 1,
      status: status4 || "available"
    },
    {
      id: '05',
      col: 1,
      row: 1,
      status: status5 || "available"
    },
    {
      id: '06',
      col: 2,
      row: 1,
      status: status6 || "available"
    },
    {
      id: '07',
      col: 0,
      row: 2,
      status: status7 || "available"
    },
    {
      id: '08',
      col: 1,
      row: 2,
      status: status8 || "available"
    },
    {
      id: '09',
      col: 2,
      row: 2,
      status: status9 || "available"
    },
    {
      id: '10',
      col: 0,
      row: 3,
      status: status10 || "available"
    },
    {
      id: '11',
      col: 1,
      row: 3,
      status: status11 || "available"
    },
    {
      id: '12',
      col: 2,
      row: 3,
      status: status12 || "available"
    },
    {
      id: '13',
      col: 0,
      row: 4,
      status: status13 || "available"
    },
    {
      id: '14',
      col: 1,
      row: 4,
      status: status14 || "available"
    },
    {
      id: '15',
      col: 2,
      row: 4,
      status: status15 || "available"
    },
    {
      id: '16',
      col: 0,
      row: 5,
      status: status16 || "available"
    },
    {
      id: '17',
      col: 1,
      row: 5,
      status: status17 || "available"
    },
    {
      id: '18',
      col: 2,
      row: 5,
      status: status18 || "available"
    },
    {
      id: '19',
      col: 0,
      row: 6,
      status: status19 || "available"
    },
    {
      id: '20',
      col: 1,
      row: 6,
      status: status20 || "available"
    },
    {
      id: '21',
      col: 2,
      row: 6,
      status: status21 || "available"
    },
    {
      id: '22',
      col: 0,
      row: 7,
      status: status22 || "selected"
    },
    {
      id: '23',
      col: 1,
      row: 7,
      status: status23 || "available"
    },
    {
      id: '24',
      col: 2,
      row: 7,
      status: status24 || "available"
    },
    {
      id: '25',
      col: 5,
      row: 0,
      status: status25 || "available"
    },
    {
      id: '26',
      col: 6,
      row: 0,
      status: status26 || "available"
    },
    {
      id: '27',
      col: 7,
      row: 0,
      status: status27 || "available"
    },
    {
      id: '28',
      col: 5,
      row: 1,
      status: status28 || "available"
    },
    {
      id: '29',
      col: 6,
      row: 1,
      status: status29 || "available"
    },
    {
      id: '30',
      col: 7,
      row: 1,
      status: status30 || "available"
    },
    {
      id: '31',
      col: 5,
      row: 2,
      status: status31 || "available"
    },
    {
      id: '32',
      col: 6,
      row: 2,
      status: status32 || "available"
    },
    {
      id: '33',
      col: 7,
      row: 2,
      status: status33 || "available"
    },
    {
      id: '34',
      col: 5,
      row: 3,
      status: status34 || "available"
    },
    {
      id: '35',
      col: 6,
      row: 3,
      status: status35 || "available"
    },
    {
      id: '36',
      col: 7,
      row: 3,
      status: status36 || "available"
    },
    {
      id: '37',
      col: 5,
      row: 4,
      status: status37 || "available"
    },
    {
      id: '38',
      col: 6,
      row: 4,
      status: status38 || "selected"
    },
    {
      id: '39',
      col: 7,
      row: 4,
      status: status39 || "booked"
    },
    {
      id: '40',
      col: 5,
      row: 5,
      status: status40 || "available"
    },
    {
      id: '41',
      col: 6,
      row: 5,
      status: status41 || "available"
    },
    {
      id: '42',
      col: 7,
      row: 5,
      status: status42 || "selected"
    },
    {
      id: '43',
      col: 5,
      row: 6,
      status: status43 || "available"
    },
    {
      id: '44',
      col: 6,
      row: 6,
      status: status44 || "available"
    },
    {
      id: '45',
      col: 7,
      row: 6,
      status: status45 || "available"
    },
    {
      id: '46',
      col: 5,
      row: 7,
      status: status46 || "selected"
    },
    {
      id: '47',
      col: 6,
      row: 7,
      status: status47 || "available"
    },
    {
      id: '48',
      col: 7,
      row: 7,
      status: status48 || "booked"
    }
  ];
   
  
  return (
    <div>
      <div className="container" style={{
       display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        height: "100%",
        backgroundColor: "#000000",
      }}>
      {seats.map((seat) => {
        return (
          <Seat
            size={30}
            status={seat.status}
            col={seat.col}
            row={seat.row}
            id={seat.id}
          />
        );
      })}
      </div>
    </div>
  );
}

export default BusSeats;