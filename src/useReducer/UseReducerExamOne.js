import React, { useReducer } from "react";

const reducer = (state, action) => {
  if(action.type === 'DELETE-PERSON'){
    const newPersons = state.data.filter((eahcPerson)=>{
      return eahcPerson.id!== action.payload
    })
    return{
      ...state,
      data: newPersons,
      length: state.length - 1
    }
  }
  return state
};
const UseReducerExmOne = () => {
  const  initialState = {
    data: [
      { id: "12345", name: "jagadeesh", email: "jagadeesh555.bj@gmail.com" },
      { id: "abcde", name: "jai", email: "jai@gmail.com" },
    ],
    length: 2,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleDelete = (id) =>{
    dispatch({
      type: 'DELETE-PERSON',
      payload: id
    })
  }
  const handleEdit= (id) => {
    dispatch({
      type: 'UPDATE-PERSON',
      payload: id
    })
  }
  return (
    <div>
      <h1>UseReducerExmOne</h1>
      <h2>Current State Length : {state.length}</h2>
      {state.data.map((eachObj) => {
        const { id, name, email } = eachObj;
        return (
          <div key={id}>
            <h1>{name}</h1>
            <p>{email}</p>
            <button onClick={()=>handleDelete(id)}>
              delete
            </button>
            <button onClick={()=>handleEdit(id)}>edit</button>
          </div>
        );
      })}
    </div>
  );
};

export default UseReducerExmOne;
