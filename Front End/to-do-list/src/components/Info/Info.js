import React, { useEffect, useState } from "react";
import "./Info.css";
import { Link } from "react-router-dom";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import api from "../../services/Api";
import { useNavigate } from "react-router-dom";

const Info = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const { id } = useParams();
  const MySwal = withReactContent(Swal);

  async function deleteTarefas() {
    try {
      await api.delete(`/tarefas/${id}`);
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

  async function getTarefas() {
    const tarefasApi = await api.get(`/tarefas/${id}`);
    const { data } = tarefasApi;
    setData(data[0]);
    console.log(data);
  }

  useEffect(() => {
    getTarefas();
  }, []);

  return (
    <div>
    <div className="corpo">
        <h1>Minhas  Tarefas </h1>
      </div>
      <div className="infos">
        <div className="container">
          <h1>{data.title}</h1>
          <p className="">
            <button title="Editar">
              <Link to={`/edit/${id}`} className="icons">
                <AiOutlineEdit className="btn-info-edit" />
              </Link>
            </button>
            <button className="icons" title="Deletar" onClick={deleteTarefas}>
              <AiOutlineDelete className="btn-info-delete" />
            </button>
          </p>
          <div className="status">
            <p>Descrição: {data.descricao}.</p>
            <div>
              <p>Status: {data.status}</p>
              <p>Data de Criação: {data.data_de_criacao}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
