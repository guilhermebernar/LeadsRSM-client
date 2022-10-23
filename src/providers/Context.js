// import { createContext} from "react";
import api from "../services/api"

import { createContext, useState, useEffect } from "react";
// import api from "../services/api";
import { useNavigate } from "react-router-dom";
// import { fail } from "../components/mensages";

export const Contexts = createContext({})

const ContextsProvider = ({children})=>{
  
    const navigate = useNavigate()

//   const [loading, setLoading] = useState(true)
//   const location = useLocation()

    const [videoEnd, setVideoEnd] = useState(false)
    
    const end = () => {
      setVideoEnd(true)
    }

    useEffect(() => {
        if(videoEnd===true) {
          navigate('/form', { replace: true });
        }
    },[navigate, videoEnd])

  const dateGenerate = new Date();
  
  async function registerLead(data) {
    const newJson = JSON.stringify({...data, createAt: dateGenerate})
    await api
        .post('/api/leads', newJson)
        .catch(function (error) {console.log(error)});
    // const toNavigate = location.state?.from?.pathname || "/end"
  }


  return(
  <Contexts.Provider value={{
    registerLead,
    end
  }}>
    {children}
  </Contexts.Provider>
  )
}

export default ContextsProvider;