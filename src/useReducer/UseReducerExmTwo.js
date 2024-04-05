import React, { useEffect, useReducer, useState } from "react";

const reducer = (state, action) => {
  if (action.type === "UPDATE_USER_DATA") {
    return {
      ...state,
      usersData: action.payload,
    };
  }
  if(action.type === 'Loading'){
    return{
      ...state,
      isLoading: action.paload
    }
  }
  if(action.type === 'DELETE_USER'){
    const newUsers = state.usersData.filter((eachData)=>
    eachData.id!==action.paload)
    return{
      ...state,
      usersData:newUsers
    }
    }
  if(action.type === "ONCLICK_EDIT"){
    return{
      ...state,
      isEditing: action.payload,
    }
  }
  if(action.type === 'UPDATE_USER'){
    const newUsers = state.usersData.filter((eachData)=>{
      if(eachData.id === action.paload.id){
        return{
          id: action.paload.id,
          title: action.paload.title,
          email: action.paload.email,
        }
      }else{
        return eachData
      }
    })
    return{
      ...state,
      usersData: newUsers
    }
  }
  return state;
};
const initialState = {
  usersData: [],
  isLoading: false,
  isError: { status: false, msg: "" },
  isEditing: {status: false, id: '', name: '', email: ''}
};

const UseReducerExmTwo = () => {
  dispatch({ type: "Loading", payload: true });
  dispatch({ type: "ERROR", paload: { status: false, msg: "" } });
  try {
    const usersDataFetch = async (apiURL) => {
      const response = await fetch(apiURL);
      const data = await response.json();
      dispatch({ type: "UPDATE_USER_DATA", paload: data });
      dispatch({ type: "Loading", payload: false });
      dispatch({ type: "ERROR", paload: { status: false, msg: "" } });
    };
  } catch (error) {
    dispatch({ type: "Loading", payload: false });
    dispatch({ type: "ERROR", paload: { status: true, msg: error.message } });
  }

  useEffect(() => {
    usersDataFetch("https://jsonplaceholder.typicode.com/users");
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);

  if(state.isLoading){
    return(
      <div>
        <h3>Loading...</h3>
      </div>
    )
  }
  
  const updateData = (id, name, email) => {
    dispatch({type: 'UPDATE_USER', payload:{
      id, name, email
    }})
    dispatch({type: 'ONCLICK_EDIT', payload:{status: false, id:"", name:"", email:""}})
  }

  const handleDelete = (id) => {
    dispatch({type: 'DELETE_USER', payload:id})
  }

  return (
    <div>
      <h1>Users Information</h1>
      {state.isEditing?.status && <EditFormContainer id={state.isEditing.id} commingTitle={state.isEditing.title} commingEmail={state.isEditing.email} updateData={updateData} />}
      {state.usersData.map((eachData) => {
        const { id, name, email } = eachData;
        return (
          <div key={id} style={{ background: "lightblue" }}>
            <h3>{name}</h3>
            <p>{email}</p>
            <button onClick={()=>handleDelete(id)}>edit</button>
            <button onClick={()=>dispatch({type: 'ONCLICK_EDIT', payload:{status: true, id:id, name:name, email,email}})}>delete</button>
          </div>
        );
      })}
    </div>
  );
};


const EditFormContainer = ({id, commingTitle, commingEmail, updateData}) =>{
  const [title, setTitle] = useState(commingTitle || '')
  const [email, setEmail] = useState(commingEmail || '')

  return(
    <>
    <form>
      <input type="text" name="titlle" id="title" value={title} onChange={(e)=>setTitle(e.target.value)} />
      <input type="email" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
      <button onClick={()=>updateData(id, title, email)}>Update Data</button>
    </form>
    </>
  )
}

export default UseReducerExmTwo;
