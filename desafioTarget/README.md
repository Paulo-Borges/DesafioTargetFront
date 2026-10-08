# Desafio Target — Frontend

Aplicação web desenvolvida em Angular para consultar comissões, registrar movimentações de estoque e calcular juros. A interface consome uma API .NET executada separadamente; o backend não faz parte deste repositório.

## Funcionalidades

- **Comissões:** consulta a lista de vendedores e exibe o total de comissão de cada um.
- **Estoque:** permite selecionar um produto, informar o tipo e a quantidade da movimentação e enviar os dados para a API. A lista de produtos disponível na tela está no próprio frontend.
- **Juros:** recebe um valor e uma data de vencimento e apresenta os dias de atraso, os juros e o valor final retornados pela API.

## Tecnologias

- Angular 21
- TypeScript
- RxJS
- Tailwind CSS 4
- Vitest para testes unitários

## Pré-requisitos

- Node.js e npm compatíveis com a versão do Angular utilizada pelo projeto.
- A API .NET do desafio em execução, com HTTPS disponível em `https://localhost:7042`.

## Instalação e execução

No diretório deste projeto, instale as dependências:

```bash
npm ci
```

Inicie o servidor de desenvolvimento:

```bash
npm start
```

A aplicação estará disponível em [http://localhost:4200](http://localhost:4200). O servidor atualiza a página automaticamente quando os arquivos do projeto são alterados.

## Integração com a API

As URLs da API estão configuradas nos serviços do frontend e apontam para `https://localhost:7042`. Para usar as funcionalidades que consultam ou enviam dados, inicie a API e certifique-se de que o certificado HTTPS local é confiável no navegador.

| Funcionalidade | Método | Endpoint |
| --- | --- | --- |
| Consultar comissões | `GET` | `/api/comissao` |
| Registrar movimentação de estoque | `POST` | `/api/estoque/movimentar` |
| Calcular juros | `POST` | `/api/Juros` |

Se a API estiver hospedada em outro endereço, atualize as URLs nos serviços correspondentes do frontend.

## Testes

Execute os testes unitários com:

```bash
npm test
```

## Build

Gere a versão de produção com:

```bash
npm run build
```

Os arquivos compilados são gerados no diretório `dist/`.
