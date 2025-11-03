import { useState, useEffect } from "react"
import { fetchAPI } from "../../api/fetchAPI"
import { deleteAPI } from "../../api/deleteAPI";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeProvider/useTheme";

interface User {
  id: number;
  name: string;
  age: number;
}

function GetUserData() {
  const {dark} = useTheme();

  const [data, setData] = useState<User[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect (()=>{
      fetchAPI()
      .then((users: User[]) => setData(users))
      .catch((err) => setError({err}+"Failed to load users"));
      
    }, [data]);

    console.log(data);
    console.log(error);

    const handleClick = (user : User) =>{
      navigate('/update', {state : user})
    }

    const handleDelete = (id:number)=> async()=>{

      if(!id) return;

      await deleteAPI(id);
    }

  return (
    <div className="w-full h-fit
    grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
    justify-center gap-4 p-4">
      {data ? data.map(
        (e) => <div className="w-full max-w-xs flex flex-col justify-start items-start border-2 p-5 gap-3 mx-auto" key={e.id}
        style={{background: dark ? "#303236" : "#d0d5db", 
                color: dark? "white" : "black",
                borderColor: dark? "#303236" : "black"}}>
          <p>Name: {e.name}</p>
          <p>Age: {e.age}</p>
          
          <div className="flex justify-center items-center gap-2 mt-auto">
            <button className="h-fit
            flex justify-center items-center
            flex-1 p-2 text-sm
            rounded-[5px]
            cursor-pointer hover:opacity-50"
            style={{background: dark ? "#12213b" : "#4784e6", color: dark? "white" : "black"}}
            onClick={() =>handleClick(e)}>
                Update
            </button>

            <button className="h-fit
            flex justify-center items-center
            flex-1 p-2 text-sm
            rounded-[5px]
            cursor-pointer hover:opacity-50"
            style={{background: dark ? "#3d0101" : "#c76b6b", 
            color: dark? "white" : "black"}}
            onClick={handleDelete(e.id)}>
                Delete
            </button>
          </div>
        </div> ): 
        <p>{error}</p>}
    </div>
  )
}

export default GetUserData
