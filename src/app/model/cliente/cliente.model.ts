import { Telefone } from "../telefone/telefone.model";

export class Cliente {
    id?: number;
    nome?: string;
    cpf?: string;
    endereco?: string;
    telefones?: Array<Telefone>;
}
