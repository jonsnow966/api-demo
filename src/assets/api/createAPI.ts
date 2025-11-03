export const createAPI = async (user: {name: string; age:string})=>{
    const response = await fetch("https://fakedataserver-0-production.up.railway.app/users",{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
    });

    return response.json;
}