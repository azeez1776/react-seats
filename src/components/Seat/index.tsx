import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCouch
} from "@fortawesome/free-solid-svg-icons";


function Chair({size, status, col, row, id}:{size:number, status:string, col:number, row:number, id:string}) {

  
  return (
    <div 
    style={{
      width:'10px',
      height:'10px',
      position:'absolute',
      top:size/20 * row * 25 + 'px',
      left:size/20 * col*30 + 'px',
    }}
    >
            <div
            style={{
                position:'absolute',
                borderRadius:'50%',
                textAlign:'center',
                lineHeight:'20px',
                fontSize:size/2.1 + 'px',
                fontWeight:'bold',
                color:'white',
                marginLeft:'9px',
            }}
            >
                {id}
            </div>
 <FontAwesomeIcon 
            icon={faCouch} 
            color={status==='available'?'green':status==='booked'?'blue':'red'} 
            style={{
              fontSize: size + 'px'
            }}
            />
    </div>
  );
}

export default Chair;