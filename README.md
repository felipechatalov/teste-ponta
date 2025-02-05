RESUMO:
Esta aplicação se trata de um teste técnico para a empresa Ponta Agro, onde foi desenvolvido a área front-end para o consumo diversos endpoints de uma API. A temática do site se trata de um "CRUD" de animais e fazendas.

ESPECIFICAÇÕES:
Para o desenvolvimento foi utilizado da biblioteca Angular na versão 19.1.0 e Node na versão 20.11.1 e NPM na versão 10.2.4. Após abrir o diretório, para baixar e instalar todas as dependências. Após a instalação, basta executar o comando 'npm install'. Para compilar o projeto basta executar o comando 'ng build'. Já para rodar localmente basta executar 'ng serve' e entrar na url 'localhost:4200'

UTILIZAÇÂO:
Ao entrar no site, podemos escolher entre a sessão de animais ou de fazendas, onde cada uma possui operações em sua maioria semelhantes. Utilizando as operações, podemos cadastrar fazendas que possuem um nome e ID (gerado automáticamente pelo back-end), que podem possuir animais com nome, tag e ID (também gerado pelo back-end) vinculados a mesma fazenda. Também é possível fazer a procura de fazendas e animais por IDs uma vez que estão cadastrados no banco de dados.

OBSERVAÇÕES: 
A pasta backend conta com 2 versões da aplicação back-end 'ponta.jar' e 'pontav2.jar', uma vez que a primeira versão 'ponta.jar' possuía um erro de relacionamento bidirecional, causando erro quando se buscava uma fazenda que possuía ao menos 1 animal vinculado.

