import React from "react";
import BoardCreatingForm from "../components/BoardCreatingForm";
import BoardList from '../components/BoardList';

const Board=()=>{
   return<div>
      <BoardCreatingForm/>
      <BoardList/>
   </div>
}

export default Board;