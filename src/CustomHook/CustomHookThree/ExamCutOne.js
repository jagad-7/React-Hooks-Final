import React, { useEffect, useState } from "react";
import useApiFetch from "./useApiFetch";


const URL = "https://jsonplaceholder.typicode.com/users";

function ExamCutOne() {
    const  [usersData, loading, isError] = useApiFetch(URL)


  if (loading) {
    return <h3>Loading...</h3>;
  }
  if(isError){
    return <h4>An error occurred!</h4>
  }

  return (
    <div>
      <h1>ExamCutOne</h1>
      {/* {JSON.stringify(userData)} */}
      <ul>
        {usersData.map((eachObj) => {
          const { id, name, email } = eachObj;
          return (
            <li key={id}>
              <h3>Name: {name}</h3>
              <p>Email: {email}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ExamCutOne;
