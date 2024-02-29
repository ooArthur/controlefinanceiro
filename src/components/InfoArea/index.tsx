import * as C from './styles'; // Importa os estilos para o componente
import { formatCurrentMonth } from '../../helpers/dateFilter'; // Importa a função formatCurrentMonth para formatar o mês atual
import { ResumeItem } from '../ResumeItem'; // Importa o componente ResumeItem

type Props = {
    currentMonth: string; // Mês atual
    onMonthChange: (newMonth: string) => void; // Função para mudar o mês
    income: number; // Receita
    expense: number; // Despesa
}

export const InfoArea = ({ currentMonth, onMonthChange, income, expense }: Props) => { // Componente da área de informações

    const handlePrevMonth = () => { // Função para lidar com a mudança para o mês anterior
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth(currentDate.getMonth() - 1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    }

    const handleNextMonth = () => { // Função para lidar com a mudança para o próximo mês
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth(currentDate.getMonth() + 1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    }

    return (
        <C.Container> {/* Contêiner da área de informações */}
            <C.MonthArea> {/* Área do mês */}
                <C.MonthArrow onClick={handlePrevMonth}>❮</C.MonthArrow> {/* Setas para o mês anterior */}
                <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle> {/* Título do mês atual */}
                <C.MonthArrow onClick={handleNextMonth}>❯</C.MonthArrow> {/* Setas para o próximo mês */}
            </C.MonthArea>
            <C.ResumeArea> {/* Área do resumo */}
                <ResumeItem title="Receitas" value={income} /> {/* Item de receitas */}
                <ResumeItem title="Despesas" value={expense} /> {/* Item de despesas */}
                <ResumeItem
                    title="Balanço"
                    value={income - expense} // Calcula o balanço (receitas - despesas)
                    color={(income - expense) < 0 ? 'red' : 'green'} // Define a cor do balanço com base no valor
                />
            </C.ResumeArea>
        </C.Container>
    );
}
