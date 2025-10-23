
import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar.tsx';
import { Dashboard } from './components/Dashboard.tsx';
import { Clientes } from './components/modules/Clientes.tsx';
import { Produtos } from './components/modules/Produtos.tsx';
import { Fornecedores } from './components/modules/Fornecedores.tsx';
import { Funcionarios } from './components/modules/Funcionarios.tsx';
import { ContasPagar } from './components/modules/ContasPagar.tsx';
import { ContasReceber } from './components/modules/ContasReceber.tsx';
import { Obras } from './components/modules/Obras.tsx';
import { Veiculos } from './components/modules/Veiculos.tsx';
import { ContasBancarias } from './components/modules/ContasBancarias.tsx';
import { Equipes } from './components/modules/Equipes.tsx';
import { PlanoContas } from './components/modules/PlanoContas.tsx';
import { Orcamentos } from './components/modules/Orcamentos.tsx';
import { Agenda } from './components/modules/Agenda.tsx';
import { useLocalStorage } from './hooks/useLocalStorage.ts';
import type { 
    Cliente, ProdutoServico, Fornecedor, Funcionario, ContaPagar, ContaReceber, Obra, 
    Veiculo, ContaBancaria, Equipe, PlanoConta, Orcamento, ItemOrcamento, TarefaAgenda, Usuario, FormaPagamento
} from './types.ts';

// Mock data for demonstration
import { MOCK_CLIENTES, MOCK_PRODUTOS, MOCK_CONTAS_PAGAR, MOCK_OBRAS, MOCK_CONTAS_RECEBER, MOCK_FUNCIONARIOS, MOCK_FORNECEDORES, MOCK_VEICULOS, MOCK_CONTAS_BANCARIAS, MOCK_EQUIPES, MOCK_PLANO_CONTAS, MOCK_ORCAMENTOS, MOCK_ITENS_ORCAMENTO, MOCK_TAREFAS_AGENDA } from './constants.ts';


export type View = 'dashboard' | 'clientes' | 'produtos' | 'fornecedores' | 'funcionarios' | 'contas-pagar' | 'contas-receber' | 'obras' | 'veiculos' | 'contas-bancarias' | 'equipes' | 'plano-contas' | 'orcamentos' | 'agenda';

const App: React.FC = () => {
    const [view, setView] = useState<View>('dashboard');
    
    // State management using the useLocalStorage custom hook
    const [clientes, setClientes] = useLocalStorage<Cliente[]>('clientes', MOCK_CLIENTES);
    const [produtos, setProdutos] = useLocalStorage<ProdutoServico[]>('produtos', MOCK_PRODUTOS);
    const [fornecedores, setFornecedores] = useLocalStorage<Fornecedor[]>('fornecedores', MOCK_FORNECEDORES);
    const [funcionarios, setFuncionarios] = useLocalStorage<Funcionario[]>('funcionarios', MOCK_FUNCIONARIOS);
    const [contasPagar, setContasPagar] = useLocalStorage<ContaPagar[]>('contasPagar', MOCK_CONTAS_PAGAR);
    const [contasReceber, setContasReceber] = useLocalStorage<ContaReceber[]>('contasReceber', MOCK_CONTAS_RECEBER);
    const [obras, setObras] = useLocalStorage<Obra[]>('obras', MOCK_OBRAS);
    const [veiculos, setVeiculos] = useLocalStorage<Veiculo[]>('veiculos', MOCK_VEICULOS);
    const [contasBancarias, setContasBancarias] = useLocalStorage<ContaBancaria[]>('contasBancarias', MOCK_CONTAS_BANCARIAS);
    const [equipes, setEquipes] = useLocalStorage<Equipe[]>('equipes', MOCK_EQUIPES);
    const [planoContas, setPlanoContas] = useLocalStorage<PlanoConta[]>('planoContas', MOCK_PLANO_CONTAS);
    const [orcamentos, setOrcamentos] = useLocalStorage<Orcamento[]>('orcamentos', MOCK_ORCAMENTOS);
    const [itensOrcamento, setItensOrcamento] = useLocalStorage<ItemOrcamento[]>('itensOrcamento', MOCK_ITENS_ORCAMENTO);
    const [tarefasAgenda, setTarefasAgenda] = useLocalStorage<TarefaAgenda[]>('tarefasAgenda', MOCK_TAREFAS_AGENDA);

    const renderView = () => {
        switch (view) {
            case 'dashboard':
                return <Dashboard data={{ clientes, produtos, contasPagar, contasReceber, obras, funcionarios }} />;
            case 'clientes':
                return <Clientes data={clientes} setData={setClientes} />;
            case 'produtos':
                return <Produtos data={produtos} setData={setProdutos} />;
            case 'fornecedores':
                return <Fornecedores data={fornecedores} setData={setFornecedores} />;
            case 'funcionarios':
                return <Funcionarios data={funcionarios} setData={setFuncionarios} />;
            case 'contas-pagar':
                return <ContasPagar data={contasPagar} setData={setContasPagar} fornecedores={fornecedores} planoContas={planoContas} obras={obras} />;
            case 'contas-receber':
                return <ContasReceber data={contasReceber} setData={setContasReceber} clientes={clientes} obras={obras} planoContas={planoContas} />;
            case 'obras':
                return <Obras data={obras} setData={setObras} clientes={clientes} />;
            case 'veiculos':
                return <Veiculos data={veiculos} setData={setVeiculos} funcionarios={funcionarios} />;
            case 'contas-bancarias':
                return <ContasBancarias data={contasBancarias} setData={setContasBancarias} />;
            case 'equipes':
                return <Equipes data={equipes} setData={setEquipes} funcionarios={funcionarios} veiculos={veiculos} />;
            case 'plano-contas':
                return <PlanoContas data={planoContas} setData={setPlanoContas} />;
            case 'orcamentos':
                return <Orcamentos orcamentos={orcamentos} setOrcamentos={setOrcamentos} itens={itensOrcamento} setItens={setItensOrcamento} clientes={clientes} produtos={produtos} />;
            case 'agenda':
                return <Agenda tarefas={tarefasAgenda} setTarefas={setTarefasAgenda} obras={obras} funcionarios={funcionarios} />;
            default:
                return <Dashboard data={{ clientes, produtos, contasPagar, contasReceber, obras, funcionarios }} />;
        }
    };

    return (
        <div className="flex h-screen bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200">
            <Sidebar setView={setView} activeView={view} />
            <main className="flex-1 p-6 lg:p-10 overflow-auto">
                {renderView()}
            </main>
        </div>
    );
};

export default App;
