import api from "../services/api"
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fail, atendimentoSolicitado } from "../components/mensages";

export const Contexts = createContext({})

const ContextsProvider = ({children})=>{
  
    const navigate = useNavigate()

    const [videoEnd, setVideoEnd] = useState(false)
    // const [editRequest, setEditRequest] = useState(false)
    // const [deleteRequest, setDeleteRequest] = useState(false)
    
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
    const newJson = {...data, CreateAt: dateGenerate}
    await api
        .post('/api/leads', JSON.stringify(newJson))
        .then(function (response) {
          const idRequest = response.data.id
          atendimentoSolicitado();
          navigate(`/request/${idRequest}`, { replace: true });
          
        }).catch(function (error) {
          console.error(error);
          fail()
        });
  
      };


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