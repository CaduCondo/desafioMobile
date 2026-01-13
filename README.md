# 📱 Mobile Automation Challenge – WebdriverIO

Este projeto foi desenvolvido como parte de um desafio técnico de **QA Automation Engineer**, com foco em automação de testes mobile, boas práticas de arquitetura e integração contínua.

---

## 🎯 Objetivo do Projeto

Automatizar cenários críticos do aplicativo **native-demo-app** utilizando **WebdriverIO**, seguindo o padrão **Page Object Model**, com execução automatizada via **CI/CD** e geração de **relatórios de testes (Allure)**.

---

## 🧪 Cenários Automatizados

Foram implementados cenários que cobrem funcionalidades essenciais do aplicativo:

- Login com dados válidos
- Login com dados inválidos
- Navegação entre telas
- Validação de mensagens de erro
- Preenchimento e validação de formulários
- Fluxos positivos e negativos

Os testes foram estruturados para fácil expansão e manutenção.

---

## 🏗️ Arquitetura do Projeto

- **Framework:** WebdriverIO
- **Runner:** Local / CI
- **Test Framework:** Mocha
- **Assertions:** Chai
- **Padrão:** Page Object Model (POM)
- **Relatórios:** Allure Report
- **CI/CD:** GitHub Actions
- **Controle de versão:** Git

---

## Estrutura:
configs/
test/
├── specs/
├── pageobjects/
└── data/
reports/
├── allure-results/
└── allure-report/
.github/workflows/



---

## ▶️ Execução Local

### Pré-requisitos
- Node.js 18+
- Google Chrome

### Passos
npm install
npm test

### Após a execução, gere e visualize o relatório:
allure serve reports/allure-results

### 🤖 Relatório online:
https://caducondo.github.io/desafioMobile/

### 📊 Relatórios de Testes
O projeto utiliza Allure Report, que fornece:
Resumo dos testes executados
Status (Passed / Failed)
Informações do ambiente
Estrutura clara dos cenários