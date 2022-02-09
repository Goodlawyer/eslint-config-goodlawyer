module.exports = {
	extends: ["eslint:recommended", "prettier"],
	plugins: ["promise", "import"],
	ignorePatterns: ["node_modules", "*test", "test*"],
	env: {
		es6: true,
		node: true,
	},
	parserOptions: {
		// https://kangax.github.io/compat-table/es2016plus/
		ecmaVersion: 2021,
		sourceType: "module",
		ecmaFeatures: {
			impliedStrict: true,
		},
	},
	rules: {
		// Inspirations - Airbnb
		"prefer-const": [
			"warn",
			{
				destructuring: "all",
				ignoreReadBeforeAssign: false,
			},
		],
		"no-var": "warn",
		"quote-props": ["warn", "consistent-as-needed"],
		"prefer-destructuring": [
			"warn",
			{
				array: true,
				object: true,
			},
			{
				enforceForRenamedProperties: false,
			},
		],
		"prefer-template": "warn",
		"template-curly-spacing": ["warn", "never"],
		"no-eval": "warn",
		"no-loop-func": "warn",
		"default-param-last": "warn",
		"space-before-blocks": ["warn", "always"],
		"no-param-reassign": ["warn", { props: true }],
		"no-duplicate-imports": ["warn", { includeExports: true }],
		"one-var": ["warn", "never"],
		"operator-linebreak": ["warn", "before"],
		eqeqeq: ["warn", "smart"],
		"no-nested-ternary": "warn",
		"no-unneeded-ternary": "warn",
		"no-unused-vars": "warn",
		"object-curly-spacing": ["warn", "always"],
		// To-taste rules
		//
		// Plugins rules
		"import/first": ["warn", "absolute-first"],
		"import/no-unresolved": [1, { caseSensitive: true }],
	},
};
