# Fiannce Tracker SaaS
<a name="readme-top"></a>
<!-- PROJECT LOGO -->
<br />
<div align="center">

<h3 align="center">Full Stack Finance Tracker SaaS</h3>

  <p align="center">
    A full stack finance tracker Software as a Service built with Next.js, React, Tailwind CSS, Neon (PostgreSQL), Drizzle, Plaid, and LemonSqueezy. This project encompasses essential features for a financial budget tracker, including user authentication, transaction recording, account management, category tagging, comprehensive expense and income tracking overview, subscription management for premium plans, and seamless integration with banking services.
  </p>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#instructions">Instructions</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

The project focuses on creating a full stack financial expenses tracker SaaS. The frontend is built with Next.js and React, providing a dynamic and responsive user interface. Tailwind CSS is used for styling to achieve a modern and sleek design.

The backend is powered by Neon, an open-source Firebase alternative built on top of PostgreSQL. Neon handles user authentication with migrations done through Drizzle.

The subscription managemet is backed by LemonSqueezy, a Plaid alternative, for monthly payments for a premium plan. Users can connect to their banks through Plaid to view their transactions.

This project aims to provide a comprehensive example of building a production-ready Finance Tracker SaaS, covering key aspects such as authentication, data management, and payment processing.

## [Live Demo 🔗](https://financetracker.ryanlepham.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Next.js][Next.js]][Next.js-url]
* [![React][React]][React-url]
* [![Tailwind CSS][Tailwind CSS]][Tailwind CSS-url]
* [![Hono][Hono]][Hono-url]
* [![Neon][Neon]][Neon-url]
* [![Drizzle][Drizzle]][Drizzle-url]
* [![PostgreSQL][PostgreSQL]][PostgreSQL-url]
* [![Plaid][Plaid]][Plaid-url]
* [![LemonSqueezy][LemonSqueezy]][LemonSqueezy-url]
* [![Vercel][Vercel]][Vercel-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- ✔️ Develop an interactive financial dashboard
- ✔️ Enabled changeable chart types for better data visualization.
- ✔️ Add account and date filters to customize views
- ✔️ Include a detailed transactions table for comprehensive financial tracking.
- ✔️ Support CSV transaction imports for transaction data integration.
- ✔️ Set up an API using Hono.js.
- ✔️ Manage state using Tanstack React Query.
- ✔️ Ensure user authentication with Clerk (Core 2).
- ✔️ Build the application using Next.js 14.
- ✔️ Style the app with TailwindCSS and Shadcn UI.
- ✔️ Utilize Neon (PostgreSQL) for database management.
- ✔️ Use Drizzle for database migrations.
- ✔️ Integrate premium plan subscription management through Lemon Squeezy.
- ✔️ Connect with banks and import transactions using Plaid.
- ✔️ Deploy the application on Vercel with custom domain from AWS Route53.


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- INSTRUCTIONS -->
## Instructions

#### Prerequisites

**Node version 14.x**

##### Cloning the repository

```shell
git clone https://github.com/phammings/Finance-Tracker-SaaS.git
```

##### Install packages

```shell
npm i
```

#### Setup .env file from .env.example

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

DATABASE_URL=

NEXT_PUBLIC_APP_URL=

PLAID_CLIENT_TOKEN=
PLAID_SECRET_TOKEN=

LEMONSQUEEZY_API_KEY=
LEMONSQUEEZY_STORE_ID=
LEMONSQUEEZY_WEBHOOK_SIGNATURE=
LEMONSQUEEZY_PRODUCT_ID=
```

#### Run the migrations

```shell
npm run db:generate
npm run db:migrate
npm run db:seed
npm run db:studio
```

#### Start the app

```shell
npm run dev
```

#### Testing with LemonSqueezy Payment

Credit Card Number:
```
4242 4242 4242 4242
```

For the rest of the payment method details: choose any valid details (i.e. expiry date is in the future).

#### Testing with Plaid

All Bank Account login details:
```
Login: user_good
Password: pass_good

Mobile Number Confirmation #: 1234
```

    


<p align="right">(<a href="#readme-top">back to top</a>)</p>



[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next.js-url]: https://nextjs.org/
[Tailwind CSS]: https://img.shields.io/badge/tailwindcss-000000?style=for-the-badge&logo=tailwindcss&logoColor=blue
[Tailwind CSS-url]: https://tailwindcss.com/
[Hono]: https://img.shields.io/badge/hono-E36002?style=for-the-badge&logo=hono&logoColor=white
[Hono-url]: https://hono.dev/
[Neon]: https://img.shields.io/badge/neon-39FF14?style=for-the-badge&logo=neon&logoColor=white
[Neon-url]: https://neon.tech/
[Drizzle]: https://img.shields.io/badge/drizzle-C5F74F?style=for-the-badge&logo=drizzle&logoColor=black
[Drizzle-url]: https://orm.drizzle.team/
[PostgreSQL]: https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white
[PostgreSQL-url]: https://www.postgresql.org/
[Plaid]: https://img.shields.io/badge/plaid-000000?style=for-the-badge&logo=neon&logoColor=white
[Plaid-url]: https://plaid.com/
[LemonSqueezy]: https://img.shields.io/badge/lemonsqueezy-FFC233?style=for-the-badge&logo=lemonsqueezy&logoColor=black
[LemonSqueezy-url]: https://www.lemonsqueezy.com/
[React]: https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB
[React-url]: https://reactjs.org/
[Vercel]: https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white
[Vercel-url]: https://reactjs.org/