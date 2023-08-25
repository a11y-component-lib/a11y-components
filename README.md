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

![Run tests in browser with coverage](https://github.com/a11y-component-lib/a11y-components/assets/48141726/8713b34e-8f35-4a6e-b88d-529fb3823945)

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
- _Push to **dev** or **main** branches and all pull requests will trigger a new Github Actions CI run._

```
   git push origin (dev | main)
```

## Storybook Component Documentation
- Add component stories to ```lib/<ComponentName>/ComponentName.stories.ts``` 
- Start Storybook server by running ```pnpm run storybook```
- Build Storybook server by running ```pnpm run build-storybook```

## Publishing
- Exclude test code and dist from published package.
- Additional steps TBD.
