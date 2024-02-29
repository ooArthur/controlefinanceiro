import { Item } from '../types/Item'; // Importa o tipo Item

// Função para obter o mês atual no formato 'YYYY-MM'
export const getCurrentMonth = () => {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth()+1}`; // Retorna o ano e mês atual no formato desejado
}

// Função para filtrar uma lista de itens pelo mês especificado
export const filterListByMonth = (list: Item[], date: string): Item[] => {
    let newList: Item[] = [];
    let [year, month] = date.split('-'); // Divide a data fornecida em ano e mês

    for(let i in list) {
        // Verifica se o ano e o mês do item correspondem ao ano e mês fornecidos
        if(
            list[i].date.getFullYear() === parseInt(year) &&
            (list[i].date.getMonth() + 1) === parseInt(month)
        ) {
            newList.push(list[i]); // Adiciona o item à lista filtrada
        }
    }

    return newList; // Retorna a lista filtrada
}

// Função para formatar uma data no formato 'DD/MM/YYYY'
export const formatDate = (date: Date): string => {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`; // Retorna a data formatada
}

// Função auxiliar para adicionar um zero à esquerda a números menores que 10
const addZeroToDate = (n: number): string => n < 10 ? `0${n}` : `${n}`;

// Função para formatar o mês atual no formato 'Mês de Ano'
export const formatCurrentMonth = (currentMonth: string): string => {
    let [year, month] = currentMonth.split('-'); // Divide o mês fornecido em ano e mês
    let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return `${months[parseInt(month) - 1]} de ${year}`; // Retorna o mês formatado
}

// Função para criar uma nova data ajustada para o formato esperado
export const newDateAdjusted = (dateField: string) => {
    let [year, month, day] = dateField.split('-'); // Divide a data fornecida em ano, mês e dia
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day)); // Retorna uma nova data ajustada
}
