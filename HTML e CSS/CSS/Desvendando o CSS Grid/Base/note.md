# CSS Grid

## Grid

- Bidimensional
- Divisão de toda a página em linhas e colunas
- Colocar elementos onde quiser nessa divisão

## GRID vs Flexbox
- Grid: 2 dimensões (colunas e linhas)
- Flexbox: 1 dimensão (ou coluna ou linha)
- Um complementa o outro

## Propriedades

2 grupos:

container:

+ display: grid; // iniciar
+ grid-template-columns; // colunas
+ grid-template-rows; // linhas
+ grid-gap;
    - grid-row-gap;
    - grid-column-gap; // espaçamentos
+ grid-template-areas; 

... +4 propriedades e alinhamento.

itens:

+ grid-column; // onde vai ficar na coluna
    - grid-column-start;
    - grid-column-end;
+ grid-row // na linha
    - grid-row-start;
    - grid-row-end;
+ grid-area;

... +2 propriedades de alinhamento.

**===**

## GRID: Alinhamento

6 propriedades:
1. justify-content;
2. align-content;
3. justify-items;
4. align-items;
5. justify-self;
6. align-self.

**===**

# content
justify-content; (horizontal)
align-content. (vertical)
**alinha o grid, relativo ao espaço fora do grid**

*7 valores*
1. start
2. end
3. center
4. stretch
5. space-between
6. space-around
7. space-evenly

**===**

# items
justify-items;
align-items.
**alinha os itens do grid em qualquer espaço disponível na célula.**

*4 valores*
1. start
2. end
3. center
4. stretch

**==**

# self
justify-self;
align-self.
**vai alinhar o item em si. ele é aplicado diretamente no item de um grid.**

