import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineEdit, AiOutlineDelete, AiOutlineInfoCircle} from 'react-icons/ai'
import './Home.css'
const Home = () => {
  return (
    
    
    <>
    
    <div className='container'>

      <div className='table'>
         <h1 className='Title'>Minhas Tarefas</h1>
            <div className='row'>
            <p><strong>Estudar JavaScript</strong></p>
            <p><span>Status: Pendente </span>
            {/* <select className="select" 
            value='--'
             name="Status">
              <option value="Pendente"selected> Pendente </option>
              <option value="Em Andamento" > Em Andamento</option>
              <option value="Completo">Completo</option>
            </select> */}
            </p>
                <p><Link to={'/info'} className='icons'><AiOutlineEdit/></Link></p>
                <p className='icons'><AiOutlineDelete/></p>
                <p ><Link to={'/info'} className='icons'><AiOutlineInfoCircle/></Link></p>
            </div>
            </div>
        </div>

    </>
    
  )
}

export default Home
