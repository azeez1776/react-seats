import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCouch
} from "@fortawesome/free-solid-svg-icons";


function Chair({status, col, row, id}:{status:string, col:number, row:number, id:number}) {

  
  return (
    <div 
    style={{
      width:'10px',
      height:'10px',
      position:'absolute',
      top:row*25 + 'px',
      left:col*30 + 'px',
    }}
    >
 <FontAwesomeIcon 
            icon={faCouch} 
            color={status==='available'?'green':status==='booked'?'blue':'red'} 
            style={{
              fontSize:'20px'
            }}
            />
    </div>
  );
}

export default Chair;