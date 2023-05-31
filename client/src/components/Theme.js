import React from 'react'
import ThemeToggleMain from '../css/Theme';

const Theme = () => {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",width:"100vw"}}>
      <span style={{padding:"50px",backgroundColor:"#ddd"}}>
        {" "}
        <ThemeToggleMain />
      </span>
    </div>
  );
}

export default Theme