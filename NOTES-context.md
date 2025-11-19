> You're creating the SettingsContext inside the SettingsProvider component:
> `const SettingsContext = React.createContext(settingsValues);`
> This line creates a new context every time the SettingsProvider component renders. This is not how React Context is intended to be used.
> Why This Is a Problem: New Context Instance on Every Render: Every render produces a new SettingsContext. Any component using useContext(SettingsContext) won’t work, because it’s referencing a different context instance than the one used in the provider. Hooks like useContext(SettingsContext) will break.Consumers will not be able to access the context correctly because they are not using the same instance that is being provided. Performance issues & debugging confusion.

https://github.com/jherr/no-bs-ts/blob/9bd14de2d4aa879ede4f1495ac0626786d6afa31/series-1/episode-25/src/useTodos.tsx
https://github.com/jherr/no-bs-ts/blob/9bd14de2d4aa879ede4f1495ac0626786d6afa31/series-1/episode-25/src/App.tsx
- App inits the initial todo


https://stackoverflow.com/questions/71444034/what-are-the-right-types-for-a-usecontext-with-typescript-reactjs

``` tsx

export const SettingsContext = React.createContext< SettingsContextType | null>(null)
// vs
export const SettingsContext = React.createContext< SettingsContextType | undefined>(undefined)
// export const SettingsContext = React.createContext< SettingsContextType | null>(null)

```