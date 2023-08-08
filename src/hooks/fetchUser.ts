import { addUser } from "@/store/app/users";
import axios from "axios"
import { useDispatch } from "react-redux";

export function useFetchUser(){
    const dispatch = useDispatch()

    return async function getUserList(){
        try{
            const res = await axios.get('http://localhost:3000/users');
            dispatch(addUser(res.data));
        }catch(err:any){
            alert(err.message)
        }
    }
}