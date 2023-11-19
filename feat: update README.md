# FSW Trips 🏨 🧳

Site de reservas de viagens.

## 🎥 Demonstração

![fsw1](https://github.com/Mp455/fullstackweek-trips/assets/107141369/dbc10b54-93a6-446a-a2bb-fd2402650790)

## 💡 Funcionalidades

- Login de autenticação com Google Provider
- Reserva de Viagens
- Cancelamento de Viagens
- Sistema de Pagamentos com Stripe

## 🔃 Roadmap (Futuras atualizações)

- Melhorar o suporte de navegadores

- Adicionar mais integrações

## 🛠️ Stack utilizada

**Front-end:** Next.js, React.js, TypeScript, Prisma, PostgreSQL, Next Auth, Tailwind CSS, React Hook Form, Stripe API, Google Maps API.

## 🖌️ Documentação de cores

| Cor            | Hexadecimal                                                      |
| -------------- | ---------------------------------------------------------------- |
| primary        | ![#590BD8](https://via.placeholder.com/10/590BD8?text=+) #590BD8 |
| primaryLighter | ![#DDD5EA](https://via.placeholder.com/10/DDD5EA?text=+) #DDD5EA |
| primaryDarker  | ![#00b48a](https://via.placeholder.com/10/312A4F?text=+) #312A4F |
| grayPrimary    | ![#717171](https://via.placeholder.com/10/717171?text=+) #717171 |
| grayLighter    | ![#BBBFBF](https://via.placeholder.com/10/BBBFBF?text=+) #BBBFBF |

## ⚙️ Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`GOOGLE_CLIENT_ID`= ID do Cliente OAuth do Google

`GOOGLE_CLIENT_SECRET`= ID secreto do OAuth do Google do cliente

`NEXT_PUBLIC_STRIPE_KEY`= Chave pública da API do Stripe

`STRIPE_SECRET_KEY`= Chave secreta da API do Stripe

`STRIPE_WEBHOOK_SECRET_KEY`= Chave secreta do WebHook do Stripe

`HOST_URL`= URL de ambiente

`NEXTAUTH_SECRET`= Chave Secreta do Next Auth

Para obter essa chave você precisa instalar o [Stripe CLI](https://fullstackclub.com.br/fsw/)

- Na linha de comando, use um script de instalação ou baixe e extraia um arquivo com controle de versão para que o sistema operacional instale a CLI.

- Entre na sua conta de usuário Stripe e a autentique para gerar um conjunto de chaves restritas. Para saber mais, consulte Chaves e permissões da Stripe CLI.

- Entre na sua conta de usuário Stripe e a autentique para gerar um conjunto de chaves restritas. Para saber mais, consulte Chaves e permissões da Stripe CLI.

## 💻 Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/Mp455/fullstackweek-trips.git
```

Entre no diretório do projeto

```bash
  cd fullstackweek-trips
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run dev
```

## ⌛ Deploy

 Link para Deploy:

[Sistema de Viagens FSW-Trips](https://fullstackweek-trips-mp455s-projects.vercel.app/)

## 🔎 Referência

- [Curso Full Stack Week](https://fullstackclub.com.br/fsw/)

## 🚀 Feedback

Se você tiver algum feedback, seria interessante receber pelo meu email principal: marcospaulosousa48@gmail.com
