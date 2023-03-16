import { useState } from "react";


export function App(){

  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [data, setData] = useState ("")
  const [texto, setTexto] = useState("");
  const [listaTarefa, setListaTarefa] = useState([]);

  function addItem(event) {
    event.preventDefault();

    if (titulo === "" || data === "") {
      alert("Preencha todas as informações");
      return;
    }

    setListaTarefa([
      ...listaTarefa,

      {
        id: Date.now(),
        titulo : titulo,
        categoria : categoria,
        data : data,
        texto : texto,
      },
    ]);

    setTarefa("");
    setCategoria("");
    setData("");
    setId("");
    setTexto("");
  }
  
   function apagarItem(id) {
    if (confirm("Deseja realmente apagar o item?")) {
      const result = listaTarefa.filter((item) => item.id !== id);
      setListaTarefa(result);
    }
   }
   function preencheEstados(item) {
     setId(item.id);
     setTitulo(item.tarefak);
     setCategoria(item.categoria);
     setTexto(item.texto);
   }

  return(
     <div className="root">
       <div className="formulario">
     
  
        <h1>Cadastrar Tarefa</h1>
     
        <form onSubmit={addItem}>

         
         <input 
         value={titulo} 
         onChange={(event)=> setTitulo(event.target.value)}
         type="text" id="titulo" placeholder="Título" />

         <br />
         <br />

         <select  
         value={categoria}
         onChange={(event)=> setCategoria(event.target.value)}
         name="categoria" id="categoria" placeholder="Categoria">

           <option value="" disabled >Selecione uma opção</option>
           <option value="trabalho">Trabalho</option>
           <option value="lazer">Lazer</option>
           <option value="prioridade">Prioridade</option>
           <option value="outros">Outros</option>

         </select>

         <br />
         <br />

         <label htmlFor="date">Selecione uma data:</label>
         <br />
         <input type="date" placeholder="Data" id="date" value={data}
          onChange={(event)=> setData(event.target.value)}></input>

         <br />
         <br />

         <input type="text" name="texto" id="texto" placeholder="Descrição da tarefa"/>

         <br />
         <br />

         <input type="submit" value={"Cadastrar"}/>

         <br />
         <br />

         </form>
        </div>
       <div id="div-tarefas">
         <h2>Minhas Tarefas</h2>
         {listaTarefa.length > 0 ? (
        <ul>
          {listaTarefa.map((item) => (
            <li key={item.id} >
              <p>{item.id}</p>
              <p>{item.titulo}</p>
              <p>{item.categoria}</p>
              <p>{item.data}</p>
              <p>{item.texto}</p>
              <button onClick={() => apagarItem(item.id)}>Apagar</button>
              <button onClick={() => preencheEstados(item)}>Editar</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum item cadastrado</p>
      )}


       </div>


     </div>


  );
}


export default App;