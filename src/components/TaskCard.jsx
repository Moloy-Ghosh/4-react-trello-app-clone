import {useState,useContext} from 'react';
import {BoardContext} from '../contexts/Board';
import {ListContext} from '../contexts/List';
import {TaskContext} from '../contexts/Task';
import AddItemForm from './AddItemForm';

const TaskCard=({task})=>{
   const [editMode,setEditMode]=useState(false);
   const [taskTitle,setTaskTitle]=useState(task.title);
   const {dispatchBoardActions}=useContext(BoardContex);
   const {dispatchListActions}=useContext(ListContext);
   const {dispatchTasksActions}=useContext(TaskContext);

   const removeHandler=()=>{
      dispatchTaskActions({
         type:"REMOVE_TASK",
         payload:task.id,
      });
      dispatchListActions({
         type:"REMOVE_TASK_ID_FROM_A_LIST",
         payload:{
            id:task.listId,
            taskId:task.id,
         },
      }),
      dispatchBoardActions({
         type:"REMOVE_TASK_ID_FROM_A_BOARD",
         payload:{
            id:task.boardId,
            taskId:task.id,
         }
      })
   }

   const submitHandler=()=>{
      dispatchTasksActions({type:"UPDATE_TASK_TITLE",
         payload:{
            id:task.id,
            title:taskTitle
         }
      })
      setEditMode(false);
   }
   return(
      <div>
         {editMode===false ? (
            <div onClick={()=>setEditMode(true)} className="task-card">
               <p>{task.title}</p>
               <p onClick={removeHandler} className="add-item-icon">X</p>
            </div>) : (<AddItemForm title={tasktitle} onChangeHandler={(e)=>{
               setTaskTitle(e.target.value);
            }}
            setEditMode={setEditMode}
            submitHandler={submitHandler}
            listForm={false}
            />)}
      </div>
   )
}

export default TaskCard