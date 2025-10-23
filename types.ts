
export interface Cliente {
    id: string;
    nome: string;
    tipoPessoa: 'Física' | 'Jurídica';
    cpfCnpj: string;
    telefone: string;
    email: string;
    endereco: string;
    dataCadastro: string;
}

export interface ProdutoServico {
    id: string;
    nome: string;
    descricao: string;
    unidadeMedida: 'Hora' | 'Unidade' | 'Metro' | 'Projeto';
    precoCusto: number;
    precoVenda: number;
    categoria: 'Material' | 'Mão de Obra' | 'Serviço Terceirizado';
}

export interface Fornecedor {
    id: string;
    nome: string;
    cnpjCpf: string;
    telefone: string;
    email: string;
    endereco: string;
}

export interface Funcionario {
    id: string;
    nome: string;
    cpf: string;
    cargoAtual: string;
    salarioAtual: number;
    dataAdmissao: string;
    telefone: string;
    endereco: string;
    estadoCivil: 'Solteiro(a)' | 'Casado(a)' | 'Divorciado(a)' | 'Viúvo(a)' | 'União Estável';
    historicoCargos?: string;
    cursosEspecializacoes?: string;
    equipamentosEntregues?: string;
    anotacoesGerais?: string;
    advertencias?: string;
    elogios?: string;
    linkDocumentos?: string; // Simulates link to Google Drive
    linkCertificados?: string; // Simulates link to Google Drive
}

export interface Usuario {
    id: string;
    nome: string;
    email: string;
    nivelAcesso: 'Administrador' | 'Financeiro' | 'Operacional';
    funcionarioId?: string;
}

export interface ContaBancaria {
    id: string;
    nomeBanco: string;
    agencia: string;
    conta: string;
    tipo: 'Conta Corrente' | 'Conta Poupança';
    titular: string;
    chavePix?: string;
}

export interface Veiculo {
    id: string;
    modelo: string;
    ano: number;
    cor: string;
    placa: string;
    kmAtual: number;
    ultimaTrocaOleo: string;
    motoristaPrincipalId?: string;
    estadoConservacao: 'Ótimo' | 'Bom' | 'Regular' | 'Ruim';
    valor: number;
    temSeguro: 'Sim' | 'Não';
    observacoes?: string;
}

export interface Obra {
    id: string;
    nome: string;
    clienteId: string;
    descricao: string;
    cidade: string;
    endereco: string;
    dataInicioPrevista: string;
    dataFimPrevista: string;
    valorContratado: number;
    status: 'Orçamento' | 'Planejada' | 'Em Andamento' | 'Concluída' | 'Cancelada';
    emitirNotaFiscal: 'Sim' | 'Não';
    observacoes?: string;
}

export interface Equipe {
    id: string;
    nome: string;
    liderId: string;
    membrosIds: string[];
    veiculoId?: string;
    ferramentas?: string;
    itensAlojamento?: string;
    nivel: number; // 0 a 10
    observacoes?: string;
}

export interface PlanoConta {
    id: string;
    codigo: string;
    nome: string;
    tipo: 'Receita' | 'Despesa';
    contaPaiId?: string;
}

export interface ContaPagar {
    id: string;
    fornecedorId: string;
    numeroNotaFiscal?: string;
    dataEmissao: string;
    valor: number;
    dataVencimento: string;
    dataPagamento?: string;
    status: 'Pendente' | 'Pago' | 'Atrasado';
    planoContaId: string;
    obraId?: string;
    linkComprovante?: string;
}

export interface ContaReceber {
    id: string;
    clienteId: string;
    obraId?: string;
    descricao: string;
    valorPrevisto: number;
    dataVencimento: string;
    dataRecebimento?: string;
    valorRecebido?: number;
    status: 'Pendente' | 'Recebido' | 'Atrasado';
    planoContaId: string;
    linkComprovante?: string;
}

export interface Orcamento {
    id: string;
    clienteId: string;
    dataCriacao: string;
    dataValidade: string;
    descricao: string;
    status: 'Em Aberto' | 'Enviado' | 'Aprovado' | 'Rejeitado';
    valorTotal: number;
    observacoes?: string;
}

export interface ItemOrcamento {
    id: string;
    orcamentoId: string;
    produtoServicoId: string;
    descricao: string;
    quantidade: number;
    precoUnitario: number;
    subtotal: number;
}

export interface TarefaAgenda {
    id: string;
    obraId: string;
    tipo: 'Visita Técnica' | 'Reunião' | 'Entrega Material' | 'Marco Projeto' | 'Lembrete';
    descricao: string;
    inicioPrevisto: string;
    fimPrevisto: string;
    responsavelId?: string;
    status: 'Planejada' | 'Em Andamento' | 'Concluída' | 'Atrasada';
}

export interface FormaPagamento {
    id: string;
    nome: string;
}
