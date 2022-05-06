module.exports = {
	extends: ["./base.js"],
	env: {
		node: true,
		mongo: true,
	},
	rules: {
		"no-param-reassign": [
			"warn",
			{ props: true, ignorePropertyModificationsForRegex: ["^err", "^req", "^res", "^next"] },
		],
	},
};
