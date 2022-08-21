/**
 * ========================================================
 * =============== NEXT Release schedule ================
 * ========================================================
 */

module.exports = {
	extends: ["./base.js", "plugin:@typescript-eslint/recommended"],
	settings: {
		"import/resolver": {
			node: {
				extensions: [".js", ".jsx", ".ts", ".tsx"],
			},
			// Support for tsconfig.json baseUrl
			typescript: {},
		},
	},
	parser: "@typescript-eslint/parser",
	// Support for tsconfig.json baseUrl
	parserOptions: {
		project: "./tsconfig.json",
		tsconfigRootDir: "./",
	},
	// Support for tsconfig.json baseUrl
	plugins: ["@typescript-eslint", "import"],
	rules: {
		"no-unused-vars": "off",
		"@typescript-eslint/no-unused-vars": "error",
	},
};
