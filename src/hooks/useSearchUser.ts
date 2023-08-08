import { addUser } from "@/store/app/users";
import axios from "axios"
import { useDispatch } from "react-redux";

export function useSearchUser(){
    const dispatch = useDispatch()

    return async function getUsers(query:Record<string, any>){
        const userList = await axios.post('http://localhost:3000/users/searchUser/',query);
        dispatch(addUser(userList.data))
    }
}