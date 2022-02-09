module.exports = {
	extends: ["./base.js", "plugin:react/jsx-runtime", "plugin:react-hooks/recommended"],
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
		"react/no-deprecated": [2],
		"react/no-direct-mutation-state": [2],
		"react/prop-types": [0],
		"react/no-unknown-property": [1],
	},
};
