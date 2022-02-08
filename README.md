# eslint-config-goodlawyer

Official Goodlawyer ESLint + Prettier Configurations

&nbsp;
## Configs

### ESLint
This package includes 3 ESLint configs:

| import path                         | file        | description                                | 
| ----------------------------------- | ----------- | ------------------------------------------ |
| `@goodlawyer/eslint-config/backend`  | backend.js  | Backend specific configs                   |
| `@goodlawyer/eslint-config/frontend` | frontend.js | Frontend specific configs                  |
| `@goodlawyer/eslint-config`          | base.js     | Shared configurations for frontend/backend |

More specific configs all extend from a base config for consistency. Any stack-specific ruleset should go in their respective config files, and any general rulesets that should be shared across all specific configs can go in the base config.

### Prettier
This package also includes a shared Prettier config, which can be used among any stack:
| import path                         | file        | description                                | 
| ----------------------------------- | ----------- | ------------------------------------------ |
| `@goodlawyer/eslint-config/prettier`  | prettier.js  | Prettier configs                  |

&nbsp;

## Installation

### Install Package

`npm install --dev @goodlawyer/eslint-config`

### Install Peer Dependencies

```sh
npm install --dev eslint prettier lint-staged husky
```
&nbsp;
### Create ESLint Config File
https://eslint.org/docs/developer-guide/shareable-configs#using-a-shareable-config

```jsonc
// Example using `.eslintrc` in a backend project root
{
  "extends": "@goodlawyer/eslint-config/backend"
}
```

_Use `@goodlawyer/eslint-config/frontend` for frontend projects_

### Add Prettier Config
https://prettier.io/docs/en/configuration.html#sharing-configurations

```jsonc
{
  "name": "my-cool-project",
  "version": "9000.0.1",
  "prettier": "@goodlawyer/eslint-config/prettier"
}

```
&nbsp;
### (Optional) Add Precommit Hook*

Add a precommit hook to `package.json` to automatically lint and format any files staged for commit

```json
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
},
"lint-staged": {
  "concurrent": false,
  "linters": {
    "*.{ts,tsx,js}": [
      "eslint --quiet",
      "git add"
    ],
    "*.{ts,tsx,js,json,md}": [
      "prettier --write",
      "git add"
    ]
  }
}
```

* In projects that has many code-smells not fixable by linters, this will be a hindrance.

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

If you've added Prettier to an existing project you will want to format all the code before making any further changes. This should also be done entirely within in it's own commit. This is to prevent mixing commits that include actual code-changes and formatting changes.

To format the entire codebase run

`npm run format`

&nbsp;

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
