import { addUser } from "@/store/app/users";
import axios from "axios"
import { useDispatch } from "react-redux";

export function useDeleteUser(){
    const dispatch = useDispatch();

    return async function deleteUser(id: string){
        try{
            const res = await axios.delete(`http://localhost:3000/users/${id}`);
            dispatch(addUser(res.data))
        }
        catch(err:any){
            alert(err.message)
        }
    }
}