import api from "../services/api"
import { createContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { fail, atendimentoSolicitado, atendimentoDeletado, atendimentoEditado} from "../components/mensages";

export const Contexts = createContext({})

const ContextsProvider = ({children})=>{
  
    const navigate = useNavigate()
    const location = useLocation()

    const [videoEnd, setVideoEnd] = useState(false)
    const [leadOn, setLeadOn] = useState(null)
    const [editRequest, setEditRequest] = useState(false)
    const [deleteRequest, setDeleteRequest] = useState(false)
    
    const end = () => {
      setVideoEnd(true)
    }

    useEffect(() => {
        if(videoEnd===true&&leadOn===null) {
          navigate('/form', { replace: true });
        }
    },[navigate, videoEnd])

  const dateGenerate = new Date();
  
  async function registerLead(data) {
    const newJson = {...data, CreateAt: dateGenerate}

    await api
        .post('/api/leads', JSON.stringify(newJson))
        .then(function (response) {
          const res = response.data
          const idRequest = res.id
          console.log(idRequest)
          const nextPage = ()=> navigate(`/request/${idRequest}`,{ replace: true })
          
          setLeadOn(response.data)

          atendimentoSolicitado();
          
          if(res!==undefined && setLeadOn!==null){
            setTimeout(() => {
              nextPage()
            }, "3000")
          }
        
        })
        .catch(function (error) {
          console.error(error);
          fail()
        });
    };

    async function updateRequest(data){
      const newJson = {
        Id: leadOn.id,
        ...data,
        CreateAt: dateGenerate
      }
      await api.put(`/api/leads/${leadOn.id}`, JSON.stringify(newJson))
      .then(atendimentoEditado())
      .catch(function (error) {
        console.error(error);
        fail()})
    }


    if(deleteRequest===true){
    async function executeDelete(){
    await api.delete(`/api/leads/${leadOn.id}`)
    .then(atendimentoDeletado())
    .catch(function (error) {
      console.error(error);
      fail()
    })}
    executeDelete()
    }

  return(
  <Contexts.Provider value={{
    end,
    registerLead,
    setDeleteRequest,
    setEditRequest,
    editRequest,
    updateRequest
    
  }}>
    {children}
  </Contexts.Provider>
  )
}

export default ContextsProvider;