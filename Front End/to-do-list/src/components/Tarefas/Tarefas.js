import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineEdit,
  AiOutlineDelete,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import api from "../../services/Api";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const Tarefas = ({ title, status, id }) => {
  const MySwal = withReactContent(Swal)
  
  async function deleteTarefas() {
    try {
      await api.delete(`/tarefas/${id}`);
      MySwal.fire({
        title: 'Pronto!',
        text: 'Tarefa deletada com sucesso',
        icon: 'success',
        confirmButtonText: 'Ok',
        didOpen: () => {
          // `MySwal` is a subclass of `Swal` with all the same instance & static methods
          MySwal.stopTimer()
        },
      })
    } catch (error) {
      MySwal.fire({
        title: 'Erro!',
        text: 'A tarefa não foi deletada com sucesso',
        icon: 'success',
        confirmButtonText: 'Ok',
        didOpen: () => {
          // `MySwal` is a subclass of `Swal` with all the same instance & static methods
          MySwal.stopTimer()
        },
      })
    }
   
  }

  
  return (
    <div>
      <ul className="to-do-list">
        <li className={status != 'Pendente' ? 'info-conclud' : 'info-pend'}>
          <p>{title}</p>
          <p>
            <button>
              <Link to={`/edit/${id}`} className="icons">
                <AiOutlineEdit className="btn-info-edit"/>
              </Link>
            </button>
            <button className="icons" onClick={deleteTarefas}>
              <AiOutlineDelete className="btn-info-delete"/>
            </button>
            <button>
              <Link to={`/info/${id}`} className="icons">
                <AiOutlineInfoCircle color={status != 'Pendente' ? 'green' : 'yellow'}/>
              </Link>
            </button>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Tarefas;
