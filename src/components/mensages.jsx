import { toast } from 'react-toastify'

const defautConfig = {
  position: "top-center",
  autoClose: 3200,
  hideProgressBar: false,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "ligth",
}

export const wellcome = () => {
toast('Bem-vindo! 😊', {
...defautConfig,
type: "success",
toastId: 1,
})} 

export const atendimentoSolicitado = () => {
toast('Atendimento solicitado com sucesso! 😊', {
...defautConfig,
type: "success",
toastId: 2,
})}

export const fail = () => {
toast('Algo errado, tente denovo...', {
...defautConfig,
type: "error",
toastId: 3,
})}