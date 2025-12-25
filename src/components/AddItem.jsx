import React from "react";
const AddItem=({listAddItem,setEditMode})=>{
   return(
      <div className={ listAddItem ? "add-item list-add-item": "add-item task-add-item"} onClick={()=>setEditMode(true)}>
         <p className="add-item-icon">+</p>
         <p className="add-item-taxt">
            {listAddItem?'List koro' : 'Task koro'}
         </p>
      </div>
   )
};

export default AddItem;