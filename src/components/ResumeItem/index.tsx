import * as C from './styles'; // Importa os estilos para o componente

type Props = {
    title: string; // Título do item 
    value: number; // Valor do item 
    color?: string; // Cor do item(opcional)
}

export const ResumeItem = ({ title, value, color }: Props) => { // Componente de item
    return (
        <C.Container> {/* Contêiner do item */}
            <C.Title>{title}</C.Title> {/* Título do item */}
            <C.Info color={color}>R$ {value}</C.Info> {/* Valor do item */}
        </C.Container>
    );
}
