# Sistema de Cadastro de Contatos
------------------------------
Aplicativo para cadastrar contatos
------------------------------
Tecnologias utilizadas: HTML, CSS, Javascript, PHP, MySQL.
PHP em versão 7.3.0
MySQL em versão 5.5.62
Não foi utilizado SCSS e nem Twig.
Uma função que não consegui fazer funcionar, foi a de colocar corretamente os dados de `Notificação de email`, `Receber SMS` e `Número de celular possui Whatsapp` no banco de dados, pois eles ficam sempre como "Sim" independente da  caixa de opção marcada, ou seja mesmo que nenhuma caixa seja marcada, no banco de dados ele sempre fica aparecendo como se ela tivesse sido selecionada.

Todos os arquivos estão na raiz da pasta ao invés de pastas organizadas, pois foi a maneira que encontrei para fazer com que o XAMPP fizesse a conexão do sistema com o banco de dados usando MySQL.

### PASTA arquivosDeConfig
------------------------------
Decidi inserir esta pasta com algumas das configurações utilizadas para fazer o sistema funcionar, não sei se era necessário, mas caso ajude a executar o sistema os arquivos já estão aí. Acredito que por causa dessa pasta, está aparecendo no repositório que utilizei SCSS e Twig, porém não usei.
------------------------------

### PASSO A PASSO DE COMO EU FIZ PARA EXECUTAR O APLICATIVO

1. Utilizei o Visual Code Studio para criar o código.
2. Utilizei o XAMPP para iniciar uma sessão MySql e Apache.
3. Em `C:\xampp\apache\conf\httpd.conf` troquei `Require all denied` para `Require all granted`
4. Depois de iniciar o Apache pelo XAMPP entrei pelo navegador em: `http://localhost/phpMyAdmin/` para acessar o phpMyAdmin e gerenciar e verificar o banco de dados.
5. Pelo cmd utilizando o comando `mysql -u root -p` e depois inserindo a senha do banco de dados, criei o banco de dados contatos_db e inseri a tabela contatos nele.
6. Coloquei a pasta do projeto em `C:\xampp\htdocs` para conseguir acessar o site conectado ao banco de dados utilizando o link no navegador `http://localhost/projeto_alphacode_contato/` (projeto_alphacode_contato era o nome da pasta antes de eu mudar os arquivos para a pasta alphacode_projeto)

Desenvolvido por <br>
[João Barros Guatura da Costa](https://github.com/JoaoGuatura "João Barros").
