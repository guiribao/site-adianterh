# Site - Adiante RH

## Como utilizar

Instalando as dependencias

- Dentro da pasta do projeto, rode o comando abaixo:
```bash
npm install
```

- Altere o nome do arquivo .env.default para .env.local
- Atribua valores às variaveis de ambiente conforme descrição abaixo:
  - ENVIRONMENT -> Ambiente (aqui, localmente utilizo o valor "development")
  - NEXT_PUBLIC_APP_URL -> URL pública da aplicação (em dev, utilize http://localhost:3000)

- Após, rode o comando abaixo para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) para ver o resultado.

