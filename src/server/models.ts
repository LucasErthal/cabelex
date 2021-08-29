export interface Filial {
  id: string;
  nome: string;
  funcionarios: string[];
  refresh(): void;
}

export interface Funcionario {
  id: string;
  nome: string;
  filial: string;
}