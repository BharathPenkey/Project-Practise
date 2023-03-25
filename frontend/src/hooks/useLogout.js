
import { useAuthContext } from './useAuthContext'

export const useLogout = () => {
    const { dispatch } = useAuthContext()

    const logout = () => {
         //remove user from storage
          localStorage.removeItem('user')
          //ab hme global state ko change(logout ) krna h

          dispatch({type : 'LOGOUT'})// no payload here
     /// jiske lie hm navbar m ek logout buttuon bnayenge

    }

    return { logout }
}
