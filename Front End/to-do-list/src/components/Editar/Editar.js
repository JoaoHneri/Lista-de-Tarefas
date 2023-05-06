import React, { useEffect, useState } from "react";
import "../Info/Info.css";
import { Link } from "react-router-dom";
import { AiOutlineCheck } from "react-icons/ai";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import api from "../../services/Api";
import { useNavigate } from "react-router-dom";

const Editar = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const { id } = useParams();
  const MySwal = withReactContent(Swal);

  const [title, setTitle] = useState('sd');
  const [descricao, setDescricao] = useState();
  const [status, setStatus] = useState();

  async function updateTarefas() {
    try {
      await api.put(`/tarefas/${id}`, {
        title: title,
        descricao: descricao,
        status: status,
      });
      MySwal.fire({
        title: "Pronto!",
        text: "Tarefa deletada com sucesso",
        icon: "success",
        confirmButtonText: "Ok",
        didOpen: () => {
          // `MySwal` is a subclass of `Swal` with all the same instance & static methods
          MySwal.stopTimer();
        },
      });
      navigate("/");
    } catch (error) {
      MySwal.fire({
        title: "Erro!",
        text: "A tarefa não foi deletada com sucesso",
        icon: "success",
        confirmButtonText: "Ok",
        didOpen: () => {
          // `MySwal` is a subclass of `Swal` with all the same instance & static methods
          MySwal.stopTimer();
        },
      });
    }
  }

  async function getTarefa() {
    const tarefasApi = await api.get(`/tarefas/${id}`);
    const { data } = tarefasApi;
    const response = data[0];
    setTitle(response.title);
    setDescricao(response.descricao);
    setStatus(response.status);
  }


  useEffect(() => {
    getTarefa();
  }, []);

  return (
    <div>
      <div className="corpo">
        <h1>Editar Tarefa </h1>
      </div>
      <div className="infos">
        <div className="container">
          <input
            type="text"
            placeholder="Titulo da Tarefa"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <p className="">
          <button className='button-tarefas' title='Clique para atualizar eata tarefa' onClick={updateTarefas}><AiOutlineCheck className="btn-info-edit" /></button>
          </p>
          <div className="status">
            <input
              type="text"
              placeholder="title"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
            <div className="input-select">
              <select
                className="select"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                name="Status">
                <option value="Pendente">Pendente</option>
                <option value="Completo">Completo</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editar;
