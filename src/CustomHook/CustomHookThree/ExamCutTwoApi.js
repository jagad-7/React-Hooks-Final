import React, { useEffect, useState } from "react";
import useApiFetch from "./useApiFetch";

const URL = "https://jsonplaceholder.typicode.com/posts";

function ExamCutTwoApi() {
   const  [postsData, loading, isError] = useApiFetch(URL)

  if (loading) {
    return <h3>Loading...</h3>;
  }
  if(isError){
    return <h4>An error occurred!</h4>
  }

  return (
    <div>
      <h1>ExamCutTwoApi</h1>
      {/* {JSON.stringify(postsData)} */}
      <ul>
        {postsData.map((eachObj) => {
          const { id, title} = eachObj;
          return (
            <li key={id}>
              <h3>{title}</h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ExamCutTwoApi;
