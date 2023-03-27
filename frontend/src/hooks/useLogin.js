import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isloading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()
    const navigate = useNavigate()

    const login = async (email, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('/carRental/user/login', {
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
            navigate('/CarBooking')
            //update the auth context
            dispatch({type: 'LOGIN', payload : json})//kyuki signup or login lgbhag same hote h

            setIsLoading(false)
            
        }
    }

    return {login, isloading, error}
}