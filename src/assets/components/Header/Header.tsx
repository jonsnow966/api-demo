import { useNavigate } from "react-router-dom"
import { useTheme } from "../../context/ThemeProvider/useTheme";

function Header() {
  const navigate = useNavigate();
  const {dark, setDark} = useTheme();

  return (
    <div className="w-full h-35
    flex flex-col justify-center items-center gap-5
    "
    style={{background: dark ? "#272829" : "#bfcde3", color: dark? "white" : "black"}}>

        <h1 className="text-2xl font-bold">API DEMO</h1>

        <div className="w-fit h-fit
        flex justify-center items-center gap-10
        ">

          <button className="w-fit h-fit
          flex justify-center items-center
          p-3
          rounded-[5px]
          cursor-pointer hover:opacity-50
          bg-blue-300"
          style={{background: dark ? "#12213b" : "#4784e6", color: dark? "white" : "black"}}
          onClick={()=> navigate("/")}>
            Register
          </button>

          <button className="w-fit h-fit
          flex justify-center items-center
          p-3
          rounded-[5px]
          cursor-pointer hover:opacity-50
          bg-blue-300"
          style={{background: dark ? "#12213b" : "#4784e6", color: dark? "white" : "black"}}
          onClick={()=> navigate("/listData")}>
            View List
          </button>

          <button className="w-fit h-fit
          flex justify-center items-center
          p-3
          rounded-[5px]
          cursor-pointer hover:opacity-50
          "
          style={{background: dark ? "#12213b" : "#4784e6", color: dark? "white" : "black"}}
          onClick={()=> setDark(!dark)}>
            {dark? "Light" : "Dark"}
          </button>
        </div>
        
    </div>
  )
}

export default Header
