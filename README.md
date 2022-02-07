# eslint-config-goodlawyer

Official Goodlawyer ESLint configuration

This package includes 3 eslint configs:

| import path                         | file        | description                                | 
| ----------------------------------- | ----------- | ------------------------------------------ |
| `eslint-config-goodlawyer/backend`  | backend.js  | Backend specific configs                   |
| `eslint-config-goodlawyer/frontend` | frontend.js | Frontend specific configs                  |
| `eslint-config-goodlawyer`          | base.js     | Shared configurations for frontend/backend |

More specific configs all extend from a base config for consistency. Any stack-specific ruleset should go in their respective config files, and any general rulesets that should be shared across all specific configs can go in the base config.

## Base ruleset

`base.js`

| config                         | note |
| ------------------------------ | -----|
| [prefer-const](https://eslint.org/docs/rules/prefer-const.html)| [abnb](https://github.com/airbnb/javascript#references--prefer-const)|
|[no-var](https://eslint.org/docs/rules/no-var.html)|[abnb](https://github.com/airbnb/javascript#references--disallow-var)|
|[quote-props](https://eslint.org/docs/rules/quote-props.html) | [abnb](https://github.com/airbnb/javascript#objects--quoted-props)|
| [prefer-destructuring](https://eslint.org/docs/rules/prefer-destructuring) | [abnb](https://github.com/airbnb/javascript#destructuring--object)
|[prefer-template](https://eslint.org/docs/rules/prefer-template.html) & [template-curly-spacing](https://eslint.org/docs/rules/template-curly-spacing) | [abnb](https://github.com/airbnb/javascript#es6-template-literals)
|[no-eval](https://eslint.org/docs/rules/no-eval)|[abnb](https://github.com/airbnb/javascript#strings--eval)
|[no-loop-func](https://eslint.org/docs/rules/no-loop-func.html)|[abnb](https://github.com/airbnb/javascript#functions--in-blocks)
|[default-param-last](https://eslint.org/docs/rules/default-param-last)|[abnb](https://github.com/airbnb/javascript#functions--defaults-last)
[space-before-blocks](https://eslint.org/docs/rules/space-before-blocks)|[abnb](https://github.com/airbnb/javascript#functions--signature-spacing)
[no-param-reassign](https://eslint.org/docs/rules/no-param-reassign.html)|[abnb](https://github.com/airbnb/javascript#functions--mutate-params)
|[no-duplicate-imports](https://eslint.org/docs/rules/no-duplicate-imports)|[abnb](https://github.com/airbnb/javascript#modules--no-duplicate-imports)|
|[one-var](https://eslint.org/docs/rules/one-var.html)|[abnb](https://github.com/airbnb/javascript#variables--one-const)|
|[operator-linebreak](https://eslint.org/docs/rules/operator-linebreak.html)||
|[eqeqeq](https://eslint.org/docs/rules/eqeqeq.html)||
|[no-nested-ternary](https://eslint.org/docs/rules/no-nested-ternary.html)||
|[no-unneeded-ternary](https://eslint.org/docs/rules/no-unneeded-ternary.html)||
|||
|[import/first](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md)||

