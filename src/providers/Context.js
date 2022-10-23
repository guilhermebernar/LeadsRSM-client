import api from "../services/api"
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fail, atendimentoSolicitado, atendimentoDeletado, atendimentoEditado} from "../components/mensages";

export const Contexts = createContext({})

const ContextsProvider = ({children})=>{
  
    const navigate = useNavigate()

    const [videoEnd, setVideoEnd] = useState(false)
    const [leadOn, setLeadOn] = useState(null)
    const [editRequest, setEditRequest] = useState(false)
    
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

          const nextPage = ()=> navigate(`/request/${idRequest}`,{ replace: true })
          
          setLeadOn(response.data)
          window.localStorage.setItem("id", response.data.id)

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

    const requestId = window.localStorage.getItem('id')

    async function updateRequest(data){
;
      const newJson = {
        Id: requestId,
        ...data,
        CreateAt: dateGenerate
      }

      await api.put(`/api/leads/${requestId}`, JSON.stringify(newJson))
      .then(atendimentoEditado())
      .catch(function (error) {
        console.error(error);
        fail()})
    }

    async function executeDelete(){
    const deleteId = window.localStorage.getItem('id')
    await api.delete(`/api/leads/${deleteId}`)
    .then(
    atendimentoDeletado(),
    window.localStorage.clear(),
    navigate(`/form`,{ replace: true }))
    .catch(function (error) {
      console.error(error);
      fail()}
    )}
    
    // window.localStorage.clear()
    

  return(
  <Contexts.Provider value={{
    end,
    registerLead,
    executeDelete,
    setEditRequest,
    editRequest,
    updateRequest
    
  }}>
    {children}
  </Contexts.Provider>
  )
}

export default ContextsProvider;