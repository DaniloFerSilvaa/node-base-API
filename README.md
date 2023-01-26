# node-base
Base de node para criação de API

### Lembre-se:
#### -> Atualizar o model de acordo com seu BD
#### -> A conexão do BD está para o PG, caso o seu seja mySQL, lembre de alterar na conexão do banco de dados, em instances -> dialect: mysql
#### -> Onde tem 'Namedb' no model se refere ao Banco de dados relacionado ao seu projeto.
#### -> Lembre-se de Esquematizar o Model com relação ao seu Banco de Dados
### Adicionado a pasta Services com exemplos de service para authenticação, como findByEmail e matchPassword;      Exemploes se encontram comentados, caso queira reutilizar, caso contrario é só apagar e criar o seu ^-

### Pré requisitos globais:
`npm install -g nodemon typescript ts-node`

### instalação
`npm install`

### Para rodar o projeto
`npm run start-dev`