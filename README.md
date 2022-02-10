# eslint-config-goodlawyer

Official Goodlawyer ESLint + Prettier Configurations

&nbsp;

## Configs

### ESLint

This package includes 3 ESLint configs:

| import path                          | file        | description                                |
| ------------------------------------ | ----------- | ------------------------------------------ |
| `@goodlawyer/eslint-config/backend`  | backend.js  | Backend specific configs                   |
| `@goodlawyer/eslint-config/frontend` | frontend.js | Frontend specific configs                  |
| `@goodlawyer/eslint-config`          | base.js     | Shared configurations for frontend/backend |

More specific configs all extend from a base config for consistency. Any stack-specific ruleset should go in their respective config files, and any general rulesets that should be shared across all specific configs can go in the base config.

### Prettier

This package also includes a shared Prettier config, which can be used among any stack:
| import path | file | description |
| ----------------------------------- | ----------- | ------------------------------------------ |
| `@goodlawyer/eslint-config/prettier` | prettier.config.cjs | Prettier configs |

&nbsp;

## Installation

### Install Package

`npm install -D @goodlawyer/eslint-config`

### Install Peer Dependencies

`npm install -D eslint prettier lint-staged husky`

&nbsp;

### Create ESLint Config File

https://eslint.org/docs/developer-guide/shareable-configs#using-a-shareable-config

```jsonc
// Example using `.eslintrc.json` in a backend project root
{
	"extends": "@goodlawyer/eslint-config/backend"
}
```

_Use `@goodlawyer/eslint-config/frontend` for frontend projects. For special-cases like NextJS, see [Environments > NextJS](#nextjs)._

&nbsp;

### Add Prettier Config

https://prettier.io/docs/en/configuration.html#sharing-configurations

```jsonc
// package.json
{
	"name": "my-cool-project",
	"version": "9000.0.1",
	"prettier": "@goodlawyer/eslint-config/prettier"
}
```

&nbsp;

### Add Precommit Hook

Add a precommit hook to `package.json` to automatically lint\* and format any files staged for commit

```jsonc
// package.json
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
},
"lint-staged": {
  "concurrent": false,
  "linters": {
    "*.{ts,tsx,js,jsx}": [
      "eslint --quiet",
      "git add"
    ],
    "*.{ts,tsx,js,jsx}": [
      "prettier --write",
      "git add"
    ]
  }
}
```

\*In projects that has many code-smells not fixable by linters, this can become problematic as you cannot push without fixing the lint errors. Remove linting but keep formatting if necessary.

&nbsp;

### Add Scripts

Add scripts for linting and formatting to `package.json`

```jsonc
// package.json
"scripts": {
  "lint": "eslint .",
  "format": "prettier --write \"**/*.{ts,tsx,js,jsx}\"",
  "format:check": "prettier --debug-check \"**/*.{ts,tsx,js,jsx}\""
}
```

&nbsp;

### Environments

#### NextJS

NextJS inludes their own ESLint plugin out of the box as of v11. To add this on top of the frontend rules, you must extend from the plugin directly:

https://nextjs.org/docs/basic-features/eslint#migrating-existing-config

```jsonc
// Example using `.eslintrc.json` in a frontend NextJS project root
{
	"extends": ["@goodlawyer/eslint-config/frontend", "plugin:@next/next/recommended"]
}
```

Also make sure that build output files are not linted or formatted, see [Usage > Ignore Files](#ignore-files)

&nbsp;

## Usage

### Format Code

If you've added Prettier to an existing project you will want to format all the code before making any further changes. This should also be done entirely within in **it's own commit**, excluding changes made by installation above. This is to prevent mixing commits that include actual code-changes and formatting changes.

Before formatting, it's a good idea to run a soft-check to verify the files that will be formatted. This mindful check can verify whether you're ignoring files that should be ignored, before going to CI (ie. tests, build outputs). See [Ignore files](#ignore-files)

`npm run format:check`

To format an entire codebase, run

`npm run format`

&nbsp;

### Ignore files

There might be files that do shouldn't need linting & formatting, like test files or build outputs. You can add a `.prettierignore` at project root to do this:

```
// .prettierignore

/* Testing frameworks */
cypress

/* NextJS */
.next
```

If you're needing to do this often, consider adding an `ignorePatterns` config in one of our configs above. 

https://eslint.org/docs/user-guide/configuring/ignoring-code#ignorepatterns-in-config-files

&nbsp;

## Publishing
1. Update the version in package.json
2. Commit your changes **with a detailed message of what changed**
3. npm pack --dry-run to see what will be published
4. npm publish
5. (optional) Create a release on GitHub. Use the version as the tag and release name. For example for version 1.0.0 the tag and release name would be v1.0.0. Add the commit details to the release.

&nbsp;

## Rulesets (outdated)

<details> <summary> Base </summary> 
  
`base.js`

| Rule                                                                                                                                                   | Note                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
| [prefer-const](https://eslint.org/docs/rules/prefer-const.html)                                                                                        | https://github.com/airbnb/javascript#references--prefer-const      |
| [no-var](https://eslint.org/docs/rules/no-var.html)                                                                                                    | https://github.com/airbnb/javascript#references--disallow-var      |
| [quote-props](https://eslint.org/docs/rules/quote-props.html)                                                                                          | https://github.com/airbnb/javascript#objects--quoted-props         |
| [prefer-destructuring](https://eslint.org/docs/rules/prefer-destructuring)                                                                             | https://github.com/airbnb/javascript#destructuring--object         |
| [prefer-template](https://eslint.org/docs/rules/prefer-template.html) & [template-curly-spacing](https://eslint.org/docs/rules/template-curly-spacing) | https://github.com/airbnb/javascript#es6-template-literals         |
| [object-curly-spacing](https://eslint.org/docs/rules/object-curly-spacing)                                                                             | [abnb](https://github.com/airbnb/javascript#whitespace--in-braces) |
| [no-eval](https://eslint.org/docs/rules/no-eval)                                                                                                       | https://github.com/airbnb/javascript#strings--eval                 |
| [no-loop-func](https://eslint.org/docs/rules/no-loop-func.html)                                                                                        | https://github.com/airbnb/javascript#functions--in-blocks          |
| [default-param-last](https://eslint.org/docs/rules/default-param-last)                                                                                 | https://github.com/airbnb/javascript#functions--defaults-last      |
| [space-before-blocks](https://eslint.org/docs/rules/space-before-blocks)                                                                               | https://github.com/airbnb/javascript#functions--signature-spacing  |
| [no-param-reassign](https://eslint.org/docs/rules/no-param-reassign.html)                                                                              | https://github.com/airbnb/javascript#functions--mutate-params      |
| [no-duplicate-imports](https://eslint.org/docs/rules/no-duplicate-imports)                                                                             | https://github.com/airbnb/javascript#modules--no-duplicate-imports |
| [one-var](https://eslint.org/docs/rules/one-var.html)                                                                                                  | https://github.com/airbnb/javascript#variables--one-const          |
| [operator-linebreak](https://eslint.org/docs/rules/operator-linebreak.html)                                                                            | https://github.com/airbnb/javascript#variables--linebreak          |
| [eqeqeq](https://eslint.org/docs/rules/eqeqeq.html)                                                                                                    | https://github.com/airbnb/javascript#comparison--eqeqeq            |
| [no-nested-ternary](https://eslint.org/docs/rules/no-nested-ternary.html)                                                                              | https://github.com/airbnb/javascript#comparison--nested-ternaries  |
| [no-unneeded-ternary](https://eslint.org/docs/rules/no-unneeded-ternary.html)                                                                          | https://github.com/airbnb/javascript#comparison--unneeded-ternary  |
|                                                                                                                                                        |                                                                    |
| [import/first](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md)                                                        |                                                                    |

 </details>

&nbsp;

#

Goodlawyer Engineering, MIT License
