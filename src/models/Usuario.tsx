import type Funcionario from "./Funcionario";

export default interface Usuario { 
    id: number;
    nome: string;
    email: string;
    senha: string;
    foto: string;

    funcionario?: Funcionario[] | null;
}