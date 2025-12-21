import React from "react";
import {useState, useContext} from "react";
import {Link , useParams} from "react-router-dom";
import AddItem from "../components/AddItem";
import AddItemForm from "../components/AddItemForm";

const BoardDetails=()=>{
   return(
      <div className="d-flex m-top-sm flex-direction-row">
         <Link to="/">Back to Boards</Link>
      </div>
   );
};

export default BoardDetails;