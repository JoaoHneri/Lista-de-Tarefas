import React, { useEffect, useState } from 'react'
import './Task.css'
import Tarefas from '../Tarefas/Tarefas'
import api from '../../services/Api'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Task = () => {
    const [tarefas, setTarefas] = useState([])
    const [dataInput, setDataInput] = useState({
      title: '',
      descricao:''
    })
    const [dataOutput, setDataOutput] = useState([])
    const MySwal = withReactContent(Swal)

    async function getTarefas(){
      
      const tarefasApi = await api.get('/tarefas');
      const {data} = tarefasApi
      setTarefas(data);
      setDataOutput(data);
    }
  
    useEffect(()=>{
      getTarefas();
    },[dataOutput]) //
  

    async function addTarefa(){
      try {
        await api.post('/tarefas', {
          title: dataInput.title,
          descricao: dataInput.descricao
        }
        
        );
        setDataInput({...dataInput, title: '', descricao: ''})
        MySwal.fire({
          title: 'Pronto!',
          text: 'Tarefa adicionada com sucesso',
          icon: 'success',
          confirmButtonText: 'Ok',
          didOpen: () => {
            MySwal.stopTimer()
          },
        })
      } catch (error) {
        MySwal.fire({
          title: 'Erro!',
          text: 'A tarefa não foi adicionada com sucesso',
          icon: 'error',
          confirmButtonText: 'Ok',
          didOpen: () => {
            MySwal.stopTimer()
          },
        })
      }
    }


  return (
    <>
    <div className='corpo'>
      <h1>Minhas Tarefas</h1>
      <div className='content'>
        <div className='add-tarefa'>
          <div className='Form-Inputs'>
          <input type='text' className='input-tarefas' value={dataInput.title} placeholder='Digite sua nova task' onChange={(e) => setDataInput({...dataInput, title: e.target.value})}/>
            <input type='text' className='input-tarefas' value={dataInput.descricao} placeholder='Digite a Descrição da sua nova Task' onChange={(e) => setDataInput({...dataInput, descricao: e.target.value})}/>
          </div>
            <button className='button-tarefas' title='Clique para atualizar esta tarefa' onClick={addTarefa}>+</button>
        </div>
        <div className='show-tarefas'>
          {tarefas.map(tarefas => (
            <Tarefas key={tarefas.id} title={tarefas.title} status={tarefas.status} id={tarefas.id}/>
          ))}
        </div>
      </div>
    </div>
    </>
    
  )
}

export default Task
