import { useState, useEffect } from "react"
import { fetchAPI } from "../../api/fetchAPI"
import { deleteAPI } from "../../api/deleteAPI";
import { useNavigate } from "react-router-dom";

interface User {
  id: number;
  name: string;
  age: number;
}

function GetUserData() {
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
    grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
      {data ? data.map(
        (e) => <div className="w-70 flex flex-col justify-start items-start border-2 p-10 gap-2" key={e.id}>
          <p>Name: {e.name}</p>
          <p>Age: {e.age}</p>
          
          <div className="flex justify-center items-center gap-3 mt-5">
            <button className="w-20 h-fit
            flex justify-center items-center
            p-3
            rounded-[5px]
            cursor-pointer hover:opacity-50
            bg-blue-300"
            onClick={() =>handleClick(e)}>
                Update
            </button>

            <button className="w-20 h-fit
            flex justify-center items-center
            p-3
            rounded-[5px]
            cursor-pointer hover:opacity-50
            bg-red-300"
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
