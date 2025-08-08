import type Funcionario from "./Funcionario";

export default interface Departamento { 
    id: number;
    nome_departamento: string;

    funcionario?: Funcionario[] | null;
}

