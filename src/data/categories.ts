import { Category } from '../types/Category'; // Importa o tipo Category

// Define as categorias de despesas e receitas
export const categories: Category = {
    salary: { title: 'Salário', color: 'green', expense: false }, // Categoria de salário (receita)
    fixedExpense: { title: 'Despesa Fixa', color: 'red', expense: true }, // Categoria de despesa fixa
    variableExpense: { title: 'Despesa Variável', color: 'BlueViolet', expense: true} // Categoria de despesa variável
}
