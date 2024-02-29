import { useState } from 'react'; // Importa useState do React para gerenciamento de estado
import * as C from './styles'; // Importa os estilos para o componente
import { Item } from '../../types/Item'; // Importa o tipo Item
import { categories } from '../../data/categories'; // Importa as categorias de despesas e receitas
import { newDateAdjusted } from '../../helpers/dateFilter'; // Importa a função newDateAdjusted para ajustar a data

type Props = {
  onAdd: (item: Item) => void; // Propriedade onAdd que recebe uma função para adicionar um item
};

export const InputArea = ({ onAdd }: Props) => { // Componente da área de entrada
  const [dateField, setDateField] = useState(''); // Estado para o campo de data
  const [categoryField, setCategoryField] = useState(''); // Estado para o campo de categoria
  const [titleField, setTitleField] = useState(''); // Estado para o campo de título
  const [valueField, setValueField] = useState(0); // Estado para o campo de valor

  let categoryKeys: string[] = Object.keys(categories); // Obtém as chaves das categorias

  const handleAddEvent = () => { // Função para lidar com o evento de adição de item
    let errors: string[] = []; // Array para armazenar erros de validação

    if(isNaN(new Date(dateField).getTime())) { // Verifica se a data é válida
      errors.push('Data inválida!');
    }
    if(!categoryKeys.includes(categoryField)) { // Verifica se a categoria é válida
      errors.push('Categoria inválida!');
    }
    if(titleField === '') { // Verifica se o título não está vazio
      errors.push('Título vazio!');
    }
    if(valueField <= 0) { // Verifica se o valor é válido
      errors.push('Valor inválido!');
    }

    if(errors.length > 0) { // Se houver erros, exibe um alerta com os erros
      alert(errors.join("\n"));
    } else { // Caso contrário, adiciona o item e limpa os campos
      onAdd({
        date: newDateAdjusted(dateField),
        category: categoryField,
        title: titleField,
        value: valueField
      });
      clearFields();
    }
  }

  const clearFields = () => { // Função para limpar os campos
    setDateField(''); // Limpa o campo de data
    setCategoryField(''); // Limpa o campo de categoria
    setTitleField(''); // Limpa o campo de título
    setValueField(0); // Limpa o campo de valor
  }

  return (
      <C.Container> {/* Contêiner da área de entrada */}
        <C.InputLabel> {/* Rótulo e campo de entrada para a data */}
          <C.InputTitle>Data</C.InputTitle>
          <C.Input type="date" value={dateField} onChange={e => setDateField(e.target.value)} />
        </C.InputLabel>
        <C.InputLabel> {/* Rótulo e campo de entrada para a categoria */}
          <C.InputTitle>Categoria</C.InputTitle>
          <C.Select value={categoryField} onChange={e => setCategoryField(e.target.value)}>
            <>
              <option></option>
              {categoryKeys.map((key, index) => ( // Mapeia as categorias para opções do menu suspenso
                <option key={index} value={key}>{categories[key].title}</option>
              ))}
            </>
          </C.Select>
        </C.InputLabel>
        <C.InputLabel> {/* Rótulo e campo de entrada para o título */}
          <C.InputTitle>Título</C.InputTitle>
          <C.Input type="text" value={titleField} onChange={e => setTitleField(e.target.value)} />
        </C.InputLabel>
        <C.InputLabel> {/* Rótulo e campo de entrada para o valor */}
          <C.InputTitle>Valor</C.InputTitle>
          <C.Input type="number" value={valueField} onChange={e => setValueField(parseFloat(e.target.value))} />
        </C.InputLabel>
        <C.InputLabel> {/* Botão para adicionar o item */}
          <C.InputTitle>&nbsp;</C.InputTitle>
          <C.Button onClick={handleAddEvent}>Adicionar</C.Button>
        </C.InputLabel>
      </C.Container>
  );
}
