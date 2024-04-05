import React, { useReducer, useEffect, useState } from 'react'

const reducer = (state, action) =>{
    if(action.type === 'UPDATE_USER_DATA'){
        return {
            ...state,
            userData: action.payload
        }
    }
    if(action.type === 'LOADING'){
        return{
            ...state,
            isLoading: action.payload
        }
    }
    if(action.type === 'DELETE_USER'){
        const newUsersData = state.userData.filter((eachData)=>eachData.id !== action.payload)
        return{
            ...state,
            userData:newUsersData
        }
    }
    if(action.type === 'ONCLICK_EDIT'){
        return{
            ...state,
            isEditing:action.payload
        }
    }
    if(action.type === 'UPDATE_USER'){
        const newUsersData = state.userData.map((eachData)=>{
            if(eachData.id === action.payload.id){
                return{
                    id: action.payload.id,
                    name: action.payload.name,
                    email: action.payload.email
                }

            }else{
                return eachData
            }
        })
        return {
            ...state,
           userData:newUsersData
        }
    }
    return state; 
} 

const UseReducerExamThree = () => {
    const fetchUsersData = async (apiURl)=>{
        dispatch({type:'LOADING', payload: true})
        dispatch({type: 'ERROR', payload: {status: false, msg: ''}})
       try {
        const response = await fetch(apiURl)
        const data = await response.json()
        dispatch({type: 'UPDATE_USER_DATA', payload: data})
        dispatch({type:'LOADING', payload: false})
        dispatch({type: 'ERROR', payload: {status: false, msg: ''}})
       } catch (error) {
        dispatch({type: 'ERROR', payload: {status: true, msg: error.message}})
       }
    }
   
    useEffect(()=>{
        fetchUsersData ('https://jsonplaceholder.typicode.com/users')
    },[])
    const initialState = {
        userData: [],
        isLoading: false,
        isError: {status: false, msg: ''},
        isEditing: {status: false, msg: '', name: '', email: ''}
    }   

    const [state, dispatch] = useReducer(reducer, initialState)

    if(state.isLoading){
        return(
            <div>
                <h4>Loading...</h4>
            </div>
        )
    }

    const handleDelete = (id) =>{
        dispatch({type: 'DELETE_USER', payload: id})
    }

    const updateData = (id, title, email) => {
        dispatch({type: 'UPDATE_USER', payload: {id,title,email}})
        dispatch({type: 'ONCLICK_EDIT', payload:{status: false, id:"", name:"", email:""}})
    }

  return (
    <div>
        <h1>UseReducerExamThree</h1>
        {state.isEditing?.status && <EditFormContainer id={state.isEditing.id} newTitle={state.isEditing.name} newEmail={state.isEditing.email} updateData={updateData} />}
        {
            state.userData.map((eachData)=>{
                const {id, name, email} = eachData
                return(
                    <div key={id} style={{background: 'lightblue'}}>
                        <h3>{name}</h3>
                        <p>{email}</p>
                        <button onClick={()=>dispatch({type: 'ONCLICK_EDIT', payload:{status: true, id:id, name:name, email:email}})} style={{background:"green", borderradios: '1px solid gray', border:'2px', margin: '8px'}}>Edit</button>
                        <button onClick={()=>handleDelete(id)} style={{background:"red", borderradios: '1px solid gray', border:'2px'}}>Delete</button>
                    </div>
                )
            })
        }
    </div>
  )
}

const EditFormContainer = ({id, newTitle, newEmail, updateData}) => {
    const [title, setTitle] = useState(newTitle || '')
    const [email, setEmail] = useState(newEmail || '')
    return(
        <div>
            <form>
                <input type="text" name="title" id="title" value={title} onChange={e=>setTitle(e.target.value)}/>
                <input type="email" name="email" id="email" value={email} onChange={e=>setEmail(e.target.value)} />
                <button onClick={()=>updateData(id, title, email)}>Update Data</button>
            </form>
        </div>
    )
}

export default UseReducerExamThree