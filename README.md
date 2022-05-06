# Pokedex usando Poke Api

## Link de acesso
<a href="https://lista-de-pokemons-com-api.vercel.app/" target="_blank">👉 Pokedex</a>

## Apresentação

Este projeto faz parte do desafio final do curso DevQuest simulando um teste técnico de processo seletivo.

O projeto foi desenvolvido sem a ajuda dos professores, que deram o feedback quando finalizado.

<br>

## Tecnologias e ferramentas utilizadas

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

### Cronograma
Para organizar as ideias iniciais decidi criar um cronograma das fases do projeto. Ao longo do trabalho isso ajudou a retomar o foco algumas vezes, quando via que estava pensando em etapas mais adiantadas. O cronograma pode ser acessado 👉 [aqui.](https://peaceful-hedge-e9c.notion.site/Teste-t-cnico-DevQuest-PokeAPI-445a8680e0384971a8e8da0699d5aea8) 

<br>

## Design

O primeiro passo foi organizar as informações e o layout. No Figma criei as versões desktop, mobile, dark e light, cuidando para atender todos os requisitos.

O projeto do Figma pode ser acessado 👉 [aqui.](https://www.figma.com/file/rZC8ZGYdF8kXDjEG6rEQes/Teste-T%C3%A9cnico-DevQuest---API-Pokemon?node-id=0%3A1)

<br>

## Conexão com a Api

No início foi um pouco difícil até entender a dinâmica dos dados. Busquei informações na documentação, e, como é uma Api bastante usada, também tinha muita informação na internet. Depois de entendida a lógica dos dados foi só criar as conexões com Fetch.

<br>

## Organização dos componentes

A estilização dos componentes foi feita com Styled Components, então fui buscando maneira de melhor organizar as pastaa e arquivos ao longo do projeto. Decidi usar como padrão uma pasta para cada componente com um arquivo 'index.js' e um 'styles.js' dentro.

<br>

## Filtrar por tipo
A parte de desenvolver o filtro por tipo de pokemon foi um desafio grande. Precisei fazer novas conexões com a Api em novos endpoints e usei bastante os métodos de array para manipular os dados. 

<br>

# Rodar o projeto

Para rodar o projeto basta fazer um clone do repositorio, abrir o terminal no VS Code e inserir os comandos 'npm Install' e depois 'npm start'.
