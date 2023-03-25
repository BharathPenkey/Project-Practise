import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isloading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const signup = async (email, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/user/signup', {
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify({email, password})//body m jo pass kr rhe h use json m to change krna pdega na
        })
        const json = await response.json();//yha json se object mil rha h

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok){
            //save the user in localstorage
            localStorage.setItem('user', JSON.stringify(json))//(item name to store, converting into json)
            //kyuki hmne controllers me signup m email or tokan send kr rhe h

            //update the auth context
            dispatch({type: 'LOGIN', payload : json})

            setIsLoading(false)
        }
    }

    return {signup, isloading, error}
}