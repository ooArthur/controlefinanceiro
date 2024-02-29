import * as C from './styles'; // Importa os estilos para o componente
import { Item } from '../../types/Item'; // Importa o tipo Item
import { formatDate } from '../../helpers/dateFilter'; // Importa a função formatDate para formatar a data
import { categories } from '../../data/categories'; // Importa as categorias de despesas e receitas

type Props = {
    item: Item // Define o tipo das propriedades do componente como Item
}

export const TableItem = ({ item }: Props) => { // Componente de item da tabela
    return (
        <C.TableLine> {/* Linha da tabela */}
            <C.TableColumn>{formatDate(item.date)}</C.TableColumn> {/* Coluna para a data formatada */}
            <C.TableColumn>
                <C.Category color={categories[item.category].color}> {/* Coluna para a categoria com a cor associada */}
                    {categories[item.category].title} {/* Exibe o título da categoria */}
                </C.Category>
            </C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn> {/* Coluna para o título do item */}
            <C.TableColumn>
                <C.Value color={categories[item.category].expense ? 'red' : 'green'}> {/* Coluna para o valor com cor associada */}
                    R$ {item.value} {/* Exibe o valor do item */}
                </C.Value>
            </C.TableColumn>
        </C.TableLine>
    );
}
