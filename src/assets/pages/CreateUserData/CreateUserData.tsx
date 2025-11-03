import { useState } from "react";
import { createAPI } from "../../api/createAPI";
import { useTheme } from '../../context/ThemeProvider/useTheme';

function CreateUserData(){
    const { dark } = useTheme();
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    const handleSubmit = async (e: React.FormEvent)=>{
        e.preventDefault();

        if(!name || !age) return;

        await createAPI({name, age});

        setName("");
        setAge("");
    }

    return(
        <div className="w-full h-fit
        flex justify-center items-start">

            <div className=" w-100 h-fit 
            flex flex-col justify-center item-start" 
            style={{background: dark ? "#42454a" : "#d0d5db", color: dark? "white" : "black"}}>
                <form className="w-full 
                flex flex-col justify-center items-center gap-2 
                border-2 border-black rounded-[10px]
                p-5"
                style={{background: dark ? "#303236" : "#d0d5db", 
                color: dark? "white" : "black",
                borderColor: dark? "#303236" : "black"}}>
                    <h1 className="text-2xl font-bold">Register</h1>
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
                            onChange={(e)=>{setAge(e.target.value)}}
                            className="border-2 outline-none"
                        />
                    </label>
                    <button className="w-20 h-fit
                    flex justify-center items-center
                    p-3
                    rounded-[5px]
                    cursor-pointer hover:opacity-50
                    bg-blue-300"
                    style={{background: dark ? "#12213b" : "#4784e6", color: dark? "white" : "black"}}
                    onClick={handleSubmit}>
                        Register
                    </button>
                </form>

            </div>
        </div>
    )
}

export default CreateUserData