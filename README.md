# eslint-config-goodlawyer

Official Goodlawyer ESLint + Prettier Configurations

&nbsp;

## Release schedules

We maintain 2 release schedules. Each release schedule contains a different set of configurations.

| version tag                                | description                                                                                                                                                  |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| stable | These configs power our current projects. When adding onto an existing app, this is generally used.                                                          |
| next   | These configs power our new projects. When adding onto a new app, this should be used as this will have the latest best-practices tailored suit to the team. |

&nbsp;

## Configs (next release)

### ESLint

For our **next** release schedule, we have 3 ESLint configs: (1 installation)

| import path                | file        | description                                |
| -------------------------- | ----------- | ------------------------------------------ |
| `@goodlawyer/eslint-config/backend`       | backend.js  | Backend specific configs                   |
| `@goodlawyer/eslint-config/frontend`      | frontend.js | Frontend specific configs                  |
| `@goodlawyer/eslint-config/eslint-config` | base.js     | Shared configurations for frontend/backend |

More specific configs all extend from a base config for consistency. Any stack-specific ruleset should go in their respective config files, and any general rulesets that should be shared across all specific configs can go in the base config.

### Prettier

This package also includes a shared Prettier config, which can be used among any stack:
| import path | file | description |
| ----------------------------------- | ----------- | ------------------------------------------ |
| `@goodlawyer/eslint-config/prettier` | prettier.config.cjs | Prettier configs |

### Typescript

For TypeScript support, we use [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint):

| import path | file | description |
| ----------------------------------- | ----------- | ------------------------------------------ |
| `@goodlawyer/eslint-config/typescript` | typescript | TypeScript ESLint parser to add TypeScript linting support |


&nbsp;

<!-- ============================================================== INSTALLATION =====================================================  -->
<details>
	<summary>
		<h2>Installation</h2> 
	</summary>
	
### Install Package

`npm install -D @goodlawyer/eslint-config`

### Install Peer Dependencies

`npm install -D eslint prettier lint-staged husky`

&nbsp;

### Add Prettier Config

https://prettier.io/docs/en/configuration.html#sharing-configurations

```jsonc
// Example using `package.json`
{
	...,
	"prettier": "@goodlawyer/eslint-config/prettier"
}
```

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


### TypeScript

When using this on a TypeScript project, we need to tell ESLint to use a different parser.
Our `@goodlawyer/eslint-config/typescript` config does this for us and more, which we can use by explicitly stating we want to extend from it, **on top** of whatever config we want to use:
	
As a rule of thumb, the TypeScript configuration should be the **last extension from our own configs.**

For example, if I wanted to use NextJS' ESLint configuration on a TypeScript project, my `extends` usage order would be:
 1. Goodlawyer frontend config
 2. Goodlawyer TypeScript config
 3. NextJS' recommended config

in that order. This ensures that the framework's (NextJS) recommended config takes the highest precedence, with our TS config next then our "stack-specific" config.

```jsonc
// Example using `.eslintrc.json` in a frontend NextJS project root
{
	"extends": ["@goodlawyer/eslint-config/frontend", "@goodlawyer/eslint-config/typescript", "plugin:@next/next/recommended"]
}
```

```jsonc
// Example using `.eslintrc.json` in a backend project root
{
	"extends": ["@goodlawyer/eslint-config/backend", "@goodlawyer/eslint-config/typescript"]
}
```

</details>

<!-- =========================================================== END OF INSTALLATION ====================================================  -->
<!-- ============================================================== USAGE =====================================================  -->
<details>
	<summary>
		<h2>Usage</h2>
	</summary>

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

</details>

<!-- ============================================================ END OF USAGE =====================================================  -->
<!-- ===============================================================DEVELOPMENT=====================================================  -->
<details>
	<summary>
		<h2>Development </h2>
	</summary>
	
TODO

</details>
<!-- ============================================================ END OF DEVELOPMENT ===============================================  -->
<!-- ============================================================== PUBLISHING ====================================================  -->
<details>
	<summary>
		<h2>Publishing</h2>
	</summary>

1. Update the version in package.json
2. Commit your changes **with a detailed message of what changed**
3. `npm pack --dry-run` to see what will be published
4. `npm publish`
5. (optional) Create a release on GitHub. Use the version as the tag and release name. For example for version 1.0.0 the tag and release name would be v1.0.0. Add the commit details to the release.

</details>

<!-- ========================================================== END OF PUBLISHING =====================================================  -->
<!-- ============================================================== RULESETS ====================================================  -->

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
 
<!-- ========================================================== END OF PUBLISHING =====================================================  -->

&nbsp;

#

Goodlawyer Engineering, MIT License
