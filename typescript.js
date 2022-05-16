/**
 * ========================================================
 * =============== NEXT Release schedule ================
 * ========================================================
 */

module.exports = {
	extends: ["./base.js", "plugin:@typescript-eslint/recommended"],
	parser: "@typescript-eslint/parser",
	settings: {
		"import/resolver": {
			node: {
				extensions: [".js", ".jsx", ".ts", ".tsx"],
			},
		},
	},
	rules: {
		"no-unused-vars": "off",
	},
};
