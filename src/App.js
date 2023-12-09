import React, { useState } from 'react';
import styled from 'styled-components';
import { FireDb } from './firebaseConfig';
import { collection, addDoc } from "firebase/firestore"; 

const FormularioWrapper = styled.form`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const App = () => {
  const[results,setResults] = useState([])
  const [formulario, setFormulario] = useState({
    Nome: '',
    NomeAlternativos: '',
    Cor:'',
    URL:'',
    Descricao: '',
    Colheita: '',
    Solo: '',
    Luz: '',
    Rega: '',
    Regiao: '',
    Detalhes: '',
    PreparacaoDoSolo: '',
    Plantio: '',
    RegaDetalhes: '',
    Adubacao: '',
    ProtecaoDePragas: '',
    Paciencia: '',
    ColheitaDetalhes: ''
  });

  const handleChange = (campo, valor) => {
    setFormulario({ ...formulario, [campo]: valor });
    setResults({ ...formulario, [campo]: valor });
  };

  const handleSubmit =  async (event) => {
    event.preventDefault();
    await addDoc(collection(FireDb, "Plantas"), {
    Nome: formulario.Nome,
    NomeAlternativos: formulario.NomeAlternativos,
    Cor:formulario.Cor,
    URL:formulario.URL,
    Descricao: formulario.Descricao,
    Colheita: formulario.Colheita,
    Solo: formulario.Solo,
    Luz: formulario.Luz,
    Rega: formulario.Rega,
    Regiao: formulario.Regiao,
    Detalhes: formulario.Detalhes,
    PreparacaoDoSolo: formulario.PreparacaoDoSolo,
    Plantio: formulario.Plantio,
    RegaDetalhes: formulario.RegaDetalhes,
    Adubacao: formulario.Adubacao,
    ProtecaoDePragas: formulario.ProtecaoDePragas,
    Paciencia: formulario.Paciencia,
    ColheitaDetalhes: formulario.ColheitaDetalhes,
    });
    console.log(formulario);
  };
  return (
    <div>
    <FormularioWrapper onSubmit={handleSubmit}>
      <Label>
        Nome:
        <Input
          type="text"
          value={formulario.Nome}
          onChange={(e) => handleChange('Nome', e.target.value)}
        />
      </Label>
      <Label>
        Nome Alternativos:
        <Input
          type="text"
          value={formulario.NomeAlternativos}
          onChange={(e) => handleChange('NomeAlternativos', e.target.value)}
        />
      </Label>
      <Label>
      Cor:
        <Input
          type="text"
          value={formulario.Cor}
          onChange={(e) => handleChange('Cor', e.target.value)}
        />
      </Label><Label>
      URL:
        <Input
          type="text"
          value={formulario.URL}
          onChange={(e) => handleChange('URL', e.target.value)}
        />
      </Label><Label>
      Descrição:
        <Input
          type="text"
          value={formulario.Descricao}
          onChange={(e) => handleChange('Descricao', e.target.value)}
        />
      </Label><Label>
      Colheita:
        <Input
          type="text"
          value={formulario.Colheita}
          onChange={(e) => handleChange('Colheita', e.target.value)}
        />
      </Label><Label>
      Solo:
        <Input
          type="text"
          value={formulario.Solo}
          onChange={(e) => handleChange('Solo', e.target.value)}
        />
      </Label><Label>
      Luz:
        <Input
          type="text"
          value={formulario.Luz}
          onChange={(e) => handleChange('Luz', e.target.value)}
        />
      </Label><Label>
      Rega:
        <Input
          type="text"
          value={formulario.Rega}
          onChange={(e) => handleChange('Rega', e.target.value)}
        />
      </Label><Label>
      Região:
        <Input
          type="text"
          value={formulario.Regiao}
          onChange={(e) => handleChange('Regiao', e.target.value)}
        />
      </Label><Label>
      Detalhes:
        <Input
          type="text"
          value={formulario.Detalhes}
          onChange={(e) => handleChange('Detalhes', e.target.value)}
        />
      </Label><Label>
      Preparação Do Solo:
        <Input
          type="text"
          value={formulario.PreparacaoDoSolo}
          onChange={(e) => handleChange('PreparacaoDoSolo', e.target.value)}
        />
      </Label><Label>
      Plantio:
        <Input
          type="text"
          value={formulario.Plantio}
          onChange={(e) => handleChange('Plantio', e.target.value)}
        />
      </Label><Label>
      Rega Detalhes:
        <Input
          type="text"
          value={formulario.RegaDetalhes}
          onChange={(e) => handleChange('RegaDetalhes', e.target.value)}
        />
      </Label><Label>
      Adubação:
        <Input
          type="text"
          value={formulario.Adubacao}
          onChange={(e) => handleChange('Adubacao', e.target.value)}
        />
      </Label><Label>
      Protecao De Pragas:
        <Input
          type="text"
          value={formulario.ProtecaoDePragas}
          onChange={(e) => handleChange('ProtecaoDePragas', e.target.value)}
        />
      </Label><Label>
      Paciencia:
        <Input
          type="text"
          value={formulario.Paciencia}
          onChange={(e) => handleChange('Paciencia', e.target.value)}
        />
      </Label>
      <Label>
      ColheitaDetalhes:
        <Input
          type="text"
          value={formulario.ColheitaDetalhes}
          onChange={(e) => handleChange('ColheitaDetalhes', e.target.value)}
        />
      </Label>
      <Button type="submit">Enviar</Button>
    </FormularioWrapper>
    </div>
  );
};

export default App;