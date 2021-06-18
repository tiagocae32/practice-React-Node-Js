import { useState} from 'react'
import { errorAlert, successAlert } from '../Alerts/sweetAlert'
import loginService from '../services/login'


export default function useUser () {

    const [state,setState] = useState({ loading: false,logued: false })
    
    const login = ({ username,password }) => {
        setState({ loading: true,error: false })
        const data = {username,password}
        loginService(data)
            .then(data => {
                successAlert("Success", "Login exitoso")
                window.sessionStorage.setItem("username",data.username)
                setState({ ...state,loading: false,logued: true})
            })
            .catch(err => {
                errorAlert("Error", err.response.data.message)
                window.sessionStorage.removeItem("username")
                setState({ ...state,loading: false,logued: false })
            })
    }
    
  const logout = () => {
      window.sessionStorage.removeItem('username')
      setState({
          ...state,
          logued:false
      })
  }
  
    

  return {
    isLogged:state.logued,
    isLoginLoading: state.loading,
    login,
    logout
  }
} 