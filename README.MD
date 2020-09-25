<p align="center">
</p>
<h3 align="center">To-do List API</h3>
<p align="center">
</p>
<br>

## To-do List API

Este serviço de API foi desenvolvida com a finalidade de resolver o desafio proposto pelo Gabriel da empresa 2T. O desafio era desenvolver uma api REST com Typescript para ser consumida posteriormente com React pra web ou React native.

### Ferramentas utilizadas:

- Typescript
- Bcrypt
- JWT
- Knex
- SQLite
- Uuid;

## Começo rápido

- [Baixe este repositório](https://codeload.github.com/brenoo2018/backend/zip/master)
- Extraia os arquivos da pasta
- Dentro da pasta, execute: `> yarn`
- Em seguida, execute: `> yarn knex:migrate` - para criar as tabelas
- Execute: `> yarn knex:seed` - caso queira que um usuário padrão seja adicionado
- Usuário padrão: `username: usuarioteste, email: usuarioteste@gmail.com, password: 123456 `
- Por fim: `> yarn dev:server` - para o servidor inicializar

- Obs: Importe o arquivo `Insomnia_2020-09-24.json` em algum client api de sua peferência para testar as rotas

## Rotas

| Requisição | Rota            | Corpo                        | Parâmetro                    | Resposta | Descrição                                      |
| ---------- | --------------- | ---------------------------- | ---------------------------- | -------- | ---------------------------------------------- |
| POST       | `/users/create` | username email password      | <div align="center">❌</div> | `object` | Rota de criação de usuário                     |
| POST       | `/sessions`     | email password               | <div align="center">❌</div> | `object` | Rota de login do usuário                       |
| POST       | `/todos/create` | task                         | <div align="center">❌</div> | `array`  | Rota de criação de tarefas do usuário logado   |
| GET        | `/todos`        | <div align="center">❌</div> | <div align="center">❌</div> | `array`  | Rota de listagem das tarefas do usuário logado |
| DELETE     | `/todos/delete` | <div align="center">❌</div> | `:uuid`                      | `object` | Rota que deleta a tarefa do usuário logado     |
