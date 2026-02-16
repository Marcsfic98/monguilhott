# 🦷 Monguilhott - Sistema de Gestão Odontológica

O **Monguilhott** é um dashboard administrativo desenvolvido sob medida para clínicas odontológicas que buscam organizar o fluxo de pacientes, prontuários e faturamento em uma interface clínica, limpa e eficiente.

![Preview do Consultório Monguilhott](https://via.placeholder.com/800x450?text=Monguilhott+Dental+Dashboard)

## 🩺 Sobre o Projeto

Este painel foi criado para centralizar a operação do consultório, permitindo que dentistas e secretários monitorem desde o status das consultas diárias até o crescimento financeiro da clínica.

## 🚀 Funcionalidades Chave

* **Agenda Inteligente:** Visualização de consultas do dia com status (Confirmado, Em Espera, Finalizado).
* **Gestão de Pacientes:** Lista rápida com histórico de procedimentos e alertas de retornos necessários.
* **Indicadores Clínicos (KPIs):** Cards com número de novos pacientes, procedimentos realizados e faturamento mensal.
* **Gráficos de Desempenho:** Comparativo entre tipos de tratamentos (Ortodontia, Implantes, Estética, etc.).
* **Interface "Clean":** Tema visual focado em reduzir a fadiga ocular, ideal para uso prolongado em ambiente clínico.

## 🛠️ Stack Tecnológica

* **HTML5:** Estrutura focada em acessibilidade de dados clínicos.
* **CSS3 (Flexbox & Grid):** Layout responsivo para tablets (comum em consultórios) e desktops.
* **JavaScript (ES6+):** Lógica de agendamento, busca de pacientes e filtragem de datas.
* **Chart.js:** Gráficos circulares para distribuição de especialidades.
* **Google Fonts:** Tipografia focada em legibilidade (ex: *Inter* ou *Roboto*).

## 📁 Organização de Arquivos

```text
├── index.html              # Visão geral do consultório
├── assets/
│   ├── css/
│   │   ├── style.css       # Estilos globais (Identidade Visual Monguilhott)
│   │   └── appointments.css # Estilização específica da agenda
│   ├── js/
│   │   ├── calendar.js     # Lógica de manipulação de datas e horários
│   │   └── reports.js      # Geração visual de relatórios e gráficos
│   └── icons/              # Ícones médicos (Dente, Seringa, Calendário)
└── README.md
