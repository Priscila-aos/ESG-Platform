import { useContext } from 'react'
import { AuthContext } from '../contexts/auth'

const useAuth = () => {
    const context = useContext(AuthContext)  
    return context
}


export default useAuth

// Ao invés de chamar o contexto em cada página, 
// criando o hook, basta chamar o useAuth no app.js