const AddItemForm=({listForm, submitHandler, title, onChangeHandler,setEditMode})=>{
   return(
      <div className="form-container">
         <div className="form-card">
            <form>
               <textarea value={title} onChange={onChangeHandler} cols="30" row="2" className="form-textarea"></textarea>
            </form>
         </div>
         <div>
            <button className="add-button" onClick={submitHandler}>
               {listForm ? "List Koro" : "Task Koro"}
            </button>
            <p className="add-item-icon" onClick={()=>setEditMode(false)}>x</p>
         </div>
      </div>
   )
}

export default AddItemForm