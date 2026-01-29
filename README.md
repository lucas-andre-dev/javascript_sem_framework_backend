# Node.js Backend (sem framework)

Backend em Node.js utilizando apenas módulos nativos e MySQL, sem frameworks como Express ou Nest.

---

## Objetivo

Entender o funcionamento do backend sem abstrações:

* HTTP nativo do Node.js
* Organização manual de rotas
* Acesso direto ao banco de dados

---

## Estrutura

```
controller/
repository/
model/
database/
server/
```

---

## Fluxo

```
Request HTTP → Controller → Repository → Database
```

---

## Camadas

### controller/

* Recebe requisições HTTP
* Valida entrada básica
* Retorna respostas

### repository/

* Executa queries SQL
* Não contém lógica HTTP

### model/

* Estrutura e padronização de dados

### database/

* Configuração de conexão com o MySQL

---

## Tecnologias

* Node.js
* JavaScript (CommonJS)
* MySQL
* mysql2

---

## Instalação

```bash
npm install mysql2
```

---

## Execução

```bash
node server.js
```

---

## Exemplo

```
GET /usuarios
```

Resposta:

```json
[{ "id": 1, "nome": "João" }]
```

---

## Observações

Projeto educacional focado em fundamentos. Frameworks podem ser adicionados posteriormente.

---

## Autor

Lucas

---

## Licença

Uso livre para estudo.
