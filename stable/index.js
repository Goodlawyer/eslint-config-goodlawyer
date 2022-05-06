/**
 * ========================================================
 * =============== STABLE Release schedule ================
 * ========================================================
 */

/**
 * '@goodlawyer/eslint-config/stable'
 */
module.exports = require("./eslint/base");

/**
 * '@goodlawyer/eslint-config/stable/backend'
 */
module.exports.backend = require("./eslint/backend");

/**
 * '@goodlawyer/eslint-config/stable/frontend'
 */
module.exports.frontend = require("./eslint/frontend");

/**
 * '@goodlawyer/eslint-config/stable/prettier'
 */
module.exports.prettier = require("./prettier/prettier.config.cjs");
