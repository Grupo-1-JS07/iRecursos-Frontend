import type Departamento from "./Departamento";
import type Usuario from "./Usuario";

export default interface Funcionario { 
    id: number;
    nome: string;
    salarioBase: number;
    horasTrabalhadas: number;
    salarioFinal: number;

    departamento: Departamento | null;
    usuario: Usuario | null;

}
