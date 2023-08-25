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

![Run tests in browser with coverage](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmQxcnFodmx5MWVobGx4MW1qNzU3cjlxM2FxMTN1eDdmbXJxYmQzdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wWws9747KYi8zoGJvu/giphy.gif)


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
