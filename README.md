### Video to follow

https://www.youtube.com/watch?v=gtZs1BPgf6Y&list=PLC3y8-rFHvwiWPS2RO3BKotLRfgg_8WEo&index=2&ab_channel=Codevolution

### Installing Babel

- Babel converts our jsx code to native javascript so it can be understood by the browsers it will run on

```
npm i -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript @babel/runtime @babel/plugin-transform-runtime
npm i -D babel-loader
```

### Installing Webpack

- Webpack allows us to....

```
npm i -D webpack webpack-cli webpack-dev-server html-webpack-plugin webpack-merge
```

### Configuring a style loader

- In order for our css files to get processed we gotta load em

```
npm i -D style-loader css-loader
```

### Configuring ESlint

make sure vscode eslint is installed

```
npm i -D eslint
npm i -D eslint-import-resolver-typescript
npx eslint --init
```

### Configuring Prettier

make sure vscode prettier is installed

```
npm i -D prettier eslint-config-prettier eslint-plugin-prettier
```

- prettier is the core library
- eslint-config-prettier removes eslint rules that may collide with prettier
- eslint-plugin-prettier runs prettier as an eslint rule


### COnfiguring pre commit linting


- Format files before staging

- Add these lines to our package.json

Whenever we try to commit our files, husky will first lint our code base

```
 "lint-staged": {
    "src/**/*.{js,jsx,ts,tsx,json}": [
      "eslint --fix"
    ],
    "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}": [
      "prettier --write"
    ]
  }


  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
```