import { useRouteError } from "react-router-dom"

export const NotFound = () => {
    const error=useRouteError();
    console.log(error);
  return (

    <div className="text-center mt-10 ">

    <p> heir is nothing</p>
    <i >{error.messeage}</i>
   </div>
  )
}
