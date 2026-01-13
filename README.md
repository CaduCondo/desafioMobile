
# QA Automation – CI + Local + Extent Report

## Execução Local
```bash
npm install
npm test
```
O relatório será gerado em:
reports/extent/index.html

## Execução no GitHub Actions
- Pipeline roda automaticamente a cada push
- O Extent Report é gerado no CI
- O report é publicado como artifact

### Como visualizar o report no CI
1. Acesse a aba Actions
2. Clique no workflow executado
3. Baixe o artifact `extent-report`
4. Abra `index.html`

## Estratégia
- Chrome visível local
- Chrome headless no CI
- Configuração única baseada em variável de ambiente
