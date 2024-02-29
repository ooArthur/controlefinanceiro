import * as C from './styles'; // Importa os estilos para o componente
import { Item } from '../../types/Item'; // Importa o tipo Item
import { TableItem } from '../TableItem'; // Importa o componente TableItem

type Props = {
    list: Item[] // Define o tipo das propriedades do componente como uma lista de itens
}

export const TableArea = ({ list }: Props) => { // Componente da área da tabela
    return (
        <C.Table> {/* Tabela */}
            <thead> {/* Cabeçalho da tabela */}
                <tr> {/* Linha do cabeçalho */}
                    <C.TableHeadColumn width={100}>Data</C.TableHeadColumn> {/* Coluna para a data */}
                    <C.TableHeadColumn width={130}>Categoria</C.TableHeadColumn> {/* Coluna para a categoria */}
                    <C.TableHeadColumn>Título</C.TableHeadColumn> {/* Coluna para o título */}
                    <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn> {/* Coluna para o valor */}
                </tr>
            </thead>
            <tbody> {/* Corpo da tabela */}
                {list.map((item, index)=>( // Mapeia a lista de itens para renderizar cada item na tabela
                    <TableItem key={index} item={item} /> // Componente TableItem para renderizar cada item
                ))}
            </tbody>
        </C.Table>
    );
}
