import { useNavigate } from "react-router-dom"

function Header() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-35
    flex flex-col justify-center items-center gap-5
    bg-gray-300">

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
          onClick={()=> navigate("/")}>
            Register
          </button>

          <button className="w-fit h-fit
          flex justify-center items-center
          p-3
          rounded-[5px]
          cursor-pointer hover:opacity-50
          bg-blue-300"
          onClick={()=> navigate("/listData")}>
            View List
          </button>
        </div>
        
    </div>
  )
}

export default Header
