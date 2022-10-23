import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../validators/Form.validator';
import { ContainerButton, ContainerRegister, DoneGif, FormFields, HeaderRegister, RegisterSubTitle, RegisterTitle } from './Resquest.page.style';
import { ButtonDefaut, FormDefaut, LogoImg, MainRegister } from '../../components/form.style';
// import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Contexts } from '../../providers/Context';


const RequestPage = () => {
        
        const { setDeleteRequest,
                setEditRequest,
                editRequest,
                // updateRequest
        } = useContext(Contexts)

        const {
            register,
            handleSubmit,
            formState: { errors },
            } = useForm({resolver: yupResolver(schema)});


        const edit = () => {setEditRequest(true)}
        const editOff = () => {setEditRequest(false)}
        const deleteReq = () => {setDeleteRequest(true)}
        
    return (
            <MainRegister>
        
              <HeaderRegister>
                <LogoImg src="/logo.png" alt="Logo kenziehub" />
                
                {/* <Link replace to="/login">
                 <ButtonDarkGray>acompanhar solicitação</ButtonDarkGray>
                </Link> */}
                
              </HeaderRegister>
              <ContainerRegister>
                <DoneGif src="/done.png" alt="Done" />
                <div>
                  <RegisterTitle>Atendimento requisitado</RegisterTitle>
                  <RegisterSubTitle>Logo falaremos com você!</RegisterSubTitle>
                </div>
                {/* */}
                {/* onSubmit={handleSubmit(updateRequest)} */}
                { editRequest===true?
                <FormDefaut onSubmit={handleSubmit(d => console.log(d))}>
                  <FormFields >
                    <label htmlFor='Name'>Nome:</label>
                    <input type='text' id='Name' {...register('Name')} />
                    <p>{errors.Name?.message}</p>
        
                    <label htmlFor='CompanyName'>Nome da empresa:</label>
                    <input type='text' id='CompanyName' {...register('CompanyName')} />
                    <p>{errors.CompanyName?.message}</p>
        
                    <label htmlFor='CompanySize'>Tamanho da empresa:</label>
                    <select type='text' name='CompanySize' id='CompanySize' {...register("CompanySize")}>
                      <option disabled selected value> -- Selecione uma opção -- </option>
                      <option value='micro' >Micro: até 19 pessoas</option>
                      <option value='pequena' >Pequena: até 99 pessoas</option>
                      <option value='media' >Média: 100 - 499</option>
                      <option value='grande' >Grande: acima de 500</option>
                      <option value='corporacao' >4º Modulo</option>
                    </select>

                    <label disabled selected value htmlFor='TypeRequest'>Tipo do serviço:</label>
                    <select type='text' name='TypeRequest' id='TypeRequest' {...register("TypeRequest")}>
                      <option disabled selected value> -- Selecione uma opção -- </option>
                      <option value='Auditoria' >Auditoria</option>
                      <option value='BPO / Assessoria Contábil' >BPO / Assessoria Contábil</option>
                      <option value='Consultoria Tributária' >Consultoria Tributária</option>
                      <option value='Consultoria Trabalhista' >Consultoria Trabalhista</option>
                      <option value='Gestão de Riscos' >Gestão de Riscos</option>
                      <option value='Consultoria de Tecnologia e Gestão Empresarial' >Consultoria de Tecnologia e Gestão Empresarial</option>
                      <option value='Corporate Hosting Services' >Corporate Hosting Services</option>
                      <option value='Gestão de Ativos e Sustentabilidade' >Gestão de Ativos e Sustentabilidade</option>
                      <option value='Finanças Corporativas' >Finanças Corporativas</option>
                      <option value='Consultoria em Comércio Exterior' >Consultoria em Comércio Exterior</option>
                      <option value='Financial Advisory Services' >Financial Advisory Services</option>
                    </select>
        
                    <label htmlFor='Description'>Descrição da solicitação:</label>
                    <textarea type='text' id='Description' placeholder="Minha empresa atua na seguinte área e estamos com o seguinte problema..."{...register('Description')}/>
                    <p>{errors.Description?.message}</p>
          
                    <label htmlFor='PhoneNumber'>Celular para contato:</label>
                    <input type='text' id='PhoneNumber' {...register('PhoneNumber')} />
                    <p>{errors.PhoneNumber?.message}</p>
        
                  </FormFields>
                  <ContainerButton>
                    <ButtonDefaut>Editar requisição</ButtonDefaut>
                    <ButtonDefaut onClick={editOff}>voltar</ButtonDefaut>
                  </ContainerButton>
                </FormDefaut>
                :
                <ContainerButton>
                    <ButtonDefaut onClick={edit}>Editar</ButtonDefaut>
                    <ButtonDefaut onClick={deleteReq}>Excluir requisição</ButtonDefaut>
                </ContainerButton>
                }
              </ContainerRegister>
            </MainRegister>
            );    
}

export default RequestPage