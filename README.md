# Lista de pokemons usando a Poke Api

Este projeto faz parte do desafio final do curso DevQuest simulando um teste técnico de processo seletivo.

O projeto foi criado sem a ajuda dos professores, que darão o feedback quando finalizado.

<br>

## Técnologias e ferramentas utilizadas

- Figma;
- Poke Api;
- HTML;
- CSS;
- JavaScript;
- Fetch Api
- ReactJS;

  - Hooks (useState, useEffect, useContext);
  - Styled Components.
  - React Router DOM

    <br>

# Demandas

- Criar uma Home (página inicial) de listagem de alguns pokemons,utilizando a api
  https://pokeapi.co/
- Criar uma página interna de detalhe do pokemon.

<br>

# Requisitos

- A home deve apresentar uma listagem com 10 pokemonsiniciais.
- A home deve ter um botão "Carregar mais" abaixo dessa lista,que quando clicado deve buscar mais 10 pokemons e adicionara listagem atual.
- Essa listagem deve mostrar a imagem e nome de cada pokemon. - Na listagem cada
  pokemon deve ser clicável e ao clicar o usuáriodeve poder acessar uma página interna desse pokemon cominformações detalhadas, nessa página de detalhes devemaparecer as seguintes informações: - Imagem do pokemon - Nome - Lista de movimentos do pokemon (moves) - Lista de habilidades do pokemon (abilities) - a lista de habilidades deve apresentar o nome e o textodescritivo da habilidade - Tipo do pokemon (type)
- Essa home deve ter um botão para que o usuário possaalternar de cor entre tema claro e tema escuro (light/dark)

<br>

# Requisitos técnicos

- A aplicação deverá ser Single Page Application (SPA);
- Utilizar React.js para o desenvolvimento daaplicação;
- Utilizar Context API para criação do Theme Toggler(Alternador entre tema claro e escuro);
- Utilizar styled-components para estilização doscomponentes;
- Utilizar react-router-dom para a navegação entre aspáginas.

<br>

# Layout

- A criação do layout é livre.

<br>

# Desafios encontrados

## Design

O primeiro desafio que encontrei foi de organizar as informações e o layout. Meu primeiro passo foi partir para o Figma e criar as versões desktop, mobile, dark e light.

O projeto do Figma pode ser acessado 👉 [aqui.](https://exemplo.com/)

<br>

## Conexão com a Api

No início foi um pouco difícil até entender a dinâmica dos dados. Busquei informações na documentação, e, como é uma Api bastante usada, também tinha muita informação na internet. Depois de entendida a lógica dos dados foi só criar as conexões com Fetch.

<br>

## Organização dos componentes

A estilização dos componentes foi feita com Styled Components, então fui buscando maneira de melhor organizar as pastaa e arquivos ao longo do projeto. Decidi usar como padrão uma pasta para cada componente com um arquivo 'index.js' e um 'styles.js' dentro.

<br>

## Rodar o projeto

Para rodar o projeto basta fazer um clone do repositorio e no terminal inserir os comandos 'NPM Install' e depois 'NPM start'
