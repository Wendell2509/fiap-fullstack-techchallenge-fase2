# FIAP Pos-Tech - Fase 2 - Tech Challenge

Backend REST em Node.js para uma plataforma de blogging educacional, com CRUD de postagens, busca, persistencia em banco de dados, Docker, CI/CD e testes automatizados.

## Sobre o projeto

Este projeto faz parte do Tech Challenge da Fase 2 da FIAP Pos-Tech. A proposta e refatorar o backend de uma aplicacao de blogging educacional, permitindo que docentes criem, editem, removam e pesquisem postagens, enquanto alunos podem consultar os conteudos publicados.

## Tecnologias previstas

- Node.js
- Express
- Banco de dados Postgres
- Docker
- GitHub Actions
- Testes automatizados

## Status

Projeto em configuracao inicial.

## 16/06
- Ambiente limpo validado com docker compose up --build.
- Rotas testadas:
    - GET /health
    - GET /database/health
- Containers:
    - fiap-api
    - fiap-db

##24/06
- Criação tabela de POST
- CRUD completo (Post, Get, GetById, Put, Delete)
- Teste usando Postman
