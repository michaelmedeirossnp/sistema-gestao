
import type { Cliente, ProdutoServico, Fornecedor, Funcionario, ContaPagar, ContaReceber, Obra, Veiculo, ContaBancaria, Equipe, PlanoConta, Orcamento, ItemOrcamento, TarefaAgenda } from './types.ts';

export const MOCK_CLIENTES: Cliente[] = [
    { id: 'cli1', nome: 'Construtora Alfa', tipoPessoa: 'Jurídica', cpfCnpj: '11.222.333/0001-44', telefone: '(11) 98765-4321', email: 'contato@alfa.com', endereco: 'Rua das Obras, 123', dataCadastro: '2023-01-15' },
    { id: 'cli2', nome: 'João da Silva', tipoPessoa: 'Física', cpfCnpj: '123.456.789-00', telefone: '(21) 99887-6655', email: 'joao.silva@email.com', endereco: 'Av. Principal, 456', dataCadastro: '2023-03-20' },
];

export const MOCK_PRODUTOS: ProdutoServico[] = [
    { id: 'prod1', nome: 'Montagem de Estrutura Metálica', descricao: 'Serviço de montagem por metro quadrado', unidadeMedida: 'Metro', precoCusto: 80, precoVenda: 150, categoria: 'Mão de Obra' },
    { id: 'prod2', nome: 'Parafuso Sextavado 1/4"', descricao: 'Caixa com 100 unidades', unidadeMedida: 'Unidade', precoCusto: 15, precoVenda: 35, categoria: 'Material' },
];

export const MOCK_FORNECEDORES: Fornecedor[] = [
    { id: 'for1', nome: 'Aços & Ferros Ltda', cnpjCpf: '44.555.666/0001-77', telefone: '(31) 3333-4444', email: 'vendas@acosferros.com', endereco: 'Rua do Aço, 789' },
    { id: 'for2', nome: 'Parafusos ABC', cnpjCpf: '88.999.000/0001-11', telefone: '(41) 3210-9876', email: 'comercial@parafusosabc.com', endereco: 'Av. Industrial, 101' },
];

export const MOCK_FUNCIONARIOS: Funcionario[] = [
    { id: 'func1', nome: 'Carlos Pereira', cpf: '111.222.333-44', cargoAtual: 'Encarregado', salarioAtual: 4500, dataAdmissao: '2022-05-10', telefone: '(11) 91111-2222', endereco: 'Rua dos Trabalhadores, 10', estadoCivil: 'Casado(a)' },
    { id: 'func2', nome: 'Ana Souza', cpf: '555.666.777-88', cargoAtual: 'Montador', salarioAtual: 3200, dataAdmissao: '2023-02-20', telefone: '(11) 93333-4444', endereco: 'Rua das Flores, 20', estadoCivil: 'Solteiro(a)' },
    { id: 'func3', nome: 'Ricardo Lima', cpf: '999.888.777-66', cargoAtual: 'Montador', salarioAtual: 3200, dataAdmissao: '2023-02-20', telefone: '(11) 95555-6666', endereco: 'Rua das Árvores, 30', estadoCivil: 'Solteiro(a)' },
];

export const MOCK_CONTAS_PAGAR: ContaPagar[] = [
    { id: 'cp1', fornecedorId: 'for1', valor: 5500.00, dataEmissao: '2024-07-01', dataVencimento: '2024-07-30', status: 'Pendente', planoContaId: 'pc4', obraId: 'obra1' },
    { id: 'cp2', fornecedorId: 'for2', valor: 750.50, dataEmissao: '2024-06-20', dataVencimento: '2024-07-10', status: 'Pago', dataPagamento: '2024-07-05', planoContaId: 'pc5', obraId: 'obra1' },
];

export const MOCK_CONTAS_RECEBER: ContaReceber[] = [
    { id: 'cr1', clienteId: 'cli1', obraId: 'obra1', descricao: 'Parcela 1/3 - Obra Armazém', valorPrevisto: 15000, dataVencimento: '2024-07-25', status: 'Pendente', planoContaId: 'pc2' },
    { id: 'cr2', clienteId: 'cli2', obraId: 'obra2', descricao: 'Sinal - Projeto Residencial', valorPrevisto: 5000, dataVencimento: '2024-06-30', status: 'Recebido', dataRecebimento: '2024-06-28', valorRecebido: 5000, planoContaId: 'pc2' },
];

export const MOCK_OBRAS: Obra[] = [
    { id: 'obra1', nome: 'Montagem Estrutura Armazém X', clienteId: 'cli1', descricao: 'Montagem completa de 500m²', cidade: 'São Paulo', endereco: 'Distrito Industrial', dataInicioPrevista: '2024-07-10', dataFimPrevista: '2024-09-10', valorContratado: 45000, status: 'Em Andamento', emitirNotaFiscal: 'Sim' },
    { id: 'obra2', nome: 'Cobertura Residencial Silva', clienteId: 'cli2', descricao: 'Instalação de cobertura metálica 100m²', cidade: 'Rio de Janeiro', endereco: 'Bairro Novo', dataInicioPrevista: '2024-08-01', dataFimPrevista: '2024-08-20', valorContratado: 12000, status: 'Planejada', emitirNotaFiscal: 'Não' },
];

export const MOCK_VEICULOS: Veiculo[] = [
    { id: 'vei1', modelo: 'Fiat Strada', ano: 2022, cor: 'Branco', placa: 'ABC-1234', kmAtual: 45000, ultimaTrocaOleo: '2024-05-15', motoristaPrincipalId: 'func1', estadoConservacao: 'Bom', valor: 85000, temSeguro: 'Sim' },
];

export const MOCK_CONTAS_BANCARIAS: ContaBancaria[] = [
    { id: 'cb1', nomeBanco: 'Banco Digital S/A', agencia: '0001', conta: '123456-7', tipo: 'Conta Corrente', titular: 'Sua Empresa Ltda', chavePix: '11.222.333/0001-44' },
];

export const MOCK_EQUIPES: Equipe[] = [
    { id: 'eq1', nome: 'Equipe Alfa', liderId: 'func1', membrosIds: ['func2', 'func3'], veiculoId: 'vei1', nivel: 8 },
];

export const MOCK_PLANO_CONTAS: PlanoConta[] = [
    { id: 'pc1', codigo: '1', nome: 'Receitas', tipo: 'Receita' },
    { id: 'pc2', codigo: '1.1', nome: 'Receita com Serviços', tipo: 'Receita', contaPaiId: 'pc1' },
    { id: 'pc3', codigo: '2', nome: 'Despesas', tipo: 'Despesa' },
    { id: 'pc4', codigo: '2.1', nome: 'Custos com Material', tipo: 'Despesa', contaPaiId: 'pc3' },
    { id: 'pc5', codigo: '2.1.1', nome: 'Compra de Ferragens', tipo: 'Despesa', contaPaiId: 'pc4' },
    { id: 'pc6', codigo: '2.2', nome: 'Despesas Operacionais', tipo: 'Despesa', contaPaiId: 'pc3' },
    { id: 'pc7', codigo: '2.2.1', nome: 'Salários', tipo: 'Despesa', contaPaiId: 'pc6' },
];

export const MOCK_ORCAMENTOS: Orcamento[] = [
    { id: 'orc1', clienteId: 'cli2', dataCriacao: '2024-06-01', dataValidade: '2024-06-15', descricao: 'Orçamento Cobertura Residencial', status: 'Aprovado', valorTotal: 12000 },
];

export const MOCK_ITENS_ORCAMENTO: ItemOrcamento[] = [
    { id: 'item1', orcamentoId: 'orc1', produtoServicoId: 'prod1', descricao: 'Montagem de estrutura metálica para cobertura', quantidade: 80, precoUnitario: 150, subtotal: 12000 },
];

export const MOCK_TAREFAS_AGENDA: TarefaAgenda[] = [
    { id: 'tar1', obraId: 'obra1', tipo: 'Entrega Material', descricao: 'Receber vigas de aço do fornecedor Aços & Ferros', inicioPrevisto: '2024-07-29T09:00', fimPrevisto: '2024-07-29T10:00', responsavelId: 'func1', status: 'Planejada' },
    { id: 'tar2', obraId: 'obra2', tipo: 'Reunião', descricao: 'Alinhamento inicial com cliente João da Silva', inicioPrevisto: '2024-07-30T14:00', fimPrevisto: '2024-07-30T15:00', responsavelId: 'func1', status: 'Planejada' },
];
