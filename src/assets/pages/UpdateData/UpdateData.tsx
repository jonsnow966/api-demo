import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { updateAPI } from "../../api/updateAPI";

interface User {
  id: number;
  name: string;
  age: number;
}

function UpdateData() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const user = state as User;
    const [name, setName] = useState<string | ''>(user.name);
    const [age, setAge] = useState<number | ''>(user.age);

    const handleUpdate = async(e: React.FormEvent)=>{
        e.preventDefault();

        if (!user?.id || !name || !age) return;

        await updateAPI({id: user.id, name, age: Number(age)});
        navigate('/listData');
    };
    return (
        <div className="w-full h-fit
            flex justify-center items-center">
            <div className="w-100 h-fit 
            flex flex-col justify-center items-center 
            bg-white">
                
                <form className="w-full 
                flex flex-col justify-center items-center gap-2 
                border-2 border-gray-300 rounded-[10px]
                p-5">
                    <h1 className="text-2xl font-bold">Update</h1>
                    <label className="w-full 
                    flex flex-col gap-1
                    text-xl
                    p-5">
                        Name: 
                        <input 
                            type="text" 
                            value={name}
                            onChange={(e)=>{setName(e.target.value)}}
                            className="border-2 outline-none"
                        />
                    </label>

                    <label className="w-full 
                    flex flex-col gap-1
                    mb-5
                    text-xl
                    p-5">
                        Age: 
                        <input 
                            type="text" 
                            value={age}
                            onChange={(e)=>{setAge(Number(e.target.value))}}
                            className="border-2 outline-none"
                        />
                    </label>
                    <button className="w-20 h-fit
                    flex justify-center items-center
                    p-3
                    rounded-[5px]
                    cursor-pointer hover:opacity-50
                    bg-blue-300"
                    onClick={handleUpdate}>
                        Update
                    </button>
                </form>

            </div>
        </div>
  )
}

export default UpdateData
