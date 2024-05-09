import { IProjectPhase, IProject } from "./interfaces";

export const kmTrackerPhases: IProjectPhase[] = [
  {
    name: "Topologia",
    activities: [
      {
        name: "Vincular as matrizes com suas filiais",
        expectedDays: 10,
        status: "done",
      },
      {
        name: "Exibir todas as matrizes",
        expectedDays: 10,
        status: "done",
      },
      {
        name: "Mostrar residencia do técnico (cadastrar no sistema)",
        expectedDays: 10,
        status: "done",
      },
    ],
    expectedStartDate: new Date(2024, 3, 1),
    actualStartDate: new Date(2024, 3, 1),
    expectedEndDate: new Date(2024, 3, 26),
    actualEndDate: new Date(2024, 3, 30),
    completionPercentage: 1,
    expectedDurationInDays: 10,
  },
  {
    name: "Integração OS WKF",
    expectedDurationInDays: 15,
    activities: [
      {
        name: "Replicar abertura de OS do WKF no KMTracker",
        expectedDays: 10,
        status: "doing",
      },
      {
        name: "Replicar fechamento de OS do WKF no KMTracker",
        expectedDays: 10,
        status: "doing",
      },
      {
        name: "Replicar movimentação de OS do KMTracker no WKF",
        expectedDays: 10,
        status: "doing",
      },
    ],
    expectedStartDate: new Date(2024, 4, 1),
    completionPercentage: 0.1,
  },
  {
    name: "Roteirização",
    activities: [
      {
        name: "Informar quais CLIENTES/OS serão atendidas",
        expectedDays: 10,
        status: "to do",
      },
      {
        name: "Informar ordem de prioridade de atendimentos",
        expectedDays: 10,
        status: "to do",
      },
      {
        name: "Informar valores de combustível/pedágio etc",
        expectedDays: 10,
        status: "to do",
      },
      {
        name: "Puxar a localização do técnico (localiza)",
        expectedDays: 10,
        status: "to do",
      },
      {
        name: "Criar solicitação de pagamento (integração com Jira)",
        expectedDays: 10,
        status: "to do",
      },
    ],
    expectedStartDate: new Date(2024, 4, 20),
    completionPercentage: 0.1,
    expectedDurationInDays: 30,
  },
  {
    name: "Integração Cliente WKF",
    expectedDurationInDays: 15,
    activities: [
      {
        name: "Ao atualizar os clientes (terminais) no WKF, atualizar também no KMTracker",
        expectedDays: 10,
        status: "to do",
      },
    ],
    expectedStartDate: new Date(2024, 6, 1),
    completionPercentage: 0.1,
  },
  {
    name: "Integração com VELOE/ALELO",
    expectedDurationInDays: 10,
    activities: [
      {
        name: "Consultar qual o saldo do cartão do técnico",
        expectedDays: 10,
        status: "to do",
      },
      {
        name: "Ao enviar solicitação de pagamento, mostrar em tela esse saldo",
        expectedDays: 10,
        status: "to do",
      },
      {
        name: "Mostrar também o saldo em KM que o técnico tem no cartão",
        expectedDays: 10,
        status: "to do",
      },
      {
        name: "Criar uma tela nova replicando a tela de direcionamento de recursos presente no processo de Roteirização",
        expectedDays: 10,
        status: "to do",
      },
      {
        name: "Criar uma forma de levantar o valor do KM do técnico (valor do combustível)",
        expectedDays: 10,
        status: "to do",
      },
    ],
    expectedStartDate: new Date(2024, 6, 22),
    completionPercentage: 0.1,
  },
  {
    name: "Implementação de relatório fotográfico",
    expectedDurationInDays: 15,
    activities: [
      {
        name: "Anexo de fotos ao cliente (terminal) e ao atendimento",
        expectedDays: 10,
        status: "to do",
      },
      {
        name: "Permitir ao técnico anexar fotos aos atendimentos",
        expectedDays: 10,
        status: "to do",
      },
      {
        name: "As fotos servem para evidenciar o motivo de mudança de rota, não atendimento ou evidenciar o atendimento de um TUP",
        expectedDays: 10,
        status: "to do",
      },
    ],
    expectedStartDate: new Date(2024, 7, 5),
    completionPercentage: 0.1,
  },
  {
    name: "Integração com sistema de registro de ponto",
    expectedDurationInDays: 10,
    activities: [
      {
        name: "Criar integração com o sistema de ponto já existente para trazer esses dados para dentro do KMTracker",
        expectedDays: 10,
        status: "to do",
      },
      {
        name: "Trazer o status atual do técnico (se está de licença, almoço, trabalhando etc)",
        expectedDays: 10,
        status: "to do",
      },
      {
        name: "Mostrar inconsistencias com relação ao ponto e localização do tecnico (a verificar)",
        expectedDays: 10,
        status: "to do",
      },
    ],
    expectedStartDate: new Date(2024, 7, 26),
    completionPercentage: 0.1,
  },
  {
    name: "Exportação de plantas e roteirização em KMZ",
    expectedDurationInDays: 10,
    activities: [
      {
        name: "Permitir exportar as plantas em KMZ",
        expectedDays: 10,
        status: "to do",
      },
      {
        name: "Permitir exportar a roteirização em KMZ",
        expectedDays: 10,
        status: "to do",
      },
    ],
    expectedStartDate: new Date(2024, 8, 9),
    completionPercentage: 0.1,
  },
];

export const projectData: IProject = {
  name: "KM Tracker",
  generalStatus: "good",
  currentPhaseIndex: 1,
  phases: kmTrackerPhases,
  nextSteps: ["Finalizar integração WKF", "Testar API Jira", "Testar API ADP"],
  problems: [],
  periodActivities: [
    {
      name: "Criar script de abertura de OS no WKF",
      expectedDays: 4,
      status: "done",
    },
    {
      name: "Criar script de fechamento de OS no WKF",
      expectedDays: 4,
      status: "done",
    },
    {
      name: "Criar permissões de acesso",
      expectedDays: 4,
      status: "doing",
    },
    {
      name: "Criar scripts de integração de OS no KM Tracker para refletir no WKF",
      expectedDays: 4,
      status: "doing",
    },
    {
      name: "Testar integração Jira",
      expectedDays: 4,
      status: "to do",
    },
  ],
  currentPeriod: {
    start: new Date(2024, 4, 2),
    end: new Date(2024, 4, 9),
  },
};
