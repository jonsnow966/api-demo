export const fetchAPI = async () =>{
    const response = await fetch("https://fakedataserver-0-production.up.railway.app/users",{
        method: "GET",
    });
    return response.json();
}