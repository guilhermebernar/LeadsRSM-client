import * as yup from 'yup';

export const schema = yup.object({
  id: 
  yup.string()
  .matches(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/gm)
  ,
  Name: 
  yup.string()
  .required('O nome é obrigatório'),
  
  CompanyName: 
  yup.string()
  .required('Nome da empresa é obrigatório'),
  
  CompanySize: 
  yup.string()
  .min(1, 'Campo obrigatorio.')
  .required(),
  
  TypeRequest: 
  yup.string()
  .min(1, 'Campo obrigatorio.')
  .required(),
  
  Description: 
  yup.string()
  .min(50, 'No minimo 50 caracteres')
  .required(),
  
  PhoneNumber: 
  yup.string()
  .matches(/^1\d\d(\d\d)?$|^0800 ?\d{3} ?\d{4}$|^(\(0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d\) ?|0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d[ .-]?)?(9|9[ .-])?[2-9]\d{3}[ .-]?\d{4}$/gm, 'Insira um número válido.')
  .min(11, 'Insira um número válido.')
});