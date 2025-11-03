export const updateAPI = async (user: {id:number, name:string, age:number}) =>{
    const response = fetch(`https://fakedataserver-0-production.up.railway.app/users/${user.id}`,{
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({name: user.name, age: user.age}),
    })

    return response;
}