import React from "react";
import {useState, useContext} from "react";
import {Link , useParams} from "react-router-dom";
import AddItem from "../components/AddItem";
import AddItemForm from "../components/AddItemForm";
import {BoardContext} from "../contexts/Board";
import {ListContext} from "../contexts/List";



const BoardDetails=()=>{

   const submitHandler=(e)=>{
      const id=Date.now()+('');
      e.preventDefault();
      dispatchListActions({type: "CREATE_LIST", payload:{
         id:id,
         title:listTitle,
         boardId:boardId,
      }})
   
      dispatchBoardActions({ type:"ADD_LIST_ID_TO_A_BOARD",
         payload:{
            id:boardId,
            listId:id,
         }
      })
      setEditMode(false);
      setListTitle("");
   }



   const [listTitle,setListTitle]=useState('');
   const [editMode,setEditMode]=useState(false);
   const {boardId}=useParams();
   const {dispatchBoardActions}=useContext(BoardContext);
   const {lists,dispatchListActions}=useContext(ListContext);
   const renderedList=lists.filter((item)=>item.boardId===boardId);
   return(
      <div className="d-flex m-top-sm flex-direction-row">
         <Link to="/">Back to Boards</Link>
         {renderedList.map((list)=>(
            <li key={list.id}>{list.title}</li>
         ))}
         {editMode===false ? 
         (<AddItem listAddItem={true} setEditMode={setEditMode}/>):
         (<AddItemForm
            listForm={true}
            title={listTitle}
            onChangeHandler={(e)=>setListTitle(e.target.value)}
            setEditMode={setEditMode}
            submitHandler={submitHandler}
            />
         )}
      </div>
   );
};

export default BoardDetails;