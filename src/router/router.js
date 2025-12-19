import {createBrowserRouter} from "react-router-dom";
import Board from "../pages/Board";
import BoardDetails from "../pages/BoardDetails";

export const router=createBrowserRouter([
   {path:"/", element:<Board/>},
   {path:"/boards/:boardId", element:<BoardDetails/>}
]);