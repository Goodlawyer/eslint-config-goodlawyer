module.exports = {
	extends: ["./base.js", "plugin:react/recommended", "plugin:react/jsx-runtime", "plugin:react-hooks/recommended"],
	plugins: ["react", "react-hooks"],
	ignorePatterns: [".next/*", "out/*", "cypress/*"],
	env: {
		browser: true,
	},
	settings: {
		react: {
			version: "detect",
		},
	},
	rules: {
		"no-nested-ternary": "off",
		// Plugins - React
		"react/no-deprecated": ["error"],
		"react/no-direct-mutation-state": ["error"],
		"react/prop-types": ["off"],
		"react/no-unknown-property": ["warn"],
		"react/no-unescaped-entities": ["warn"],
		"react/no-array-index-key": ["error"],
	},
};
