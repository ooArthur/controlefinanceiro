import { useState, useEffect } from 'react'; // Importa useState e useEffect do React para gerenciamento de estado e efeitos
import * as C from './App.styles'; // Importa estilos do arquivo App.styles.ts
import { Item } from './types/Item'; // Importa o tipo Item
import { categories } from './data/categories'; // Importa as categorias de despesas
import { items } from './data/items'; // Importa os itens financeiros
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter'; // Importa funções auxiliares para filtrar por mês
import { TableArea } from './components/TableArea'; // Importa a área da tabela
import { InfoArea } from './components/InfoArea'; // Importa a área de informações
import { InputArea } from './components/InputArea'; // Importa a área de entrada para adicionar itens

const App = () => {
  // Definindo estados para armazenar dados do aplicativo
  const [list, setList] = useState(items); // Lista de itens financeiros
  const [filteredList, setFilteredList] = useState<Item[]>([]); // Lista filtrada por mês
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth()); // Mês atual
  const [income, setIncome] = useState(0); // Receita total
  const [expense, setExpense] = useState(0); // Despesa total

  // Atualiza a lista filtrada sempre que a lista principal ou o mês atual mudam
  useEffect(()=>{
    setFilteredList( filterListByMonth(list, currentMonth) );
  }, [list, currentMonth]);

  // Calcula a receita e a despesa totais com base na lista filtrada
  useEffect(()=>{
    let incomeCount = 0;
    let expenseCount = 0;

    for(let i in filteredList) {
      if(categories[filteredList[i].category].expense) { // Verifica se a categoria é uma despesa
        expenseCount += filteredList[i].value; // Adiciona o valor à despesa total
      } else {
        incomeCount += filteredList[i].value; // Adiciona o valor à receita total
      }
    }

    setIncome(incomeCount); // Atualiza o estado da receita total
    setExpense(expenseCount); // Atualiza o estado da despesa total
  }, [filteredList]);

  // Função para lidar com a mudança de mês
  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth); // Atualiza o estado do mês atual
  }

  // Função para adicionar um novo item financeiro à lista
  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item); // Adiciona o novo item à lista
    setList(newList); // Atualiza o estado da lista de itens financeiros
  }

  // Renderização do componente
  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        {/* Área de informações (receita, despesa, etc.) */}
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />

        {/* Área de entrada para adicionar novos itens */}
        <InputArea onAdd={handleAddItem} />

        {/* Área da tabela que exibe os itens financeiros */}
        <TableArea list={filteredList} />
      </C.Body>
    </C.Container>
  );
}

export default App;
