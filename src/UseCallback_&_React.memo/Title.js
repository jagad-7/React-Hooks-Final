import React from "react";

const Title = () =>{
    console.log("titile rendered");
    return(
        <div>
            <h1>UseCallback demo & React.memo</h1>
        </div>
    )
}
export default React.memo(Title)