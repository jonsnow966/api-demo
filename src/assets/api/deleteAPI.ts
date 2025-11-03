export const deleteAPI = async (id:number)=>{
    const response = fetch(`https://fakedataserver-0-production.up.railway.app/users/${id}`,{
        method:"DELETE"
    });

    
    return response;
}