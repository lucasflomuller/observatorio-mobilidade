# Observatório de Mobilidade

Website: https://observamob.sites.ufsc.br/ (responsiveness was not a requirement)

Website estático criado para basear tema do wordpress em projeto pela empresa PIXEL - EJ

O website foi criado utilizando Sass (SCSS) como preprocessor de CSS, a metodologia de nomenclatura utilizada foi a BEM (Block__Element--Modifier)
Para a arquitetura do código, foi utilizada uma pequena variação da arquitetura 7-1.

## Utilização

Para compilar os estilos, é necessário ter o nodeJS instalado. Antes de qualquer coisa, rode o comando `npm install` na pasta do repositório, assim instalando todas as dependências.

### Production

Para buildar o arquivo css, basta rodar o comando `npm run build:css`.

O script `build:css` é uma concatenação de múltiplos scripts, sendo eles:
  - `compile:sass`: Compila todos os arquivos em um arquivo css com formatação expandida, o arquivo é chamado de `style.comp.css`
  - `prefix:css`: Prefixa todo o código css para compatibilidade com diferentes navegadores. As pré-definições são:
  ```
    {
      "browserslist": [
        "last 10 versions",
        "> 5%",
        "maintained node versions",
        "not dead"
      ]
    }
  ```
  - `compress:css`: Altera a formatação do arquivo, comprimindo-o, deixando-o pronto para produção.

### Development

Para desenvolvimento foi criado um script de acompanhamento de mudanças no código sass. Basta rodar `watch:sass`.
É aconselhável a utilização de um live-server para acompanhar mudanças no html. Ele pode ser encontrado como plugin da maioria dos editores bem como ser utilizado através da CLI, basta rodar `npm install live-server --save-dev`. A documentação pode ser encontrada [aqui](https://www.npmjs.com/package/live-server).


#### TODO:
  - Reestruturar grid layout para melhor manutenção;
  - Alterar maneira de especificar cor de fundo para cada página
