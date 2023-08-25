# A11y Components 
## Stack
- React & TypeScript 
- Vite
- Tailwind CSS
- pnpm
- **Vitest** & **React Testing Library** for Testing
- **Github Actions** for Continuous Integration
- **Storybook** for Component ocumentation

## Usage
- Add component code to ```lib/<ComponentName>/ComponentName.tsx``` and then demonstrate usage by rendering in ```src/App.tsx```
- Build by running ```pnpm run build```
- Publish package and increment version steps TBD

## Testing Components

- Run tests in browser using:

```js
   pnpm run test:ui
```

![Run tests in browser with coverage](https://d1ro8r1rbfn3jf.cloudfront.net/ms_221571/gC2UXQSEBXOysmogL86oDyKm44I3iQ/Monosnap%2Bscreencast%2B2023-08-25%2B10-30-08.gif?Expires=1692977400&Signature=m3hZ0Isho8kDdVCnwVvDZM~XDD9bfOKUtDf3Y6t99RE~qXOmGy80iwONyv~RploP429Cf0FYt0Kmx0ENjTmIMhWSRFE6aNnKkXlElGhfKyu9mg9fYGrFBrbEkHT2mgbnNYElp2myKiAZfb4Gq-WYXht9zDzKYzeqrNwwsa9hWR33pUxBiIIfGa8kKuA5ENJHnGE3dlmhs-o~CfKyc3oeC3qlkIE386KCJuj4MQ5U4mtXjFKP9B92ukoSxDbEX6c4M1lM0WUGQlmiFd1HCdxtUzMHfpy3E1tn4wHOzubMui763Jh-JaL0F33y5EKdWxcQ9YQHWt5F9FuYzwty8t7dmg__&Key-Pair-Id=APKAJBCGYQYURKHBGCOA)


## Available Import Aliases

```js
   "@/*" to import from 'src' 
   "@/assets" to import from 'src/assets' 
   "@/lib" to import from 'src/lib' 
   "@/hooks" to import from 'src/hooks' 
   "@/types" to import from 'src/types' 
   "@/styles" to import from 'src/styles' 
   "@/test" to import from 'src/test' 
```

*For example, __App.tsx__ imports global styles using the following syntax:*

```js
import '@/styles/App.css'
```

## Continuous Integration
```
   git push origin (dev | main)
```
