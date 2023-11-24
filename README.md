# Pixel Health - Global Solution 2/8 | FIAP 🌐

## Visão Geral 🚀

Pixel Health é uma solução inovadora fictícia que combina elementos de jogos com promoção da saúde para proporcionar uma experiência única. O aplicativo tem como objetivo incentivar mudanças positivas no estilo de vida por meio de jogabilidade envolvente, onde cada conquista no jogo se traduz em benefícios reais para a saúde.

## Tecnologias Utilizadas 🛠️

- React
- React Router
- React Hook Form
- JSON Server
- Yup

## Informações de acesso 🔐

Ao abrir o projeto, no Login, você deverá inserir os seguintes dados:
- Usuário: admin
- Senha: 1234

Após isso, você deverá clicar no botão "Login", logo abaixo dos campos de input para acessar a Home do site.

## Funcionalidades 🔧

### Autenticação 

As credenciais do usuário (nome de usuário e senha) são armazenadas na sessionStorage para autenticação.

### Login do Usuário 

- A aplicação inclui um sistema de login com validação de formulário.
- As credenciais do usuário são verificadas em relação a uma lista pré-definida de usuários obtida de um servidor JSON.

### Navegação do Usuário 

- Uma vez autenticados, os usuários podem visualizar suas informações no cabeçalho de navegação.
- O menu de navegação inclui opções para visualizar detalhes do usuário e fazer logout.

## Configuração do Projeto ⚙️

Instale as dependências:

    npm install

Execute o servidor JSON para o backend:

    npm run backend

Inicie o servidor de desenvolvimento:

    npm run dev

Acesse a aplicação em http://localhost:3000 no seu navegador.