import { createContext} from "react";
import { createContext, useState} from "react";

// import { createContext, useState, useEffect } from "react";
// import api from "../services/api";
// import { useLocation, useNavigate } from "react-router-dom";
// import { fail } from "../components/mensages";

export const Contexts = createContext({})

const ContextsProvider = ({children})=>{
  
//   const navigate = useNavigate()

  const [videoEnd, setVideoEnd] = useState(false)

  

//   const [loading, setLoading] = useState(true)
//   const location = useLocation()

//   async function loginUser(data) {
//     const response = await api
//         .post('/api/leads', data)
//         .catch(function (error) {fail();});
//     // const{} = response.data; 
//   }
// const toNavigate = location.state?.from?.pathname || "/form"

  return(
  <Contexts.Provider value={{ 
    // loginUser,
    // INSERIR
  }}>
    {children}
  </Contexts.Provider>
  )
}

export default ContextsProvider;