import type Funcionario from "./Funcionario";

export default interface Departamento {
  id: number;
  nome_departamento: string;
  chefeDepartamento?: string;
  funcionario?: Funcionario[] | null;
}
