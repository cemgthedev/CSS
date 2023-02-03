# Estudo de Tailwindcss

## Instalação
A instalação do Tailwind CSS como um plug-in PostCSS é a maneira mais perfeita de integrá-lo a
ferramentas de construção como webpack, Rollup, Vite e Parcel.
- npm install -D tailwindcss postcss autoprefixer
- npx tailwindcss init

## Configurando Tailwindcss em seu projeto Vite
### Adicione Tailwindcss a sua configuração PostCSS
- crie um arquivo chamado postcss.config.cjs
- adicione tailwindcss e autoprefixer colando o seguinte trecho no arquivo:
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}

### Configure seus caminhos de modelo
- abra o arquivo tailwind.config.cjs
- cole o seguinte trecho no arquivo:
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

### Adicione as diretivas Tailwindcss ao seu CSS
- Crie um arquivo css principal
- Adicione as diretivas @tailwind ao seu arquivo colando o seguinte trecho:
@tailwind base;
@tailwind components;
@tailwind utilities;

## (Comece a usar Tailwindcss)[https://tailwindcss.com/docs/installation]