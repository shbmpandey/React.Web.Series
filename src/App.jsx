import React from "react";
import "./index.css";
import Card from "./Card";
import Sdata from "./Sdata";

// const Nname=(val)=>
//     <Card
//        imgsrc={val.imgsrc}
//        sname={val.sname}
//        title={val.title}
//        link={val.link}
    
//     />
// ;

const App =  () =>
          <>
            <h1 className="heading_style">Top 10 Netflix WebSeries</h1>
            {Sdata.map((val)=>
    <Card
       imgscr={val.imgscr}
       sname={val.sname}
       title={val.title}
       link={val.link}
    
    />
)}
 
             </>

;
export default App;