# eslint-config-goodlawyer

Official Goodlawyer ESLint configuration


## Configs
This package includes 3 eslint configs:

| import path                         | file        | description                                | 
| ----------------------------------- | ----------- | ------------------------------------------ |
| `@goodlawyer/eslint-config/backend`  | backend.js  | Backend specific configs                   |
| `@goodlawyer/eslint-config/frontend` | frontend.js | Frontend specific configs                  |
| `@goodlawyer/eslint-config`          | base.js     | Shared configurations for frontend/backend |

More specific configs all extend from a base config for consistency. Any stack-specific ruleset should go in their respective config files, and any general rulesets that should be shared across all specific configs can go in the base config.

## Installation

### Install Package

`npm install --dev @goodlawyer/eslint-config`

### Install Peer Dependencies

```sh
npm install --dev eslint prettier
```

### Create ESLint Config File

Add `.eslintrc` to project root

```json
{
  "extends": "@goodlawyer/eslint-config/backend"
}
```

_Use `@goodlawyer/eslint-config/frontend` for frontend projects_

### Create Prettier Config File

Add `.prettierrc` to project root

```json
{
  "printWidth": 120,
  "singleQuote": true
}
```

### Add Scripts

Add scripts for linting and formatting to `package.json`

```json
"scripts": {
  "lint": "eslint .",
  "format": "prettier --write \"**/*.{ts,tsx,js,json,graphql,md}\"",
  "format:check": "prettier --debug-check \"**/*.{ts,tsx,js,json,graphql,md}\""
}
```

### Format Code

If you've added Prettier to an existing project you will want to format all the code before making any further changes. This should also be done in it's own commit. To format the entire codebase run

`npm run format`


## Rulesets
<details> <summary> Base </summary> 
  
`base.js`


| Rule                         | Note |
| ------------------------------ | -----|
| [prefer-const](https://eslint.org/docs/rules/prefer-const.html)| https://github.com/airbnb/javascript#references--prefer-const
|[no-var](https://eslint.org/docs/rules/no-var.html)|https://github.com/airbnb/javascript#references--disallow-var
|[quote-props](https://eslint.org/docs/rules/quote-props.html) | https://github.com/airbnb/javascript#objects--quoted-props
| [prefer-destructuring](https://eslint.org/docs/rules/prefer-destructuring) | https://github.com/airbnb/javascript#destructuring--object|
|[prefer-template](https://eslint.org/docs/rules/prefer-template.html) & [template-curly-spacing](https://eslint.org/docs/rules/template-curly-spacing) | https://github.com/airbnb/javascript#es6-template-literals
|[no-eval](https://eslint.org/docs/rules/no-eval)|https://github.com/airbnb/javascript#strings--eval
|[no-loop-func](https://eslint.org/docs/rules/no-loop-func.html)|https://github.com/airbnb/javascript#functions--in-blocks
|[default-param-last](https://eslint.org/docs/rules/default-param-last)|https://github.com/airbnb/javascript#functions--defaults-last
[space-before-blocks](https://eslint.org/docs/rules/space-before-blocks)|https://github.com/airbnb/javascript#functions--signature-spacing
[no-param-reassign](https://eslint.org/docs/rules/no-param-reassign.html)|https://github.com/airbnb/javascript#functions--mutate-params
|[no-duplicate-imports](https://eslint.org/docs/rules/no-duplicate-imports)|https://github.com/airbnb/javascript#modules--no-duplicate-imports
|[one-var](https://eslint.org/docs/rules/one-var.html)|https://github.com/airbnb/javascript#variables--one-const
|[operator-linebreak](https://eslint.org/docs/rules/operator-linebreak.html)|https://github.com/airbnb/javascript#variables--linebreak
|[eqeqeq](https://eslint.org/docs/rules/eqeqeq.html)|https://github.com/airbnb/javascript#comparison--eqeqeq
|[no-nested-ternary](https://eslint.org/docs/rules/no-nested-ternary.html)|https://github.com/airbnb/javascript#comparison--nested-ternaries|
|[no-unneeded-ternary](https://eslint.org/docs/rules/no-unneeded-ternary.html)|https://github.com/airbnb/javascript#comparison--unneeded-ternary|
|||
|[import/first](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md)||

 </details>
